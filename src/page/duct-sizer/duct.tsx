import { useState } from 'react';
import { Materials, Units } from './Inputs';
import DuctForm from './duct-form';

const Duct = () => {
  const [selectedUnit, setSelectedUnit] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedShape, setSelectedShape] = useState('');

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
        />
      </div>
  );
};

export default Duct;
