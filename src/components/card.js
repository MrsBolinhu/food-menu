import React from 'react'
import { HiPhotograph } from "react-icons/hi";

const Card = ({ title, description, price, img }) => {
  return (
    <>
      <div className="container p-3 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.25)]">
        <div className="grid grid-cols-3 gap-4 content-center items-center">
          <div className="w-full aspect-square rounded-lg overflow-hidden bg-lightgray">
            {img ? (
              <img className="object-scale-down object-bottom" src={img} alt="" />
            ) : (
              <HiPhotograph className="text-white w-full h-full bg-gray" />
            )}

          </div>
          <div className="col-span-2">
            <h3 className="mb-2 text-[20px] font-black leading-tight">{title}</h3>
            <p className="truncate h-full block">{description}</p>
          </div>
        </div>
      </div>
    </>
  )

}

export default Card