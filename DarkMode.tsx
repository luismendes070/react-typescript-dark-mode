import { useState } from 'react';
import * as React from 'react';
import './style.css';

export default function DarkMode() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={'page${darkMode}'}>
<button className='dark-mode-button' 
onClick={ () => setDarkMode(true) }>
Dark Mode
</button>

<button className='light-mode-button' onClick={ () => setDarkMode(true) }>
Light Mode
</button>
    </div>
  ); // end return 
  
} // end function DarkMode
