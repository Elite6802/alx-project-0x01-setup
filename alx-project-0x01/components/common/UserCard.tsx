import React from 'react';
import { User } from '../../interfaces';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 my-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="bg-blue-200 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
            {user.name.charAt(0)}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-700">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
      </div>
    </div>
  );
};

export default UserCard;
