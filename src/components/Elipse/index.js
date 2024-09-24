import react from 'react';

import styles from './style.css'

export default function Elipse( { size, opacity, style }) {
 const circuleStyle = {
  width: `${size}px`,
  heigth: `${size}px`,
  opacity: opacity,

 }
  return(
    <>
<div className={`circle ${style}`} ></div>

    </>
  );
};