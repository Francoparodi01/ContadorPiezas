import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import sashimi from '../assets/sashimiPng.png';

const Contador = () => {
  const [contador, setContador] = useState(0);
  const valorMinimo = 0;
  const [mostrarConfetti, setMostrarConfetti] = useState(false);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > valorMinimo) {
      setContador(contador - 1);
    }
  };

  useEffect(() => {
    // Verifica si el contador es un múltiplo de 10 y mayor que cero
    if (contador > 0 && contador % 10 === 0) {
      setMostrarConfetti(true);
    } else {
      setMostrarConfetti(false);
    }
  }, [contador]);

  return (
    <>
      <div className='contenedor-counter'>
        <img src={sashimi} className='imagen-sashimi' alt='Sashimi' />
        <div>
          <h3>Contador de piezas: {contador}</h3>
          <div className='botones'>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
          </div>
        </div>
      </div>

      {mostrarConfetti && (
        <Confetti>
          <div>
            <h2 className='mensaje-cantidad'>¡Has alcanzado un múltiplo de 10!</h2>
          </div>
        </Confetti>
      )}
    </>
  );
};

export default Contador;
