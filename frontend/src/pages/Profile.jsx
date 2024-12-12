import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';

// A simple function to simulate fetching user data
const fetchUserData = () => {
  return JSON.parse(localStorage.getItem('user'))
};

const ProfilePage = () => {
    
    
  const [userData, setUserData] = useState({
    name: '',
    // lastName: '',
    email: '',
    phone: '',
    profilePicture: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    // lastName: '',
    email: '',
    phone: '',
    profilePicture: '',
  });

  useEffect(() => {
    const user = fetchUserData();
    setUserData(user);
    setFormData(user);
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setFormData(userData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    setUserData(formData);
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold mb-6 text-center">User Profile</h1>

      <div className="flex items-center gap-6">
        {/* <div className="flex-shrink-0">
          <img 
            src={formData.profilePicture} 
            alt="Profile" 
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
          />
        </div> */}

        <div className="flex-grow">
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">First Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="mt-1 text-lg text-gray-900">{userData.name}</p>
              )}
            </div>

            {/* <div>
              <label className="block text-lg font-medium text-gray-700">Last Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="mt-1 text-lg text-gray-900">{userData.lastName}</p>
              )}
            </div> */}

            <div>
              <label className="block text-lg font-medium text-gray-700">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="mt-1 text-lg text-gray-900">{userData.email}</p>
              )}
            </div>

            {/* <div>
              <label className="block text-lg font-medium text-gray-700">Phone</label>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="mt-1 text-lg text-gray-900">{userData.phone}</p>
              )}
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className="mt-6 text-center">
        {isEditing ? (
          <div className="space-x-4">
            <button
              onClick={handleSaveClick}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save
            </button>
            <button
              onClick={handleCancelClick}
              className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={handleEditClick}
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Edit Profile
          </button>
        )}
      </div> */}
    </div>
  );
};

export default ProfilePage;
