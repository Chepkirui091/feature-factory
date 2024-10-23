// components/DaphButton.tsx

import React from 'react';

// DaphButton Props Definition
type DaphButtonProps = {
    onClick: () => void;
    label?: string;
    icon?: React.ReactNode; // For icon buttons
    variant?: 'primary' | 'secondary' | 'outline' | 'loading'; // Button variants
    disabled?: boolean;
};

// DaphButton Component
const DaphButton = ({ onClick, label, icon, variant = 'primary', disabled = false }: DaphButtonProps) => {
    const baseClasses = "rounded-full px-4 py-2 font-semibold rounded-lg flex items-center";
    const primaryClasses = "rounded-full bg-blue-500 hover:bg-blue-600 text-white";
    const secondaryClasses = "rounded-full bg-purple-500 hover:bg-purple-600 text-white";
    const outlineClasses = " rounded-full border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white";
    const disabledClasses = "rounded-full bg-zinc-50 text-gray-300 opacity-50 cursor-not-allowed";

    const classes = `${baseClasses} ${
        variant === 'primary' ? primaryClasses :
            variant === 'secondary' ? secondaryClasses :
                variant === 'outline' ? outlineClasses :
                    ''
    } ${disabled ? disabledClasses : ''}`;

    return (
        <button onClick={onClick} className={classes} disabled={disabled}>
            {icon && <span className="mr-2">{icon}</span>}
            {variant === 'loading' ? 'Loading...' : label}
        </button>
    );
};

export default DaphButton;
