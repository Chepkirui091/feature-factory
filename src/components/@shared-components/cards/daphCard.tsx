"use client"

import React, {HTMLAttributes, ReactNode} from 'react';


interface DaphCardProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    children?: ReactNode;
    actions?: ReactNode;
}

const DaphCard = ({title, children, actions, ...other}: DaphCardProps) => {
    return (
        <>
            <div className="rounded-lg shadow-lg bg-white p-4" {...other}>
                {title && (
                    <div className="border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-xl font-semibold">{title}</h2>
                    </div>
                )}
                <div className="mb-4">
                    {children}
                </div>
                {actions && (
                    <div className="flex items-center justify-end mt-4">
                        {actions}
                    </div>
                )}
            </div>
        </>
    )
}

export default DaphCard;
