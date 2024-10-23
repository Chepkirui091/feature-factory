"use client"

import React from 'react';
import DaphButton from "@/components/buttons/DaphButton";
import AccountLinkCard from "@/components/@shared-components/cards/accountLinkCard";
import { FaShoppingCart } from 'react-icons/fa'; // Import icons
import FilledCard from "@/components/@shared-components/cards/filledCard";

const Home = () => {
  const handleClick = (action: string) => {
    alert(`${action} button clicked!`);
  };

  return (
      <>
          <div className="flex items-center justify-center h-screen bg-gray-900 space-x-4">
              <DaphButton onClick={() => handleClick('Primary')} label="Primary Button" variant="primary"/>
              <DaphButton onClick={() => handleClick('Secondary')} label="Secondary Button" variant="secondary"/>
              <DaphButton onClick={() => handleClick('Outline')} label="Outline Button" variant="outline"/>
              <DaphButton onClick={() => handleClick('Loading')} label="Loading Button" variant="loading" disabled/>
              <DaphButton
                  onClick={() => handleClick('Icon')}
                  label="Icon Button"
                  icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M15 17h5l-1.404 1.404A3 3 0 0017 21h-1.5m1.5-4.5H9l-4.5 4.5M19.5 13L12 4.5 4.5 13h15z"/>
                  </svg>}
                  variant="primary"
              />
          </div>
          <div className="flex flex-wrap items-center justify-center h-screen bg-gray-900 space-x-4 space-y-4">
              <AccountLinkCard
                  icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M12 4v8m0 4h.01M4 6h16M4 12h16m-7 6h7"/>
                  </svg>}
                  title="Account Settings"
                  description="Manage your account settings"
                  link="/settings"
                  color="bg-blue-800"
              />
              <FilledCard
                  label="Total Orders"
                  value="1,500"
                  stats={false}
                  icon={FaShoppingCart} // Another React Icon component
                  secondary={{ label: "Decline", value: 5, increment: false }}
                  color="bg-blue-800"
              />
          </div>
      </>
  );
};

export default Home;
