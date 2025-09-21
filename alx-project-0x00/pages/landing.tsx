import React from "react"
import Card from "@/components/Card"
import Button from "@/components/Button"


const Landing: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
            <h1 className="text-xl font-extralight">
                Landing Page
                <Card />
                <Card />
                <Card />
            </h1>
            <h1 className="text-2xl font-bold">Reusable Button Component</h1>

            {/* Small Buttons */}
            <h2 className="text-xl font-semibold">Small Buttons</h2>
            <div className="flex space-x-2">
                <Button title="Small Square" styles="rounded-sm" />
                <Button title="Small Round" styles="rounded-md" />
                <Button title="Small Pill" styles="rounded-full" />
            </div>

            {/* Medium Buttons */}
            <h2 className="text-xl font-semibold">Medium Buttons</h2>
            <div className="flex space-x-2">
                <Button title="Medium Square" styles="text-lg rounded-sm" />
                <Button title="Medium Round" styles="text-lg rounded-md" />
                <Button title="Medium Pill" styles="text-lg rounded-full" />

            </div>

            {/* Large Buttons */}
            <h2 className="text-xl font-semibold">Large Buttons</h2>
            <div className="flex space-x-2">
                <Button title="Large Square" styles="text-xl rounded-sm" />
                <Button title="Large Round" styles="text-xl rounded-md" />
                <Button title="Large Pill" styles="text-xl rounded-full" />
                <Button title="Large Rounded" styles="text-xl rounded-lg" />
            </div>
            </div>

    )
}

export default Landing