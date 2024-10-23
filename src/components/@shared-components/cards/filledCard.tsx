// components/FilledCard.tsx

import React from 'react';
import { IconType } from 'react-icons'; // Import IconType to type the icon prop
import { FiArrowUp, FiArrowDown } from 'react-icons/fi'; // Import arrow icons for secondary usage

interface SecondaryData {
    label: string;
    value: number;
    increment: boolean;
}

interface FilledCardProps {
    label: string;
    value: string | number;
    stats?: boolean;
    secondary?: SecondaryData;
    icon?: IconType;  // Change icon to be of type IconType from react-icons
    color?: string;
}

const FilledCard = ({ label, value, stats = false, secondary, icon: Icon, color = 'bg-white' }: FilledCardProps) => {
    return (
        <div className={`${color} shadow-md rounded-lg flex py-3 px-4 gap-4 min-h-[120px]`}>
            {Icon && (
                <div className="flex-shrink-0 text-4xl"> {/* Adjusted size for the icon */}
                    <Icon /> {/* Render the icon directly */}
                </div>
            )}
            <div className="flex-grow flex flex-col justify-between">
                <p className={`text-${stats ? 'sm' : 'lg'} font-semibold mb-1`}>{label}</p>
                <p className={`text-${stats ? 'lg' : 'sm'}`}>{value}</p>
            </div>
            {secondary && (
                <div className="flex-shrink-0 flex flex-col justify-between">
                    <p className="text-sm font-semibold mb-1">{secondary.label}</p>
                    <div className={`flex items-baseline gap-1 ${secondary.increment ? 'text-green-600' : 'text-red-600'}`}>
                        <p className="text-sm">{secondary.value} %</p>
                        {secondary.increment ? <FiArrowUp /> : <FiArrowDown />}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilledCard;
