import React from 'react'

const SkeletonCard = () => {
    return (
        <div className="container p-4 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.25)]">
            <div className="grid grid-cols-3 gap-4 animate-pulse content-center items-center">
                <div className="w-full h-full aspect-square bg-gray-300 rounded-lg overflow-hidden"></div>
                <div className="col-span-2 w-full">
                    <h3 className="h-6 mb-3 rounded-md bg-gray-300"></h3>
                    <p className="h-4 w-9/12 rounded-md bg-gray-300 "></p>
                </div>
            </div>
        </div>
    )
}

export default SkeletonCard