import React, { useEffect, useState } from 'react';

const Profile = ({ username }) => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => setProfile(data))
            .catch(error => console.error('Error fetching profile:', error));
    }, [username]);

    if (!profile) return <div>Loading...</div>;

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src={profile.avatar_url} alt={profile.name} className="w-24 h-24 rounded-full mx-auto border-4 border-blue-600" />
            <h3 className="text-2xl font-semibold mt-4">{profile.name}</h3>
            <p className="mt-2 text-gray-600">{profile.bio}</p>
            <p className="mt-4">
                <a href={profile.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    GitHub Profile
                </a>
            </p>
        </div>
    );
};

export default Profile;
