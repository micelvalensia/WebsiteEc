import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { MenuContext } from '../../../context/MenuContext'
import { getFood } from '../../../../hooks/hooks'
import LoadingMenu from '../../../loading/LoadingMenu'

const CardMenu = () => {
    const { type } = useContext(MenuContext); 
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFood = async () => {
            try {
                const foods = await getFood("http://localhost:8092/getfood") 
                setMenu(...menu, foods)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }

        fetchFood()
    }, [])

    const filteredMenu = menu.filter((men) => men.type === type)

    if (loading) return <div><LoadingMenu /></div>

  return (
    <div>
        <div className="w-full flex flex-wrap gap-2 lg:gap-3 justify-start">
                {filteredMenu.length > 0 ? (
                    filteredMenu.map((men, index) => (
                        <Card key={index} gambar={men.gambar} teks={men.makanan} harga={men.harga} />
                    ))
                ) : (
                    <p>Menu {type} kosong, silakan kembali lagi nanti!</p>
                )}
        </div>
    </div>
  )
}

export default CardMenu
