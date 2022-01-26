import React, { useState } from 'react';
import axios from 'axios';
import ItemsCard from 'components/ItemsCard';

const Index = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  const obtenerProductos = async (productName) => {
    const options = {
      method: 'GET',
      url: `https://api.mercadolibre.com/sites/MCO/search?q=${productName}#json`,
    };
    const respuesta = await axios.request(options);
    setProductos(respuesta.data.results);
  };

  const Buscar = () => {
    obtenerProductos(busqueda);
  };

  return (
    <div className='flex flex-col h-screen items-center'>
      <span className='mt-8 mb-2'>Busqueda de productos Mercado Libre:</span>
      <div className='flex flex-row mb-3'>
        <input
          className='border-2 border-yellow-500 w-96 mr-2'
          type='text'
          name='busqueda'
          id='busqueda'
          placeholder='Escriba aquí el nombre de su producto...'
          onChange={(e) => {
            setBusqueda(e.target.value);
          }}
        />
        <button
          className='border-2 border-slate-600 rounded'
          type='button'
          onClick={Buscar}
        >
          <span className='m-1'>Buscar</span>
        </button>
      </div>
      <div className='flex flex-wrap items-center lg:justify-between justify-center mx-8'>
        {productos.map((item) => (
          <ItemsCard
            imagen={item.thumbnail}
            nombre={item.title}
            precio={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
