import React from 'react';
import { AddButton } from './components/addButton/addButton';
import Card from './components/card/card';

function App() {
  return (
    <div class="h-screen w-full p-5 justify-center bg-gradient-to-b from-white to-[#EEEEEE]">
      <div class="mx-auto">
        <div class="pb-8 pt-8 text-xl text-orange font-inter font-black leading-none">Meu cardápio</div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-7">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <AddButton />
      </div>
    </div>


  );
}

export default App;
