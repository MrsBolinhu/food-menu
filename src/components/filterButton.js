import React from 'react'
import { HiAdjustments } from "react-icons/hi";

const filterButton = (props) => {
    const { showSidebar, setShowSidebar } = props
    return (
        <div onClick={() => setShowSidebar(!showSidebar)} className="flex justify-center items-center w-[54px] h-[54px] rounded-lg bg-orange hover:bg-darkgray cursor-pointer">
            <HiAdjustments className="rotate-90 text-white text-xl m-3" />
        </div>
    )
}

export default filterButton