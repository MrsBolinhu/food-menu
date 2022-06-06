import React from 'react'
import { HiPlus } from "react-icons/hi";

const AddButton = () => {
  return (
    <div className="flex justify-center items-center w-[84px] h-[84px] rounded-full 
    bg-orange hover:bg-darkgray shadow-[0_0_50px_rgba(0,0,0,0.40)]">
      <HiPlus className="text-white text-xl m-3" />
    </div>
  )
}

export default AddButton