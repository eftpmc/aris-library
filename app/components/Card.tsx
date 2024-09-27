import React from 'react';

export default function Card() {
    return (
        <div className="card bg-black border-gray-700 border-[1px] bg-opacity-50 shadow-xl w-full lg:w-[600px]">
            <div className="card-body">
                <h2 className="card-title text-lg font-bold text-base-content">
                    Card Title
                </h2>
                <p className="text-base-content">
                    This is a simple card component created using DaisyUI. You can add any content here.
                </p>
                <div className="card-actions mt-4">
                    <button className="btn btn-primary">Primary Action</button>
                    <button className="btn btn-secondary">Secondary Action</button>
                </div>
            </div>
        </div>
    );
}