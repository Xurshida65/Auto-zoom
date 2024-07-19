
import React from 'react'
import CarsFilter from '../../Components/CarsFilter/CarsFilter'

const Cars = ({cars, setCars}) => {
  return (
    <div>
      <CarsFilter cars={cars} setCars={setCars}/>
    </div>
  );
};

export default Cars;
