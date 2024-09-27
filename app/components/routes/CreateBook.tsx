"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // useRouter hook for navigation
import MessageCard from '../MessageCard';
import ButtonCard from '../ButtonCard';

export default function CreateBookComponent() {
    const [currentCard, setCurrentCard] = useState(0); // Tracks which card is currently being displayed
    const router = useRouter();

    // Messages array specific to creating a book
    const messages = [
        { avatar: "/cat.png", name: "Ari", message: "Grreat! Let's create a new book. What would you like to name it?", fromUser: false },
        { type: 'button', avatar: "https://i.pravatar.cc/150?img=4", name: "User", primaryLabel: "Start Writing", secondaryLabel: "Go Back", fromUser: true },
    ];

    const handleAnimationComplete = () => {
        setTimeout(() => {
            setCurrentCard((prev) => Math.min(prev + 1, messages.length - 1)); // Prevent overflow
        }, 200); // Adjust delay between cards here
    };

    const handlePrimaryAction = () => {
        alert("Let's start writing the book!"); // Placeholder action for starting the book creation
    };

    const handleSecondaryAction = () => {
        router.push('/'); // Navigate back to the home page
    };

    return (
        <div className="flex flex-col items-center p-6 min-h-screen">
            {/* Message Cards */}
            <div className="w-full lg:w-[60%] flex flex-col space-y-4">
                {messages.map((msg, index) => (
                    index <= currentCard && (
                        msg.type === 'button' ? (
                            <ButtonCard
                                key={index}
                                avatar={msg.avatar}
                                name={msg.name}
                                primaryLabel={msg.primaryLabel}
                                secondaryLabel={msg.secondaryLabel}
                                primaryAction={handlePrimaryAction}
                                secondaryAction={handleSecondaryAction}
                                onAnimationComplete={index === currentCard ? handleAnimationComplete : undefined}
                            />
                        ) : (
                            <MessageCard
                                key={index}
                                avatar={msg.avatar}
                                name={msg.name}
                                message={msg.message}
                                fromUser={msg.fromUser}
                                onAnimationComplete={index === currentCard ? handleAnimationComplete : undefined}
                            />
                        )
                    )
                ))}
            </div>
        </div>
    );
}
