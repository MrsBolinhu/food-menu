import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from '../service/api/api'
import Button from '../components/button'
import AuthService from '../service/api/auth.service';

const Register = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

    const handleRegister = () => {
        AuthService.register(username, password, repassword)
        navigate("/")
    }

    return (
        <div class="mx-4 md:mx-[30vh] lg:mx-[70vh]">
            < div class="grid grid-cols-1 w-full h-screen justify-center items-center content-center" >
                <div class="mb-6 text-center text-[30px] font-inter font-bold">Novo Cadastro</div>
                <form class="mb-6" action="" method="post">
                    <div class="mr-5 ml-5 w-[5/6]">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Nome
                        </label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" />
                    </div>
                    <div class="mr-5 ml-5 w-[5/6]">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Senha
                        </label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="password" />
                    </div>
                    <div class="mr-5 ml-5 w-[5/6]">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Confirme a senha
                        </label>
                        <input value={repassword} onChange={(e) => setRepassword(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-orange rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="password" />
                    </div>
                </form>
                <div onClick={handleRegister} class="flex w-[5/6] h-[54px] mx-6 my-7 rounded-full bg-orange font-black text-white text-center">
                    <span class="m-auto">cadastrar</span>
                </div>
                <div onClick={() => { navigate("/") }} class="flex w-[5/6] mx-6 mb-7 rounded-full bg-none font-black text-darkgray text-center cursor-pointer">
                    <span className="m-auto">fazer login</span>
                </div>
            </div >


        </div >
    )
}

export default Register