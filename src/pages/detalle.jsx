import { React, useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

const Detalle = () => {
  const { itemid } = useParams();
  const [producto, setProducto] = useState([]);
  const [descripcion, setDescripcion] = useState([]);

  const detalleProducto = async (id) => {
    const options = {
      method: 'GET',
      url: `https://api.mercadolibre.com/items/${id}#json`,
    };
    const respuesta = await axios.request(options);
    return respuesta;
  };

  const descripcionProducto = async (id) => {
    const options = {
      method: 'GET',
      url: `https://api.mercadolibre.com/items/${id}/description#json`,
    };
    const respuesta = await axios.request(options);
    return respuesta;
  };

  useEffect(() => {
    detalleProducto(itemid).then((respuesta) => {
      setProducto(respuesta.data);
    });
    descripcionProducto(itemid).then((respuesta) => {
      setDescripcion(respuesta.data);
    });
  }, []);

  return (
    <div className='flex flex-col h-screen items-center'>
      <NavLink to='/' className='text-blue-500 my-4 border-b border-blue-500'>
        Volver
      </NavLink>
      <img
        src={producto.thumbnail}
        alt='no img'
        className=' h-96 align-middle'
      />
      <span className='text-lg font-bold'>{producto.title}</span>
      <span className='text-lg'>
        Precio:
        <span className='text-lg font-bold'> ${producto.price}</span>
      </span>
      <span className='text-lg font-bold my-3'>DESCRIPCIÓN:</span>
      <span className='text-lg mx-10'>{descripcion.plain_text}</span>
    </div>
  );
};

export default Detalle;
