"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import MessageCard from '../MessageCard';
import ButtonCard from '../ButtonCard';

export default function Home() {
    const [currentCard, setCurrentCard] = useState(0); // Tracks which card is currently being displayed
    const router = useRouter(); // Initialize router

    // Updated messages array with a ButtonCard entry
    const messages = [
        { avatar: "/cat.png", name: "Ari", message: "Weelcome, my name is Ari and I own this small library.", fromUser: false },
        { avatar: "/cat.png", name: "Ari", message: "Feeel free to either browse what we have or look into adding to our collection.", fromUser: false },
        { type: 'button', avatar: "https://i.pravatar.cc/150?img=4", name: "User", primaryLabel: "Create a book", secondaryLabel: "Browse collection", fromUser: true },
    ];

    const handleAnimationComplete = () => {
        setTimeout(() => {
            setCurrentCard((prev) => Math.min(prev + 1, messages.length - 1)); // Prevent overflow
        }, 200); // Adjust delay between cards here
    };

    const handlePrimaryAction = () => {
        router.push('/create-book'); // Navigate to the CreateBook route on primary action
    };

    const handleSecondaryAction = () => {
        setCurrentCard((prev) => prev + 1); // Move to the next card on secondary action
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
