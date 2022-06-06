import React from 'react'
import SearchBar from '../components/searchBar'
import FilterButton from '../components/filterButton'

const Toolbar = (props) => {
    const { showSidebar, setShowSidebar } = props
    return (
        <div className="flex align-items">
            <SearchBar />
            <FilterButton showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>
    )
}

export default Toolbar