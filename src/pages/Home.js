import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import AddButton from '../components/addButton';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import ItemsGrid from '../layouts/itemsGrid';
import Toolbar from '../layouts/toolbar';
import { createContext } from 'react';

export const SearchContext = createContext()

function Home() {

    const [search, setSearch] = useState("")
    const [showSidebar, setShowSidebar] = useState(false)
    const value = { search, setSearch }

    return (
        <>
            <div className="w-full justify-center">
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                <div className="h-screen p-5">
                    <SearchContext.Provider value={value}>
                        <div className="mx-auto">
                            <div className="pb-6 pt-8 text-xl text-orange font-inter font-[900] leading-none">Meu cardápio</div>
                            <Toolbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                        </div>
                        <ItemsGrid />
                    </SearchContext.Provider>
                    <div className="fixed bottom-4 right-4">
                        <Link to="/NewItem">
                            <AddButton />
                        </Link>
                    </div>
                    {/* <Footer /> */}
                </div>
            </div>
        </>
    );
}

export default Home;