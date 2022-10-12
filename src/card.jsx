import React from 'react'

const Card = ({photo, title, description}) => {
    return (
        <div className='card'>
            <img src={photo} alt="" className='w-full' />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                    <input type="text" class="mt-1 block w-full rounded-md  bg-gray-100  focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="Ingrese aca su texto"></input>
                </p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>

            </div>
        </div>
    )
}

export default Card