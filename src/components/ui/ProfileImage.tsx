import React from "react";

export const ProfileImage = () => {
    return (
        <div className="relative group w-fit mx-auto md:mx-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-mainPurple/50 to-mainGreen/50 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-white/10 ring-1 ring-white/5 bg-zinc-900">
                <img
                    src="/images/profile.jpg"
                    alt="Syndrom Profile"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
            </div>
        </div>
    );
};
