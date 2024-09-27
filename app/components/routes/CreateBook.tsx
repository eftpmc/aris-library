"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import MessageFlow from '../MessageFlow';
import { Messages } from '@/types';

export default function CreateBookComponent() {
    const router = useRouter();

    // Messages array specific to the CreateBook route
    const messages: Messages[] = [
        { message: "Great! Let's create a new book. What would you like to name it?", fromUser: false },
        { type: 'button', primaryLabel: "Start Writing", secondaryLabel: "Go Back", fromUser: true },
    ];

    const handlePrimaryAction = () => {
        alert("Let's start writing the book!"); // Custom action for starting book creation
    };

    const handleSecondaryAction = () => {
        router.push('/'); // Navigate back to the home page
    };

    return (
        <MessageFlow messages={messages} onPrimaryAction={handlePrimaryAction} onSecondaryAction={handleSecondaryAction} />
    );
}