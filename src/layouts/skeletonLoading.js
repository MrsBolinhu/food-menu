import React from 'react'
import SkeletonCard from '../components/skeletonCard'

const Loading = () => {
    return (
        <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </>
    )
}

export default Loading