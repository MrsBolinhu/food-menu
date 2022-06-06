import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import requestService from '../service/api/request.service';

const NewItem = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(Number)
    const [image, setImage] = useState("")

    const handleSubmit = () => {
        const newItem = { "name": name, "price": price, "description": description, "image": "" }
        requestService.createItem(newItem)
        navigate("/home")
    }

    return (
        <div class="grid grid-cols-1 mx-4 md:mx-[] lg:mx-[60vh] xl:mx-[70vh] items-center">
            <h3 class="mt-8 mb-[-40px] text-[24px] text-center font-inter font-black">Criar novo item</h3>
            <form class="mt-[-30px] mx-5" onSubmit={handleSubmit}>
                <div class="relative px-[60px] pt-[90px] w-full h-full justify-self-center rounded-lg aspect-square rounded-lg overflow-hidden">
                    {/* <img class="object-cover object-center" src={location.state.item.image} alt="" /> */}
                    <div class="z-40 absolute bottom-0 m-4 w-[40px] aspect-square rounded-full bg-gray-300 shadow-[0_0_30px_rgba(0,0,0,0.25)]"></div>
                    <div class="flex items-center justify-center w-full py-auto">
                        <label
                            class="flex flex-col w-full h-auto aspect-square rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.25)]">
                            <div class="flex flex-col items-center justify-center my-auto">

                                <div class="flex flex-col justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                        Attach a file</p>
                                </div>

                            </div>
                            <input type="file" accept="image/*" class="opacity-0" />
                        </label>
                    </div>
                </div>

                <div class="mr-5 ml-5 w-[5/6]">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Nome
                    </label>
                    <input value={name} onChange={(e) => setName(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight border focus:outline-none focus:border focus:border-orange focus:bg-white" type="text" />
                </div>
                <div class="mr-5 ml-5 w-[5/6]">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Descrição
                    </label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} class="appearance-none block w-full h-[100px] bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight border focus:outline-none focus:border focus:border-orange focus:bg-white" type="text" />
                </div>
                <div class="mr-5 ml-5 w-[5/6]">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Preço
                    </label>
                    <input value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight border focus:outline-none focus:border focus:border-orange focus:bg-white" type="number" step="0.1" />
                </div>
            </form>
            <div onClick={() => handleSubmit()} class="flex w-[5/6] h-[54px] mx-6 my-7 rounded-full bg-orange font-black text-white text-center">
                <span class="m-auto">salvar</span>
            </div>
        </div>
    )
}

export default NewItem