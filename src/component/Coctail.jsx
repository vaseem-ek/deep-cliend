import React from 'react'

function Coctail() {
    return (
        <div className='p-3 md:px-20'>
            <div className='border mt-10 mb-5  py-20 w-full border-white'>
            <div className='flex justify-center'>
                <div className='inline-flex gap-2 justify-center items-center mb-3'>
                    <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-slate-500'></p>
                    <p className=' italic text-white text-4xl'> BRUNCH COCKTAIL</p>
                    <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-slate-500'></p>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 px-3 md:px-10'>
                <div >
                    <h1 className='text-xl text-white '>CINNAMON TOAST CRUCH..........$16</h1>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eum id illo ipsam nostrum neque quis voluptas </p>
                </div>
                <div >
                    <h1 className='text-xl text-white '>CINNAMON TOAST CRUCH..........$16</h1>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eum id illo ipsam nostrum neque quis voluptas </p>
                </div>
                <div >
                    <h1 className='text-xl text-white '>CINNAMON TOAST CRUCH..........$16</h1>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eum id illo ipsam nostrum neque quis voluptas </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Coctail
