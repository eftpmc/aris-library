"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import MessageCard from './MessageCard';
import ButtonCard from './ButtonCard';
import BookCard from './BookCard'; // Import the new BookCard component
import { Messages } from '@/types';

type MessageFlowProps = {
    messages: Messages[];
    onPrimaryAction?: () => void;
    onSecondaryAction?: () => void;
};

export default function MessageFlow({ messages, onPrimaryAction, onSecondaryAction }: MessageFlowProps) {
    const [currentCard, setCurrentCard] = useState(0); // Tracks which card is currently being displayed
    const router = useRouter();

    const handleAnimationComplete = () => {
        setTimeout(() => {
            setCurrentCard((prev) => Math.min(prev + 1, messages.length - 1)); // Prevent overflow
        }, 200); // Adjust delay between cards here
    };

    const handlePrimaryAction = () => {
        if (onPrimaryAction) {
            onPrimaryAction();
        } else {
            router.push('/'); // Default navigation action if no custom action is provided
        }
    };

    const handleSecondaryAction = () => {
        if (onSecondaryAction) {
            onSecondaryAction();
        } else {
            setCurrentCard((prev) => prev + 1); // Default action to move to the next card
        }
    };

    return (
        <div className="flex flex-col items-center p-6 pt-0 min-h-screen">
            {/* Message Cards */}
            <div className="w-full lg:w-[60%] flex flex-col space-y-2 pt-6 overflow-y-auto max-h-[100vh]">
                {messages.map((msg, index) => (
                    index <= currentCard && (
                        msg.type === 'button' ? (
                            <ButtonCard
                                key={index}
                                primaryLabel={msg.primaryLabel}
                                secondaryLabel={msg.secondaryLabel}
                                primaryAction={handlePrimaryAction}
                                secondaryAction={handleSecondaryAction}
                                onAnimationComplete={index === currentCard ? handleAnimationComplete : undefined}
                            />
                        ) : msg.type === 'book' ? (
                            <BookCard
                                key={index}
                                title={msg.title}
                                createdBy={msg.createdBy}
                                onAnimationComplete={index === currentCard ? handleAnimationComplete : undefined}
                            />
                        ) : (
                            <MessageCard
                                key={index}
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