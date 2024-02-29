import React from 'react';
import Select from 'react-select';

interface SelectInputProps {
  label: string;
  options: any[];
  placeholder: string;
  onChange: (selectedOption: any) => void;
}

export const SelectInput: React.FC<SelectInputProps> = ({ label, options, placeholder, onChange }) => {
  return (
    <div className='flex flex-col md:w-1/2'>
      <b>{label}</b>
      <Select
        options={options}
        placeholder={placeholder}
        className='pt-2'
        styles={{
          control: (provided) => ({
            ...provided,
            width: '100%',
            backgroundColor: 'rgb(255, 216, 155)',
            borderColor: 'transparent',
          }),
          menu: (provided) => ({
            ...provided,
            width: '100%',
            backgroundColor: "rgb(255, 216, 155)"
          }),
        }}
        onChange={onChange}
      />
    </div>
  );
};

interface RadioInputProps {
  label: string;
  options: any[];
  selectedOption: string;
  onChange: (option: string) => void;
  additionalInputs: Record<string, { label: string, placeholder: string, unit: string }>;
}

export const RadioInput: React.FC<RadioInputProps> = ({ label, options, selectedOption, onChange, additionalInputs }) => {
  return (
    <div className='flex flex-col md:w-1/2'>
      <b>{label}</b>
      <div className='flex flex-row gap-4'>
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
      <div className='flex flex-row gap-4'>
        {Object.entries(additionalInputs).map(([key, input]) => (
          selectedOption === key && (
            <div key={key}>
              {input.label}: <input placeholder={input.placeholder} style={{ backgroundColor: 'rgb(255, 216, 155)' }} className='rounded w-full md:w-36 h-8 text-center' />
              {input.unit}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

interface TextInputProps {
    label: string;
    placeholder: string;
    unit: string;
  }
  
  export const TextInput: React.FC<TextInputProps> = ({ label, placeholder, unit }) => {
    return (
      <div className='flex flex-col md:w-1/2'>
        <b>{label}</b>
        <div>
          <input placeholder={placeholder} style={{ backgroundColor: 'rgb(255, 216, 155)' }} className='rounded w-28 h-8 text-center' />
          {unit}
        </div>
        <hr className="my-4 border-black " />
      </div>
    );
  };

