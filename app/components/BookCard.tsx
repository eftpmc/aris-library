"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type BookCardProps = {
    title: string;
    createdBy: string;
    onAnimationComplete?: () => void;
};

export default function BookCard({ title, createdBy, onAnimationComplete }: BookCardProps) {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const indexRef = useRef(0);

    // Full text that combines title and createdBy
    const fullText = `${title} - ${createdBy}`;

    useEffect(() => {
        setDisplayText(''); // Reset the display text for the new book title
        setIsComplete(false); // Reset completion state
        indexRef.current = 0; // Reset index

        const timer = setInterval(() => {
            if (indexRef.current < fullText.length) {
                setDisplayText((prev) => prev + fullText.charAt(indexRef.current)); // Add one character at a time
                indexRef.current += 1;
            } else {
                clearInterval(timer); // Clear the interval once title is complete
                setIsComplete(true); // Mark as complete
            }
        }, 10); // Faster typing speed

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, [fullText]);

    useEffect(() => {
        if (isComplete && onAnimationComplete) {
            onAnimationComplete(); // Trigger animation complete callback if defined
        }
    }, [isComplete, onAnimationComplete]);

    return (
        <div className="flex justify-start mb-2 w-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="card bg-black border-gray-700 border-[1px] bg-opacity-70 shadow-xl w-full md:max-w-md lg:max-w-lg"
            >
                <div className="card-body p-2">
                    {/* Combined Book Title and Created By */}
                    <motion.p className="text-sm font-semibold text-white flex justify-between">
                        <span className="flex-1 truncate">{displayText.split(" - ")[0]}</span>
                        <span className="text-xs text-gray-300 ml-4 whitespace-nowrap">
                            {displayText.split(" - ")[1]}
                        </span>
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
}