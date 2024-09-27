"use client";

import React from 'react';
import MessageFlow from '../MessageFlow';
import { Messages } from '@/types';

export default function BrowseCollection() {
    // Array of messages for the Browse Collection route
    const messages: Messages[] = [
        { message: "Welcome to our library collection! Explore the books below.", fromUser: false },
        ...Array(12).fill({
            type: 'book',
            title: "Placeholder Book Title",
            createdBy: "User123",
        }),
    ];

    return (
            <MessageFlow messages={messages} />
    );
}