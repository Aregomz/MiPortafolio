import React from 'react';

const ProfileImage = ({ src, alt }) => {
  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg">
      <img
        src={src || '/placeholder-profile.jpg'}
        alt={alt || 'Profile picture'}
        className="w-full h-auto object-cover transition-transform hover:scale-105"
      />
    </div>
  );
};

export default ProfileImage; 