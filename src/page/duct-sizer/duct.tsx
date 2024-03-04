import { useState } from 'react';
import { Materials, Units } from './Inputs';
import DuctForm from './duct-form';
import { getElementValue } from '../Extra ';

const Duct = () => {
  const [selectedUnit, setSelectedUnit] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedShape, setSelectedShape] = useState('');
  const [equivalentDiameter, setEquivalentDiameter] = useState<number | null>(null);

  const handleOptionChange = (option: any) => {
    setSelectedOption(option);
  };

  const handleShapeChange = (shape: string) => {
    setSelectedShape(shape);
  };

  const ductOptions = Units();
  const materialOptions = Materials();

  const handleUnitChange = (selectedOption: any) => {
    setSelectedUnit(selectedOption ? selectedOption.value : '');
  };

  const eqDiameterCal = () => {
    const q = getElementValue('airflow') / 1000; 
    const v = getElementValue('velocity');
  
    if (selectedUnit === 'Metric') {
      const D = Math.sqrt((4 * q) / (Math.PI * v)) * 1000;
      const parseD = Number(D.toFixed(3))
      console.log('metric');
      console.log(q, 'airflow');
      console.log(v, 'velocity');
      console.log('Equivalent Diameter (D):', D);
      setEquivalentDiameter(parseD);
    }
  
    if (selectedUnit === 'Imperial') {
      const qi = (getElementValue('airflow') * 2118.8800) / 1000;
      const vi = getElementValue('velocity') * 196.8504;
      console.log('imperial');
      const Di = Math.sqrt((4 * qi) / (Math.PI * vi)) * 12; 
      const parseDi = Number(Di.toFixed(3))
      console.log(qi, 'airflow');
      console.log(vi, 'velocity');
      console.log('Equivalent Diameter (D):', Di);
      setEquivalentDiameter(parseDi);
    }
  };
  

  return (
      <div>
        <DuctForm
          selectedUnit={selectedUnit}
          inputValue={inputValue}
          setInputValue={setInputValue} 
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          selectedShape={selectedShape}
          handleShapeChange={handleShapeChange}
          ductOptions={ductOptions}
          materialOptions={materialOptions}
          handleUnitChange={handleUnitChange}
          equivalentDiameter={equivalentDiameter}
          eqDiameterCal = {eqDiameterCal}
        />
      </div>
  );
};

export default Duct;
