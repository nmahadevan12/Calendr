"use client"

import { useState } from "react"
import { Button, ButtonProps } from "./ui/button"
import { Copy, CopyCheck, CopyX } from "lucide-react"

type CopyState = "idle" | "copied" | "error"

export function CopyEventButton({
    eventId,
    clerkUserId,
    ...buttonProps
}: Omit<ButtonProps, "children" | "onClick"> & {
    eventId: string
    clerkUserId: string
}) {
    const [copyState, setCopyState] = useState<CopyState>("idle")

    const CopyIcon = getCopyIcon(copyState)

    return (
        <Button
        {...buttonProps}
        onClick={() => {
            const url = `${location.origin}/book/${clerkUserId}/${eventId}`
            if (window.isSecureContext && navigator.clipboard?.writeText) {
                navigator.clipboard.writeText(url)
                    .then(() => {
                        setCopyState("copied")
                        setTimeout(() => setCopyState("idle"), 2000)
                    })
                    .catch(() => {
                        setCopyState("error")
                        setTimeout(() => setCopyState("idle"), 2000)
                    })
            } else {
                const textarea = document.createElement("textarea")
                textarea.value = url
                textarea.style.position = "fixed"
                textarea.style.opacity = "0" 
                document.body.appendChild(textarea) 
                textarea.select()
                try {
                    document.execCommand("copy")
                    setCopyState("copied")
                } catch {
                    setCopyState("error")
                }
                document.body.removeChild(textarea)
                setTimeout(() => setCopyState("idle"), 2000)
            }
        }}        
        >
        <CopyIcon className="size-4 mr-2" />
        {getChildren(copyState)}
        </Button>
    )
}

function getCopyIcon(copyState: CopyState) {
    switch (copyState) {
        case "idle":
        return Copy
        case "copied":
        return CopyCheck
        case "error":
        return CopyX
    }
}

function getChildren(copyState: CopyState) {
    switch (copyState) {
        case "idle":
        return "Copy Link"
        case "copied":
        return "Copied!"
        case "error":
        return "Error"
    }
}