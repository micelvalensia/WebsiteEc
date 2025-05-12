import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Grid, Calendar, User, ClipboardList } from 'lucide-react';
import OpenToggle from '../OpenToggle';

export default function Sidebar({ active }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed(prev => !prev);

  return (
    <div className={`${collapsed ? 'w-[70px]' : 'w-[300px]'} sticky top-0 z-100 h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}>
      {/* Logo + Toggle */}
      <div className="p-5 flex items-center justify-between">
        <div className="flex items-center">
          {/* Show only when not collapsed */}
          {!collapsed && (
            <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center mr-2">
              <div className="w-4 h-6 flex flex-col justify-between">
                <div className="w-1 h-4 bg-white rounded-full ml-0"></div>
                <div className="w-1 h-4 bg-white rounded-full ml-3"></div>
                <div className="w-1 h-4 bg-white rounded-full absolute ml-1.5"></div>
              </div>
            </div>
          )}
          {/* Logo text */}
          {!collapsed && (
            <span className="text-xl font-bold text-gray-800 whitespace-nowrap">Admin Panel</span>
          )}
        </div>
        {/* Open Toggle Icon */}
        <OpenToggle onClick={toggleSidebar} />
      </div>

      {/* Menu Label, only show when not collapsed */}
        <div className="px-5 py-2">
          <span className="text-xs font-medium text-gray-400">MENU</span>
        </div>
      

      {/* Navigation Items */}
      <div className={`flex-1 overflow-y-auto`}>
        <ul className={`px-3 ${collapsed ? 'flex flex-col gap-5': ''} `}>
          {/* Dashboard */}
          <li className={`mb-1 ${active === 'index' ? 'bg-blue-400 rounded-xl' : ''}`}>
            <Link
              to="/admin/dashboard"
              className={`flex items-center w-full ${collapsed ? 'py-2 text-center' : 'px-3 py-2'} text-gray-700 rounded-md ${active === 'index' ? '' : 'hover:bg-gray-100'}`}
            >
              <Grid size={20} className={`mr-3 text-gray-600 ${collapsed ? 'ml-3' : ''}`} />
              {!collapsed && <span className="flex-1 whitespace-nowrap">Dashboard</span>}
            </Link>
          </li>
          {/* List Data */}
          <li className={`mb-1 ${active === 'dashboard' ? 'bg-blue-400 rounded-xl' : ''}`}>
            <Link
              to="/admin/crud"
              className={`flex items-center w-full ${collapsed ? 'py-2 text-center' : 'px-3 py-2'} text-gray-700 rounded-md ${active === 'dashboard' ? '' : 'hover:bg-gray-100'}`}
            >
              <ClipboardList size={20} className={`mr-3 text-gray-600 ${collapsed ? 'ml-3' : ''}`} />
              {!collapsed && <span className="flex-1 whitespace-nowrap">List Data</span>}
            </Link>
          </li>
          {/* Tambah Data */}
          <li className={`mb-1 ${active === 'add' ? 'bg-blue-400 rounded-xl' : ''}`}>
            <Link
              to="/admin/add"
              className={`flex items-center w-full ${collapsed ? 'py-2 text-center' : 'px-3 py-2'} text-gray-700 rounded-md ${active === 'add' ? '' : 'hover:bg-gray-100'}`}
            >
              <Calendar size={20} className={`mr-3 text-gray-600 ${collapsed ? 'ml-3' : ''}`} />
              {!collapsed && <span className="flex-1 whitespace-nowrap">Tambah Data</span>}
            </Link>
          </li>
          {/* Riwayat Pembelian */}
          <li className={`mb-1 ${active === 'history' ? 'bg-blue-400 rounded-xl' : ''}`}>
            <Link
              to="/admin/history"
              className={`flex items-center w-full ${collapsed ? 'py-2 text-center' : 'px-3 py-2'} text-gray-700 rounded-md ${active === 'history' ? '' : 'hover:bg-gray-100'}`}
            >
              <User size={20} className={`mr-3 text-gray-600 ${collapsed ? 'ml-3' : ''}`} />
              {!collapsed && <span className="flex-1 whitespace-nowrap">Riwayat Pembelian</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
