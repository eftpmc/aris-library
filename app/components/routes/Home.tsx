"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import MessageFlow from '../MessageFlow';
import { Messages } from '@/types';

export default function Home() {
    const router = useRouter(); // Initialize router

    // Messages array for the Home component
    const messages: Messages[] = [
        { message: "Welcome, my name is Ari and I own this small library.", fromUser: false },
        { message: "Feel free to either browse what we have or look into adding to our collection.", fromUser: false },
        { type: 'button', primaryLabel: "Create a book", secondaryLabel: "Browse collection", fromUser: true },
    ];

    const handlePrimaryAction = () => {
        router.push('/create-book'); // Navigate to the CreateBook route
    };

    const handleSecondaryAction = () => {
        router.push('/browse-collection'); // Navigate to the BrowseCollection route
    };

    return (
        <MessageFlow messages={messages} onPrimaryAction={handlePrimaryAction} onSecondaryAction={handleSecondaryAction} />
    );
}