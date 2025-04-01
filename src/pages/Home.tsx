import React, { useState, useEffect } from "react";
import { profiles } from "../data/profiles";
import ProfileCard from "../components/ProfileCard";
import MapComponent from "../components/MapComponent";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedProfile, setSelectedProfile] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Profiles</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onShowMap={() =>
                setSelectedProfile({
                  lat: profile.latitude,
                  lng: profile.longitude,
                })
              }
            />
          ))}
        </div>
      )}

      {selectedProfile && (
        <div className="mt-4">
          <h2 className="text-xl font-bold text-center">Location Map</h2>
          <MapComponent
            latitude={selectedProfile.lat}
            longitude={selectedProfile.lng}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
