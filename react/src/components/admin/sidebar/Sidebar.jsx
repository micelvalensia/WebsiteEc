import React from 'react';
import { Link } from 'react-router';
import { Grid, Calendar, User, ClipboardList } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-[20%] fixed z-100 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-5 flex items-center">
        <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center mr-2">
          <div className="w-4 h-6 flex flex-col justify-between">
            <div className="w-1 h-4 bg-white rounded-full ml-0"></div>
            <div className="w-1 h-4 bg-white rounded-full ml-3"></div>
            <div className="w-1 h-4 bg-white rounded-full absolute ml-1.5"></div>
          </div>
        </div>
        <span className="text-xl font-bold text-gray-800">Admin Panel</span>
      </div>

      {/* Menu Label */}
      <div className="px-5 py-2">
        <span className="text-xs font-medium text-gray-400">MENU</span>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto">
        <ul className="px-3">
          {/* Dashboard */}
          <li className="mb-1">
            <Link 
              to="/admin/dashboard"
              className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <Grid size={20} className="mr-3 text-gray-600" />
              <span className="flex-1">Dashboard</span>
            </Link>
          </li>

          {/* List Data */}
          <li className="mb-1">
            <Link 
              to="/admin/crud"
              className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <ClipboardList size={20} className="mr-3 text-gray-600" />
              <span className="flex-1">List Data</span>
            </Link>
          </li>

          {/* Tambah Data */}
          <li className="mb-1">
            <Link 
              to="/admin/add"
              className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <Calendar size={20} className="mr-3 text-gray-600" />
              <span className="flex-1">Tambah Data</span>
            </Link>
          </li>

          {/* Riwayat Pembelian */}
          <li className="mb-1">
            <Link 
              to="/admin/history"
              className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <User size={20} className="mr-3 text-gray-600" />
              <span className="flex-1">Riwayat Pembelian</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}