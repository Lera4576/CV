import React from 'react';
import profileImage from '/img/photo.jpg';

const ProfileImage = () => (
  <div className="mb-6 text-center flex items-end">
    <img src={profileImage} alt="Profile" className="w-58 h-72 ml-7" />
    <div className="ml-5 text-left">
      <h1 className="text-2xl md:text-5xl font-bold">VALERIYA</h1>
      <h1 className="text-2xl md:text-5xl font-bold">OVSYANIK</h1>
    </div>
  </div>
);

export default ProfileImage;