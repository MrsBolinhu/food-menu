import React from 'react';
import { AddButton } from './components/addButton/addButton';
import Card from './components/card/card';

function App() {
  return (
    <div class="h-screen w-screen bg-gradient-to-b from-white to-[#EEEEEE]">
      <div class ="mx-5">
        <div class="pb-6 pt-8 text-xl text-orange font-inter font-black leading-none">Meu cardápio</div>
        <Card/>
        <Card/>
        <AddButton/>
      </div>      
    </div>

    
  );
}

export default App;
