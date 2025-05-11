import React, { useEffect, useState } from 'react'
import LayoutAdmin from './layouts/LayoutAdmin'
import { Link } from 'react-router'
import axios from 'axios'
import { money } from './function/Function'
import Loading from '../loading/Loading'
import Swal from 'sweetalert2'

const Dashboard = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:8092/getfood')
      .then((res) => setList(res.data.data))
      .catch((err) => console.log(err))
  }, [])

  const handleDelete = (id) => {
    setList((prev) => prev.filter(item => item.id !== id))
    setLoading(true)
    axios.post(`http://localhost:8092/delete/${id}`)
      .then((res) => {
        setLoading(false)
        Swal.fire({
          title: 'Data terhapus!',
          text: "Data yang anda pilih berhasil dihapus",
          icon: "success",
          timer: 3000,
          showConfirmButton: false
        })
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  if (loading) return <Loading />

  return (
    <LayoutAdmin activePage={'dashboard'}>
      <div className="w-full min-h-screen p-6 md:p-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className='font-semibold text-2xl'>📋 List Menu</h2>
          <Link
            to="/admin/add"
            className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition'
          >
            + Tambah Data
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-sm">
                <th className="px-6 py-3 border-b">No</th>
                <th className="px-6 py-3 border-b">Nama Makanan</th>
                <th className="px-6 py-3 border-b">Harga</th>
                <th className="px-6 py-3 border-b">Gambar</th>
                <th className="px-6 py-3 border-b">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {list.length > 0 ? (
                list.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50 text-sm">
                    <td className="px-6 py-3 border-b">{index + 1}</td>
                    <td className="px-6 py-3 border-b">{item.makanan}</td>
                    <td className="px-6 py-3 border-b">Rp{money(item.harga)}</td>
                    <td className="px-6 py-3 border-b">
                      <img
                        src={`http://localhost:8092/${item.gambar}`}
                        alt={item.makanan}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </td>
                    <td className="px-6 py-3 border-b space-x-2">
                      <Link
                        to={`/admin/edit/${item.id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-md"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    Tidak ada data makanan tersedia.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutAdmin>
  )
}

export default Dashboard
