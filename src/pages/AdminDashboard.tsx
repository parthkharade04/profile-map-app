import React, { useState, useEffect } from "react";

interface Profile {
  id: number;
  name: string;
  photo: string;
  description: string;
  latitude: number;
  longitude: number;
}

const AdminDashboard: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [newProfile, setNewProfile] = useState<Partial<Profile>>({});
  const [editProfile, setEditProfile] = useState<Profile | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/profiles")
      .then((res) => res.json())
      .then((data) => setProfiles(data));
  }, []);

  const handleAddProfile = () => {
    fetch("http://localhost:5000/profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newProfile, id: Date.now() }),
    }).then(() => window.location.reload());
  };

  const handleDelete = (id: number) => {
    fetch(`http://localhost:5000/profiles/${id}`, { method: "DELETE" }).then(
      () => window.location.reload(),
    );
  };

  const handleEdit = (profile: Profile) => {
    setEditProfile(profile);
  };

  const handleUpdateProfile = () => {
    if (!editProfile) return;

    fetch(`http://localhost:5000/profiles/${editProfile.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editProfile),
    }).then(() => window.location.reload());
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {/* Add New Profile */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setNewProfile({ ...newProfile, name: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddProfile}
          className="bg-green-500 text-white p-2"
        >
          Add Profile
        </button>
      </div>

      {/* Edit Profile */}
      {editProfile && (
        <div className="mt-4">
          <input
            type="text"
            value={editProfile.name}
            onChange={(e) =>
              setEditProfile({ ...editProfile, name: e.target.value })
            }
            className="border p-2 mr-2"
          />
          <button
            onClick={handleUpdateProfile}
            className="bg-blue-500 text-white p-2"
          >
            Update Profile
          </button>
        </div>
      )}

      {/* List Profiles */}
      <ul className="mt-4">
        {profiles.map((profile) => (
          <li key={profile.id} className="border p-2 flex justify-between">
            {profile.name}
            <div>
              <button
                onClick={() => handleEdit(profile)}
                className="bg-yellow-500 text-white p-1 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(profile.id)}
                className="bg-red-500 text-white p-1"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
