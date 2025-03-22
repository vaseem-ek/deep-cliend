import React, { useContext, useState } from 'react'
import MenuCard from '../component/MenuCard'
import { AppContext } from '../service/AppContextProvider'
import Loading from '../component/Loading'

function Menu() {
  const { menuData } = useContext(AppContext)

  return menuData ? menuData.length === 0 ? (
    <div className='flex items-center justify-center min-h-screen'>
      <p className='text-xl sm:text-2xl text-red-400'>No Application Available</p>
    </div>
  ) : (
    <div className='text-white min-h-screen place-items-center  grid grid-cols-1 gap-5 px-3 md:px-20 md:grid-cols-3'>
      {
        menuData.map((item, index) => (

          <MenuCard key={index} item={item} />
        ))
      }
    </div>
  ) : (
    <Loading />
  )
}

export default Menu
