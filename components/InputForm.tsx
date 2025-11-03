
import React from 'react';
import type { UserProfile } from '../types';
import { CodeIcon } from './icons/CodeIcon';
import { ChatIcon } from './icons/ChatIcon';
import { LightbulbIcon } from './icons/LightbulbIcon';
import { HeartIcon } from './icons/HeartIcon';

interface InputFormProps {
    userProfile: UserProfile;
    onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: () => void;
    isLoading: boolean;
}

const InputField: React.FC<{
    name: keyof UserProfile;
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    icon: React.ReactNode;
}> = ({ name, label, placeholder, value, onChange, icon }) => (
    <div>
        <label htmlFor={name} className="flex items-center text-sm font-medium text-gray-300 mb-2">
            {icon}
            <span className="ml-2">{label}</span>
        </label>
        <textarea
            id={name}
            name={name}
            rows={4}
            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow duration-200 placeholder-gray-500"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </div>
);

export const InputForm: React.FC<InputFormProps> = ({ userProfile, onInputChange, onSubmit, isLoading }) => {
    return (
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 md:p-8 shadow-2xl shadow-purple-900/10">
            <div className="space-y-6">
                <InputField
                    name="technicalSkills"
                    label="Technical Skills"
                    placeholder="e.g., Python, React, SQL, AWS, Figma"
                    value={userProfile.technicalSkills}
                    onChange={onInputChange}
                    icon={<CodeIcon />}
                />
                <InputField
                    name="communicationSkills"
                    label="Communication & Soft Skills"
                    placeholder="e.g., Public Speaking, Team Leadership, Empathy"
                    value={userProfile.communicationSkills}
                    onChange={onInputChange}
                    icon={<ChatIcon />}
                />
                <InputField
                    name="interests"
                    label="Interests & Hobbies"
                    placeholder="e.g., Sci-fi novels, hiking, video game design"
                    value={userProfile.interests}
                    onChange={onInputChange}
                    icon={<LightbulbIcon />}
                />
                <InputField
                    name="passions"
                    label="Passions"
                    placeholder="e.g., Solving climate change, building communities, creating art"
                    value={userProfile.passions}
                    onChange={onInputChange}
                    icon={<HeartIcon />}
                />
            </div>
            <div className="mt-8">
                <button
                    onClick={onSubmit}
                    disabled={isLoading}
                    className="w-full text-white font-semibold py-3 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 disabled:scale-100 flex items-center justify-center"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Analyzing...
                        </>
                    ) : (
                        'Chart My Course'
                    )}
                </button>
            </div>
        </div>
    );
};
