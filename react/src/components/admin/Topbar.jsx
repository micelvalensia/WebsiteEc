import React from 'react';
import { Search, Moon, Menu, Bell, User } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="h-16 fixed w-[80%] bg-white border-b border-gray-200 flex items-center justify-end px-4">
      {/* Right Side - Theme Toggle, Notifications, Profile */}
      <div className="flex items-center">
        <div className="flex items-center">
          <User size={20} className="rounded-full text-gray-500" />
          <div className="ml-2 hidden md:block">
            <span className="text-sm font-medium text-gray-700">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
}