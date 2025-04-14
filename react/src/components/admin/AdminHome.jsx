import React, { useEffect, useState } from 'react'
import { Users, CircleDollarSign, UtensilsCrossed } from 'lucide-react'
import { getFood } from '../../hooks/hooks'
import axios from 'axios'
import ChartPenjualan from './Chart'

function AdminHome() {
    const [foods, setFoods] = useState([])
    const [buyerL, setBuyerL] = useState(0)
    const [total, setTotal] = useState(0)
    const [selectedType, setSelectedType] = useState('');

    // Ambil data makanan terlaris
    useEffect(() => {
        const getTopFood = async () => {
            try {
                const foods = await getFood('http://localhost:8092/topfoods')
                setFoods(foods)
            } catch (error) {
                console.log(error)
            }
        }
        getTopFood()
    }, [])

    // Ambil jumlah pembeli
    useEffect(() => {
        const getBuyers = async () => {
            try {
                const buyers = await getFood('http://localhost:8092/getuser')
                setBuyerL(buyers.length)
            } catch (error) {
                console.log(error)
            }
        }
        getBuyers()
    }, [])

    // Ambil total pemasukan
    useEffect(() => {
        const getMoney = async () => {
            try {
                const moneys = await axios.get('http://localhost:8092/pemasukan')
                setTotal(moneys.data.total)
            } catch (error) {
                console.log(error)
            }
        }
        getMoney()
    }, [])

    return ( 
        <div className='w-full p-10'>
            <div className="grid grid-cols-11 grid-rows-3 gap-[2rem] h-200px">
                <div className="col-start-1 col-end-4 row-start-1 row-end-2 bg-white rounded-2xl border border-gray-300 p-5">
                    <Users size={20} className="bg-gray-200 w-10 h-10 p-2 rounded-md text-gray-700" />
                    <h2 className='text-gray-600 mt-4'>Total Pembeli</h2>
                    <div className="font-bold text-black text-2xl mt-3">{buyerL}</div>
                </div>
                <div className="col-start-4 col-end-7 row-start-1 row-end-2 bg-white rounded-2xl border border-gray-300 p-5">
                    <CircleDollarSign size={20} className="bg-gray-200 w-10 h-10 p-2 rounded-md text-gray-700" />
                    <h2 className='text-gray-600 mt-4'>Uang Terkumpul</h2>
                    <div className="font-bold text-black text-2xl mt-3">Rp {total.toLocaleString('id-ID')}</div>
                </div>
                <div className="col-start-7 col-end-12 row-start-1 row-end-4 bg-white rounded-2xl border border-gray-300 p-5">
                    <UtensilsCrossed size={20} className="bg-gray-200 w-10 h-10 p-2 rounded-md text-gray-700" />
                    <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">🍽️ Makanan Terlaris</h2>
                    {foods.length > 0 ? (
                        <ol className="list-decimal pl-6 space-y-2 text-gray-800">
                            {foods.map((item, i) => (
                                <li key={i} className="bg-white p-3 rounded-md shadow-sm hover:bg-gray-50 transition">
                                    <div className="flex justify-between">
                                        <span className="font-medium">{item.makanan}</span>
                                        <span className="text-sm text-gray-500">{item.total_terjual} terjual</span>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <p className="text-sm text-gray-500 italic">Data tidak ditemukan</p>
                    )}
                </div>
                <div className="col-start-1 col-end-7 row-start-2 row-end-4 bg-white rounded-2xl border border-gray-300 p-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-black font-bold text-xl">Chart Penjualan</h2>
                        <select
                        name="type"
                        id="type"
                        className="border rounded-lg px-2 py-1 border-gray-400"
                        onChange={(e) => setSelectedType(e.target.value)} 
                        >
                        <option value="">--Pilih Kategori--</option>
                        <option value="makanan">Makanan</option>
                        <option value="minuman">Minuman</option>
                        <option value="penutup">Dessert</option>
                        </select>
                    </div>
                    {/* Pass selectedType as a prop to ChartPenjualan */}
                    <ChartPenjualan selectedType={selectedType} />
                </div>
            </div>
        </div>
    )
}

export default AdminHome
