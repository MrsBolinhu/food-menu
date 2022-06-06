import React, { useContext } from 'react'
import { SearchContext } from '../pages/Home'
const SearchBar = () => {
    const { search, setSearch } = useContext(SearchContext)
    return (
        <div className="flex-1 mr-5">
            <div className="mb-7 w-full">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="search"
                    class="
                        form-control
                        block
                        w-full
                        h-[54px]
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-gray-200 bg-clip-padding
                        rounded-lg
                        transition
                        ease-in-out
                        m-0
                        focus:text-white focus:bg-darkgray focus:border-blue-600 focus:outline-none
                    "

                    placeholder="Pesquisar"
                />
            </div>
        </div>
    )
}

export default SearchBar