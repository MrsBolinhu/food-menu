import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { HiPhotograph } from "react-icons/hi";
import requestService from '../service/api/request.service';

const Item = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const handleRemove = () => {
        requestService.deleteItem(location.state.item.id)
        navigate("/home")
        window.location.reload()
    }

    return (
        <div className="flex flex-col h-screen w-full content-between">
            <div className="flex justify-center items-center mx-4 mt-8 mb-7 ">
                <h3 className="text-[30px] text-center font-inter font-black">{location.state.item.name}</h3>
            </div>

            <div className="grid justify-center">
                <div className="mb-6 w-[270px] h-[270px] justify-self-center rounded-3xl aspect-square rounded-lg bg-lightgray overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.25)]">

                    {location.state.item.image ? (
                        <img className="object-cover object-none object-bottom" src={location.state.item.image} alt="" />
                    ) : (
                        <HiPhotograph className="text-white w-full h-full bg-gray" />
                    )}
                </div>
            </div>

            <div className="my-4 mx-7 text-center">
                <div className="mb-3 text-[22px] font-inter font-black">Descrição</div>
                <p className="text-[20px]">{location.state.item.description}</p>
            </div>

            <div className="flex-1 mt-2 w-full rounded-t-3xl bg-orange shadow-[0_0_30px_rgba(0,0,0,0.25)]">
                <div className="flex flex-col pt-7 items-center content-center">
                    <p className="text-white font-black text-[30px] text-center">Preço</p>
                    <div className="flex gap-2 items-baseline">
                        <p className="text-white font-black text-[30px]">R$</p>
                        <p className="text-white font-black text-center text-[50px]">{location.state.item.price}</p>
                    </div>

                    <div className="flex w-3/5 sm:w-3/6 lg:w-2/6 h-[54px] mx-6 mt-4 rounded-full bg-darkgray hover:bg-lightgray hover:text-darkgray text-white text-center shadow-[0_0_30px_rgba(0,0,0,0.25)] cursor-pointer">
                        <span className="m-auto">editar</span>
                    </div>
                    <div onClick={() => { handleRemove() }} className="flex w-3/5 sm:w-4/6 lg:w-2/6 h-[54px] mx-6 mb-7 rounded-full bg-none text-white text-center cursor-pointer">
                        <span className="m-auto">remover item</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item