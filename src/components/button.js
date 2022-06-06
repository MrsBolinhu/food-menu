import React from 'react'

const Button = ({ name }) => {
    return (
        <div className="flex w-4/5 sm:w-4/6 lg:w-2/6 h-[54px] mx-6 mt-7 rounded-full bg-orange font-black text-white text-center cursor-pointer">
            <span className="m-auto">{name}</span>
        </div>
    )
}

export default Button