import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00c49f', '#ffbb28', '#0088FE'];

function ChartPenjualan({ selectedType }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (selectedType) {
      const getCategoryData = async () => {
        try {
          const res = await axios.get(`http://localhost:8092/categorysales?type=${selectedType}`);
          const formatted = res.data.data.map((item) => ({
            name: item.makanan,
            value: parseInt(item.total_quantity),
          }));
          setData(formatted);
        } catch (err) {
          console.error("Gagal ambil data chart", err);
        }
      };

      getCategoryData();
    }
  }, [selectedType]); // Akan dipanggil setiap kali selectedType berubah

  return (
    <div className="w-full h-[300px] mt-5">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartPenjualan;
