import React from 'react';
import Select from 'react-select';

interface SelectInputProps {
  options: any[];
  placeholder: string;
  onChange: (selectedOption: any) => void;
}

export const SelectInput: React.FC<SelectInputProps> = ({ options, placeholder, onChange }) => {
  return (
    <div>
      <Select
        options={options}
        placeholder={placeholder}
        className='pt-2'
        styles={{
          control: (provided) => ({
            ...provided,
            width: '165px',
            backgroundColor: 'rgb(255, 216, 155)',
            borderColor: 'transparent',
          }),
          menu: (provided) => ({
            ...provided,
            width: '165px',
            backgroundColor: "rgb(255, 216, 155)"
          }),
        }}
        onChange={onChange}
      />
    </div>
  );
};

interface RadioInputProps {
  type: string;
  label: string;
  options: any[];
  selectedOption: string;
  onChange: (option: string) => void;
  additionalInputs: Record<string, { label: string, placeholder: string, unit: string }>;
}

export const RadioInput: React.FC<RadioInputProps> = ({ type, label, options, selectedOption, onChange, additionalInputs }) => {
  return (
    <div className='flex flex-col'>
      <b>{label}</b>
      <div className='flex flex-row gap-4 pt-4'>
        {options.map((option) => (
          <label key={option.value} className='flex items-center'>
            <input
              type='radio'
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => onChange(option.value)}
              className="h-4 w-4"
            />
            <span className='pl-2'>{option.label}</span>
          </label>
        ))}
      </div>
      <div className='flex flex-row gap-4 pt-4'>
        {Object.entries(additionalInputs).map(([key, input]) => (
          selectedOption === key && (
            <div key={key}>
              {input.label} <input placeholder={input.placeholder} type={type} style={{ backgroundColor: 'rgb(255, 216, 155)' }} className='rounded w-full md:w-36 h-8 text-center' />
              {input.unit}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

interface TextInputProps {
 
    placeholder: string;
    type: string;
    unit: string;
  }
  
  export const TextInput: React.FC<TextInputProps> = ({type, placeholder, unit }) => {
    return (
        <div className='pl-2'>
          <input placeholder={placeholder} type ={type} style={{ backgroundColor: 'rgb(255, 216, 155)' }} className='rounded w-28 h-8 text-center' />
          {unit}
      </div>
    );
  };

