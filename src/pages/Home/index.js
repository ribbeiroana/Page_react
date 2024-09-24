import React from 'react';

import styles from './style.css';
import Elipse from '../../components/Elipse';

export default function Home() {
  return (
    <>
      <header className='container'>
        <div className='elipse-container'>
          <div className='elipse-left'>
            <Elipse size={120} opacity={0.8} styles={'cicle-left-one'} />
          </div> 
          <div className='elipse-rigth'>
          </div>
        </div>
      </header>
    </>
  )
};
