import axios from 'axios'
import React, { useContext, useState } from 'react'
import { IoRestaurant } from 'react-icons/io5'
import { AppContext } from '../service/AppContextProvider'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function MakeRestorent() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const { Backend_Url, menuData, getAllMenu } = useContext(AppContext)
    const nav = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${Backend_Url}/create`, { name, description })
            if (data.success) {
                setDescription("")
                setName("")
                toast.success(data.message)
                getAllMenu()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className='flex flex-col md:flex-row justify-center items-center min-h-screen px-4 py-8'>
            <form onSubmit={handleSubmit} className='border rounded-md shadow-md border-white p-5 w-full md:w-1/3 bg-gray-800'>
                <h2 className="text-white text-center text-xl font-semibold mb-4">Create a Menu</h2>

                <div className='flex gap-2 mb-3 items-center px-3 py-2 rounded bg-slate-400'>
                    <IoRestaurant size={20} />
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder='Enter Menu Name' 
                        className='outline-none w-full bg-transparent text-white placeholder-gray-200' 
                        required 
                    />
                </div>

                {/* Description Input */}
                <div className='flex gap-2 items-center mb-3 px-3 py-2 rounded bg-slate-400'>
                    <IoRestaurant size={20} />
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        placeholder='Enter Menu Description' 
                        className='outline-none w-full bg-transparent text-white placeholder-gray-200' 
                        required 
                        rows={3}
                    />
                </div>

                {/* Submit Button */}
                <div className='flex justify-center'>
                    <button type='submit' className='px-4 py-2 w-full bg-gradient-to-r from-blue-900 to-white text-white font-semibold rounded-md hover:opacity-80 transition'>
                        CREATE
                    </button>
                </div>
            </form>

            {/* Menu List Section */}
            <div className='w-full md:w-1/2 mt-8 md:mt-0 md:ml-5'>
                <h2 className="text-white text-center text-xl font-semibold mb-4">Your Menus</h2>
                <div className='max-h-80 overflow-y-auto border border-white p-3 rounded-md'>
                    {menuData.length > 0 ? (
                        menuData.map((item, index) => (
                            <div 
                                key={index} 
                                onClick={() => nav(`/add-items/${item._id}`)} 
                                className='border rounded flex gap-3 px-5 py-3 mb-2 border-white cursor-pointer hover:bg-gray-700 transition'
                            >
                                <h3 className='text-orange-600 font-bold'>{index + 1}.</h3>  
                                <h1 className='text-gray-300'>{item.name}</h1>
                                <h1 className='text-yellow-500 underline'>Click to add items</h1>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 text-center">No menus available.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MakeRestorent
