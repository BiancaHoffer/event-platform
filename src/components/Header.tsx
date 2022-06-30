import Logo from './Logo';
import { List, X } from 'phosphor-react';
import { useState } from 'react';

interface HeaderProps {
  setOpen: (state: boolean) => void;
  open: boolean;
}

export function Header({open, setOpen}: HeaderProps){
  
  return(
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <div className='w-full flex flex-row justify-between'>
        <div className="pl-10"></div>
        
        <div>
          <Logo/>
        </div>
        
        <button className='pr-10' onClick={() => setOpen(!open)}>
          { open ? <X size={32} /> : <List size={32} /> }
        </button>
      </div>
    </header> 
  )
}
