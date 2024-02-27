import Select from 'react-select';
import { Materials, Units } from './Inputs';
import { useState } from 'react';

const Duct = () => {
    const [selectedUnit, setSelectedUnit] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option: any) => {
        setSelectedOption(option);
    };

    const ductOptions = Units();
    const materialOptions = Materials();

    const handleUnitChange = (selectedOption: any) => {
        setSelectedUnit(selectedOption ? selectedOption.value : '');
    };

    return (
        <div className="flex flex-wrap pt-10 justify-center pb-20 bg-cover" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/beautiful-view-construction-site-city-during-sunset_181624-9347.jpg?w=996&t=st=1709018835~exp=1709019435~hmac=cbc5adcba33f7641a18280d192837a8616ed372068724541d676ab69df2e18f8")' }}>
            <div className='flex flex-col'>
                <div className='text-center text-3xl font-bold pb-4 font-serif text-gray-300'>
                    Duct Size Calculation
                </div>
                <div className="bg-orange-300 w-[500px] h-[800px] rounded">
                    <div className='flex flex-row gap-10'>
                        <div className=' flex flex-col pt-6 pl-6'>
                            Units
                            <Select
                                options={ductOptions}
                                placeholder="Select Unit"
                                className='pt-2'
                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        width: '150px',
                                        backgroundColor: 'rgb(255, 216, 155)',
                                        borderColor: 'transparent',
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        width: '150px',
                                        backgroundColor: "rgb(255, 216, 155)"
                                    }),
                                }}
                                onChange={handleUnitChange}
                            />
                        </div>
                        <div className='pt-6'>
                            Material
                            <Select
                                options={materialOptions}
                                placeholder="Select Material"
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
                                value={materialOptions.find(option => option.value === inputValue)}
                                onChange={(selectedOption) => setInputValue(selectedOption ? selectedOption.value : '')}
                                formatOptionLabel={(option, { context }) => (
                                    <div>
                                        {context === 'menu' ? option.label : option.value}
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                    <hr className="my-4 border-black " />
                    <div className='flex flex-col pl-6 gap-2 pr-6'>
                        <b> Parameter </b>
                        <div>
                            Airflow: <input placeholder='flow rate' style={{ backgroundColor: 'rgb(255, 216, 155)' }} className='rounded w-28 h-8 text-center' />
                            {selectedUnit === 'Metric' ? ' L/s' : ' cfm'}
                        </div>
                        <hr className="my-4 border-black " />
                    </div>
                    <div className='flex flex-col pl-6 pr-6'>
                        <b>Size By </b>
                        <div className='flex flex-row gap-10 pt-4'>
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="velocity"
                                        checked={selectedOption === "velocity"}
                                        onChange={() => handleOptionChange("velocity")}
                                        className="h-4 w-4"
                                    />
                                    <span className="pl-2">Velocity</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="frictionLoss"
                                        checked={selectedOption === "frictionLoss"}
                                        onChange={() => handleOptionChange("frictionLoss")}
                                        className="h-4 w-4"

                                    />
                                    <span className="pl-2">Friction Loss</span>
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-row gap-4 pt-4'>
                            <div>
                                {selectedOption === "velocity" && (
                                    <div>
                                        Velocity: <input placeholder='add velocity' style={{ backgroundColor: 'rgb(255, 216, 155)' }} className='rounded w-28 h-8 text-center' />
                                        {selectedUnit === 'Metric' ? ' M/s' : ' fpm'}
                                    </div>
                                )}
                            </div>
                            <div>
                                {selectedOption === "frictionLoss" && (
                                    <div>
                                        Friction Loss: <input placeholder='add friction loss' style={{ backgroundColor: 'rgb(255, 216, 155)' }} className='rounded w-32 h-8 text-center' />
                                        {selectedUnit === 'Metric' ? ' Pa/30m' : ' in. wg/100'}
                                    </div>
                                )}
                            </div>
                        </div>
                        <hr className="my-4 border-black " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Duct;
