import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../src/pages/Home'
import NewItem from '../src/pages/NewItem'
import Item from '../src/pages/Item'
import EditItem from '../src/pages/EditItem'
import Register from './pages/Register'
import Login from './pages/Login'
import AuthService from './service/api/auth.service'

const App = () => {

    const [user, setUser] = useState()
    useEffect(() => {
        const user = AuthService.getCurrentUser()
        if (user) {
            setUser(user)
        }
    }, [])

    return (
        <>
            <div className="w-full h-screen">
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="home" element={<Home />} />
                    <Route path="item" element={<Item />} />
                    <Route path="newItem" element={<NewItem />} />
                    <Route path="editItem" element={<EditItem />} />
                    <Route path="register" element={<Register />} />
                </Routes>
            </div>

        </>

    )
}

export default App