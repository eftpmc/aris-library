"use client";

import React from 'react';
import { motion } from 'framer-motion';

type ButtonCardProps = {
    primaryAction: () => void;
    secondaryAction: () => void;
    primaryLabel: string;
    secondaryLabel: string;
    onAnimationComplete?: () => void;
};

export default function ButtonCard({ primaryAction, secondaryAction, primaryLabel, secondaryLabel, onAnimationComplete }: ButtonCardProps) {
    return (
        <div className="flex justify-end mb-2 w-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="card bg-base-300 text-white border-gray-700 border-[1px] bg-opacity-70 shadow-xl w-full md:max-w-md lg:max-w-lg "
                onAnimationComplete={onAnimationComplete}
            >
                <div className="card-body p-4">

                    {/* Buttons */}
                    <div className="flex justify-center space-x-2">
                        <button
                            className="btn btn-sm bg-white text-base-300 border border-gray-600 hover:bg-base-content w-[45%]"
                            onClick={primaryAction}
                        >
                            {primaryLabel}
                        </button>
                        <button
                            className="btn btn-sm bg-white text-base-300 border border-gray-600 hover:bg-base-content w-[45%]"
                            onClick={secondaryAction}
                        >
                            {secondaryLabel}
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}