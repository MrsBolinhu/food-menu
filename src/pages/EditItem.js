import React from 'react'
import Button from '../components/button'

const EditItem = () => {
    return (
        <div className="grid grid-cols-1 w-4/6 items-center">
            <h3 className="mt-8 mb-5 text-[24px] text-center font-inter font-black">Criar novo item</h3>
            <div className="mb-6 w-[270px] h-[270px] justify-self-center rounded-lg aspect-square rounded-lg overflow-hidden bg-orange">
                {/* <img class="object-cover object-center" src={location.state.item.image} alt="" /> */}
            </div>
            <form className="mb-6" action="" method="post">
                <div className="mr-5 ml-5 w-[5/6]">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Nome
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Bolinho de arroz" />
                </div>
                <div className="mr-5 ml-5 w-[5/6]">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Descrição
                    </label>
                    <textarea className="appearance-none block w-full h-[100px] bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Breve descrição do item" />
                </div>
                <div className="mr-5 ml-5 w-[5/6]">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Preço
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="15,97" />
                </div>
            </form>
            <Button name="salvar" />
        </div>
    )
}

export default EditItem