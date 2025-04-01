import React from "react";

interface Profile {
  id: number;
  name: string;
  photo: string;
  description: string;
}

interface ProfileCardProps {
  profile: Profile;
  onShowMap: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onShowMap }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 transition hover:shadow-2xl sm:flex sm:items-center">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-24 h-24 rounded-full mx-auto sm:mx-0 sm:mr-4"
      />
      <div className="text-center sm:text-left">
        <h2 className="text-lg font-semibold">{profile.name}</h2>
        <p className="text-gray-600">{profile.description}</p>
        <button
          onClick={onShowMap}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Show on Map
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
