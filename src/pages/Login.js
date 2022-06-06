import React from 'react'
import Button from '../components/button'
import { useNavigate } from 'react-router-dom';
import AuthService from '../service/api/auth.service';
import { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await AuthService.login(username, password).then(
                () => {
                    navigate("home")
                },
                (error) => {
                    console.log(error)
                })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div class="mx-4 md:mx-[30vh] lg:mx-[70vh]">
            <div class="grid grid-cols-1 w-full h-screen items-center content-center">
                <div class="mb-6 text-center text-[30px] font-inter font-bold">Login</div>
                <form class="mb-6">
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
                </form>
                {/* <div className="flex flex-col justify-center items-center">
                    <Button name="entrar" onClick={() => { console.log(username) }} />
                </div> */}
                <div onClick={handleLogin} class="flex w-[5/6] h-[54px] mx-6 my-7 rounded-full bg-orange font-black text-white text-center">
                    <span class="m-auto">entrar</span>
                </div>
                <div onClick={() => { navigate("/register") }} class="flex w-[5/6] mx-6 mb-7 rounded-full bg-none font-black text-darkgray text-center cursor-pointer">
                    <span className="m-auto">criar uma conta</span>
                </div>
            </div>
        </div >
    )
}

export default Login