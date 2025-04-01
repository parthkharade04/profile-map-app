import React from "react";
import { useParams } from "react-router-dom";
import { profiles } from "../data/profiles";

const ProfileDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const profile = profiles.find((p) => p.id === Number(id));

  if (!profile) {
    return (
      <div className="text-red-500 text-center">⚠️ Profile not found!</div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{profile.name}</h1>
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-32 h-32 rounded-full mx-auto"
      />
      <p>{profile.description}</p>
    </div>
  );
};

export default ProfileDetails;
