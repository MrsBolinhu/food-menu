import React from 'react'
import { HiX } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import AuthService from '../service/api/auth.service';

const Sidebar = (props) => {
    const navigate = useNavigate()
    const { showSidebar, setShowSidebar } = props
    const handleLogout = () => {
        AuthService.logout()
        navigate("/")
        //window.location.reload()
    }
    return (
        <>
            {showSidebar ? (
                <div className="flex justify-end m-auto ease-out delay-150 duration-300" >
                    <div className="flex flex-col items-center z-40 p-5 w-[65vw] md:w-[40vw] lg:w-[30vw] xl:w-[24vw] backdrop-blur-sm bg-orange/80 text-white fixed h-full">
                        <HiX onClick={() => setShowSidebar(!showSidebar)} className="text-white text-xl m-3" />
                        <h2 className="text-4xl font-semibold text-white">I am a sidebar</h2>
                        <div onClick={handleLogout} class="flex w-full h-[54px] mx-6 my-7 rounded-full bg-darkgray font-black text-white text-center">
                            <span class="m-auto">logout</span>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )
            }
        </>
    )
}

export default Sidebar