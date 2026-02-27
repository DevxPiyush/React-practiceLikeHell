import React from 'react'

const Cards = ({values,handleDelete}) => {
    const {name,age} = values

    return (
        <div className={'py-2 px-4 h-[25%] bg-blue-100 border flex flex-col border-1 border-gray-400 rounded-xl hover:shadow-xl p-4'}>
            <h2 className={'font-semibold font-serif text-2xl'}>{name}</h2>
            <h2 className={`mt-4 font-semibold font-serif text-md`}>{age} </h2>
            {/*<button className={'px-4 rounded-full py-2 mt-5 bg-blue-500 mt-5 text-white font-semibold'}> Edit user </button>*/}
            <button className={'px-4 rounded-full py-2 mt-5 bg-blue-500 text-white font-semibold'}
            onClick={() => handleDelete(values.id)}
            > Delete user </button>
        </div>
    )
}
export default Cards
