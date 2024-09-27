"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type MessageCardProps = {
    message: string;
    fromUser?: boolean;
    onAnimationComplete?: () => void;
};

export default function MessageCard({ message, fromUser, onAnimationComplete }: MessageCardProps) {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const indexRef = useRef(0);

    useEffect(() => {
        setDisplayText(''); // Reset the display text for the new message
        setIsComplete(false); // Reset completion state
        indexRef.current = 0; // Reset index

        const timer = setInterval(() => {
            if (indexRef.current < message.length) {
                setDisplayText((prev) => prev + message.charAt(indexRef.current)); // Add one character at a time
                indexRef.current += 1;
            } else {
                clearInterval(timer); // Clear the interval once message is complete
                setIsComplete(true); // Mark as complete
            }
        }, 50); // Adjust the typing speed here

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, [message]);

    useEffect(() => {
        if (isComplete && onAnimationComplete) {
            onAnimationComplete(); // Trigger animation complete callback if defined
        }
    }, [isComplete, onAnimationComplete]);

    return (
        <div className={`flex ${fromUser ? 'justify-end' : 'justify-start'} mb-2 w-full`}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`card bg-black border-gray-700 border-[1px] bg-opacity-70 shadow-xl w-full max-w-xs md:max-w-md lg:max-w-lg ${
                    fromUser ? 'bg-primary text-white' : 'text-white'
                }`}
            >
                <div className="card-body p-4">

                    {/* Message Content */}
                    <motion.p className="text-sm text-white">
                        {displayText}
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
}