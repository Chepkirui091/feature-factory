"use client"

import React from 'react';
import { useRouter } from 'next/navigation';


interface AccountLinkCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
    color?: string;
}

const AccountLinkCard = ({ icon, title, description, link,color="bg-white" }: AccountLinkCardProps) => {
    const router = useRouter();

    const handleOnClick = async () => {
        await router.push(link);
    };

    return (
        <div
            className={`${color} flex flex-col text-white p-4 min-h-[160px] cursor-pointer transition-colors duration-300 rounded-lg shadow-md hover:bg-gray-600 hover:shadow-lg`}
            onClick={handleOnClick}
        >
            <div className="flex items-center justify-center mb-2 transform transition-transform duration-300 hover:rotate-360">
                {icon}
            </div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-300 font-light">{description}</p>
        </div>
    );
};

export default AccountLinkCard;
