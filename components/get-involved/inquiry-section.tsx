"use client"

import { FormEvent, useState } from "react"
import MaxContainer from "../shared/max-container"
import PaddingContainer from "../shared/padding-container"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"
import { Textarea } from "../ui/textarea"

const areasOfInterest = [
    { value: "learn", label: "Learn — Join the Academy" },
    { value: "volunteer", label: "Volunteer" },
    { value: "mentor", label: "Mentor" },
    { value: "partner", label: "Partner" },
    { value: "support", label: "Support" },
    { value: "other", label: "Other" },
]

const InquiriesSection = () => {
    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        areaOfInterest: "",
        message: "",
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <section className="bg-ink-950">
            <PaddingContainer className="py-16 md:py-24">
                <MaxContainer className="mx-auto max-w-2xl">
                    <div className="rounded-3xl bg-grey-100 p-8 sm:p-10">
                        <div className="space-y-2 text-center">
                            <h2 className="text-3xl font-bold text-foreground">
                                General Inquiries
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Not sure where you fit in? Send us a message and our team will
                                guide you.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input
                                        type="text"
                                        id="firstName"
                                        placeholder="Jane"
                                        className="h-10 bg-paper"
                                        value={contactInfo.firstName}
                                        onChange={(event) =>
                                            setContactInfo((prev) => ({
                                                ...prev,
                                                firstName: event.target.value,
                                            }))
                                        }
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input
                                        type="text"
                                        id="lastName"
                                        placeholder="Doe"
                                        className="h-10 bg-paper"
                                        value={contactInfo.lastName}
                                        onChange={(event) =>
                                            setContactInfo((prev) => ({
                                                ...prev,
                                                lastName: event.target.value,
                                            }))
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="emailAddress">Email</Label>
                                <Input
                                    type="email"
                                    id="emailAddress"
                                    placeholder="jane@example.com"
                                    className="h-10 bg-paper"
                                    value={contactInfo.emailAddress}
                                    onChange={(event) =>
                                        setContactInfo((prev) => ({
                                            ...prev,
                                            emailAddress: event.target.value,
                                        }))
                                    }
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="areaOfInterest">Area of Interest</Label>
                                <Select
                                    value={contactInfo.areaOfInterest}
                                    onValueChange={(value) =>
                                        setContactInfo((prev) => ({
                                            ...prev,
                                            areaOfInterest: value ?? "",
                                        }))
                                    }
                                >
                                    <SelectTrigger id="areaOfInterest" className="h-10 w-full bg-paper">
                                        <SelectValue placeholder="Select an option..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {areasOfInterest.map((area) => (
                                            <SelectItem key={area.value} value={area.value}>
                                                {area.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="How would you like to get involved?"
                                    className="min-h-28 bg-paper"
                                    value={contactInfo.message}
                                    onChange={(event) =>
                                        setContactInfo((prev) => ({
                                            ...prev,
                                            message: event.target.value,
                                        }))
                                    }
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                className="h-auto w-full rounded-lg py-3 text-sm font-bold"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default InquiriesSection
