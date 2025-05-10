"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { eventFormSchema } from "@/schema/events"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import Link from "next/link"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { Switch } from "../ui/switch"
import { createEvent, deleteEvent, updateEvent } from "@/server/actions/events"
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTrigger,
    AlertDialogTitle,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "../ui/alert-dialog"
import { useState, useTransition } from "react"

export function EventForm({
    event,
}: {
    event?: {
        id: string
        name: string
        description?: string
        durationInMinutes: number
        isActive: boolean
    }
}) {
    const [isDeletePending, startDeleteTransition] = useTransition()
    const form = useForm<z.infer<typeof eventFormSchema>>({
        resolver: zodResolver(eventFormSchema),
        defaultValues: {
            name: event?.name ?? "",
            description: event?.description ?? "",
            durationInMinutes: event?.durationInMinutes ?? 30,
            isActive: event?.isActive ?? true,
        },      
        //defaultValues: event ?? {
        //isActive: true,
        //durationInMinutes: 30,
        //},
    })

    async function onSubmit(values: z.infer<typeof eventFormSchema>) {
        const action =
        event == null ? createEvent : updateEvent.bind(null, event.id)
        const data = await action(values)

        if (data?.error) {
        form.setError("root", {
            message: "There was an error saving your event",
        })
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
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                    <Input {...field} />
                </FormControl>
                <FormDescription>
                    The name users will see when booking
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="durationInMinutes"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Duration</FormLabel>
                <FormControl>
                    <Input type="number" {...field} />
                </FormControl>
                <FormDescription>In minutes</FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                    <Textarea className="resize-none h-32" {...field} />
                </FormControl>
                <FormDescription>
                    Optional description of the event
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="isActive"
            render={({ field }) => (
                <FormItem>
                <div className="flex items-center gap-2">
                        <FormControl>
                        <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className={`
                            relative inline-flex h-6 w-11 items-center rounded-full border transition-colors
                            data-[state=checked]:bg-blue-500 
                            data-[state=unchecked]:bg-gray-300
                            border-gray-100
                            after:content-[''] after:absolute after:left-1
                            after:top-1/2 after:-translate-y-1/2
                            after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-transform
                            data-[state=checked]:after:translate-x-5
                            data-[state=unchecked]:after:translate-x-0
                            `}
                        />
                        </FormControl>
                        <FormLabel>Active</FormLabel>
                </div>

                <FormDescription>
                    Inactive events will not be visible for users to book
                </FormDescription>
                </FormItem>
            )}
            />
            <div className="flex gap-2 justify-end">
            {event && (
                <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                    className="text-destructive hover:bg-destructive hover:text-white"
                    disabled={isDeletePending || form.formState.isSubmitting}
                    >
                    Delete
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white shadow-xl border border-border text-foreground">

                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete
                        your this event.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        className="text-destructive hover:bg-destructive hover:text-white"
                        disabled={isDeletePending || form.formState.isSubmitting}
                        onClick={() => {
                            startDeleteTransition(async () => {
                            const data = await deleteEvent(event.id)

                            if (data?.error) {
                                form.setError("root", {
                                message: "There was an error deleting your event",
                                })
                            }
                            })
                        }}
                        >
                        Delete
                        </AlertDialogAction>

                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialog>
            )}

            <Button
                disabled={isDeletePending || form.formState.isSubmitting}
                type="button"
                asChild
                variant="outline"
            >
                <Link href="/events">Cancel</Link>
            </Button>
            <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-all"
                disabled={isDeletePending || form.formState.isSubmitting}
                type="submit"
            >
                Save
            </Button>
            </div>
        </form>
        </Form>
    )
}