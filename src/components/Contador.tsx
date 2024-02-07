import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/types';
import { increment } from '../store/actions';

const Contador: React.FC = () => {
  const contador = useSelector((state: RootState) => state.contador);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  

  return (
    <div>
      <h1>Componente 1</h1>
      <p>Contador: {contador}</p>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  );
};

export default Contador;
