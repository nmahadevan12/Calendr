"use client"

import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form"
import { Button } from "../ui/button"
import { DAYS_OF_WEEK_IN_ORDER } from "@/data/constants"
import { scheduleFormSchema } from "@/schema/schedule"
import { timeToInt } from "@/lib/utils"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"
import { formatTimezoneOffset } from "@/lib/formatters"
import { Fragment, useState } from "react"
import { Plus, X } from "lucide-react"
import { Input } from "../ui/input"
import { saveSchedule } from "@/server/actions/schedule"

// Custom groupBy implementation
function groupBy<T, K extends keyof any>(array: T[], keyGetter: (item: T) => K): Record<K, T[]> {
    return array.reduce((result, currentItem) => {
        const key = keyGetter(currentItem)
        if (!result[key]) {
            result[key] = []
        }
        result[key].push(currentItem)
        return result
    }, {} as Record<K, T[]>)
}

type Availability = {
    startTime: string
    endTime: string
    dayOfWeek: (typeof DAYS_OF_WEEK_IN_ORDER)[number]
}

export function ScheduleForm({
    schedule,
}: {
    schedule?: {
        timezone: string
        availabilities: Availability[]
    }
}) {
    const [successMessage, setSuccessMessage] = useState<string>()
    const form = useForm<z.infer<typeof scheduleFormSchema>>({
        resolver: zodResolver(scheduleFormSchema),
        defaultValues: {
            timezone:
                schedule?.timezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone,
            availabilities: schedule?.availabilities.toSorted((a, b) => {
                return timeToInt(a.startTime) - timeToInt(b.startTime)
            }),
        },
    })

    const {
        append: addAvailability,
        remove: removeAvailability,
        fields: availabilityFields,
    } = useFieldArray({ name: "availabilities", control: form.control })

    // Use the custom groupBy function
    const groupedAvailabilityFields = groupBy(
        availabilityFields.map((field, index) => ({ ...field, index })),
        availability => availability.dayOfWeek
    )

    async function onSubmit(values: z.infer<typeof scheduleFormSchema>) {
        const data = await saveSchedule(values)

        if (data?.error) {
            form.setError("root", {
                message: "There was an error saving your schedule",
            })
        } else {
            setSuccessMessage("Schedule saved!")
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex gap-6 flex-col"
            >
                {form.formState.errors.root && (
                    <div className="text-destructive text-sm">
                        {form.formState.errors.root.message}
                    </div>
                )}
                {successMessage && (
                    <div className="text-green-500 text-sm">{successMessage}</div>
                )}
                <FormField
                    control={form.control}
                    name="timezone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Timezone</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {Intl.supportedValuesOf("timeZone").map(timezone => (
                                        <SelectItem key={timezone} value={timezone}>
                                            {timezone}
                                            {` (${formatTimezoneOffset(timezone)})`}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-[auto,1fr] gap-y-6 gap-x-4">
                    {DAYS_OF_WEEK_IN_ORDER.map(dayOfWeek => (
                        <Fragment key={dayOfWeek}>
                            <div className="capitalize text-sm font-semibold">
                                {dayOfWeek.substring(0, 3)}
                            </div>
                            <div className="flex flex-col gap-2">
                                <Button
                                    type="button"
                                    className="size-6 p-1 flex items-center justify-center"
                                    variant="outline"
                                    onClick={() => {
                                        addAvailability({
                                            dayOfWeek,
                                            startTime: "9:00",
                                            endTime: "17:00",
                                        })
                                    }}
                                >
                                    <Plus className="w-4 h-4" />
                                </Button>
                                {groupedAvailabilityFields[dayOfWeek]?.map(
                                    (field, labelIndex) => (
                                        <div className="flex flex-col gap-1" key={field.id}>
                                            <div className="flex gap-2 items-center">
                                                <FormField
                                                    control={form.control}
                                                    name={`availabilities.${field.index}.startTime`}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Input
                                                                    className="w-24"
                                                                    aria-label={`${dayOfWeek} Start Time ${
                                                                        labelIndex + 1
                                                                    }`}
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                        </FormItem>
                                                    )}
                                                />
                                                -
                                                <FormField
                                                    control={form.control}
                                                    name={`availabilities.${field.index}.endTime`}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Input
                                                                    className="w-24"
                                                                    aria-label={`${dayOfWeek} End Time ${
                                                                        labelIndex + 1
                                                                    }`}
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                        </FormItem>
                                                    )}
                                                />
                                                <Button
                                                    type="button"
                                                    onClick={() => removeAvailability(field.index)}
                                                    className="size-6 p-1 bg-white text-red-600 shadow-xs hover:bg-red-600 hover:text-white focus-visible:ring-red-200 dark:focus-visible:ring-red-400"
                                                >
                                                    <X />
                                                </Button>
                                            </div>
                                            <FormMessage>
                                                {
                                                    form.formState.errors.availabilities?.at?.(
                                                        field.index
                                                    )?.root?.message
                                                }
                                            </FormMessage>
                                            <FormMessage>
                                                {
                                                    form.formState.errors.availabilities?.at?.(
                                                        field.index
                                                    )?.startTime?.message
                                                }
                                            </FormMessage>
                                            <FormMessage>
                                                {
                                                    form.formState.errors.availabilities?.at?.(
                                                        field.index
                                                    )?.endTime?.message
                                                }
                                            </FormMessage>
                                        </div>
                                    )
                                )}
                            </div>
                        </Fragment>
                    ))}
                </div>

                <div className="flex gap-2 justify-end">
                    <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-all" disabled={form.formState.isSubmitting} type="submit">
                        Save
                    </Button>
                </div>
            </form>
        </Form>
    )
}