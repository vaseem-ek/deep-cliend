import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../service/AppContextProvider'
import { PiBowlFoodLight } from 'react-icons/pi'
import { IoRestaurant } from 'react-icons/io5'
import { MdPriceCheck } from 'react-icons/md'
import { toast } from 'react-toastify'

function AddItems() {
    const { id } = useParams()
    const { Backend_Url } = useContext(AppContext)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    const addItems = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${Backend_Url}/${id}/items`, { 
                name, 
                description, 
                price: Number(price)  // Ensure price is a number
            })

            if (data.success) {
                setName("")
                setDescription("")
                setPrice("")
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen px-4 py-8 bg-gray-900'>
            <form onSubmit={addItems} className='border rounded-md shadow-lg border-white p-6 w-full md:w-1/3 bg-gray-800'>
                <h2 className="text-white text-center text-xl font-semibold mb-4">Add New Item</h2>

                {/* Name Input */}
                <div className='flex gap-2 mb-3 items-center px-3 py-2 rounded bg-slate-400'>
                    <PiBowlFoodLight size={20} />
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder='Enter Item Name' 
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
                        placeholder='Enter Item Description' 
                        className='outline-none w-full bg-transparent text-white placeholder-gray-200' 
                        required 
                        rows={3}
                    />
                </div>

                {/* Price Input */}
                <div className='flex gap-2 items-center mb-3 px-3 py-2 rounded bg-slate-400'>
                    <MdPriceCheck size={20} />
                    <input 
                        type="number" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        placeholder='Enter Item Price' 
                        className='outline-none w-full bg-transparent text-white placeholder-gray-200' 
                        required 
                        min="0"
                        step="0.01"
                    />
                </div>

                {/* Submit Button */}
                <div className='flex justify-center mt-4'>
                    <button type='submit' className='px-4 py-2 w-full bg-gradient-to-r from-blue-900 to-white text-white font-semibold rounded-md hover:opacity-80 transition'>
                        ADD ITEM
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddItems
