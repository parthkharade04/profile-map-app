import React, { createContext, useState, ReactNode } from "react";

interface Profile {
  id: number;
  name: string;
  photo: string;
  description: string;
}

interface ProfileContextType {
  profiles: Profile[];
  setProfiles: React.Dispatch<React.SetStateAction<Profile[]>>;
}

export const ProfileContext = createContext<ProfileContextType | undefined>(
  undefined,
);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  return (
    <ProfileContext.Provider value={{ profiles, setProfiles }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Ensure this file is treated as a module
export {};
