import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemsCard = ({ imagen, nombre, precio, id }) => {
  const navigate = useNavigate();
  const buscar = () => {
    navigate(`/detalle/${id}`);
  };

  return (
    <div
      className='grid grid-cols-2 border-2 w-80 h-44 m-2 hover:cursor-pointer'
      onClick={() => {
        buscar();
      }}
      aria-hidden='true'
    >
      <img src={imagen} alt='no img' className='w-full h-40 align-middle' />
      <div className='flex flex-col justify-between ml-1'>
        <span className=' mt-2'>{nombre}</span>
        <span className=' my-4 justify-end'>Precio: ${precio}</span>
      </div>
    </div>
  );
};

export default ItemsCard;
