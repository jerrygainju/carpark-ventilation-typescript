import Select from 'react-select';
import { Dispatch, SetStateAction } from 'react';

interface DuctFormProps {
    selectedUnit: string;
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
    selectedOption: any;
    handleOptionChange: (option: any) => void;
    selectedShape: string;
    handleShapeChange: (shape: string) => void;
    ductOptions: any[];
    materialOptions: any[];
    handleUnitChange: (selectedOption: any) => void;
}
const DuctForm: React.FC<DuctFormProps> = ({
    selectedUnit,
    inputValue,
    setInputValue,
    handleOptionChange,
    selectedOption,
    selectedShape,
    handleShapeChange,
    ductOptions,
    materialOptions,
    handleUnitChange,
}) => {
    return (
        <div className="flex flex-wrap pt-10 justify-center pb-20 bg-cover" style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/3434504.jpg")' }}>
            <div className='flex flex-col'>
                <div className='text-center text-3xl font-bold pb-4 font-serif text-gray-300'>
                    Duct Size Calculation
                </div>
                <div className="bg-orange-300 w-[500px] h-[800px] rounded">
                    <div className='flex flex-row gap-10'>
                        <div className=' flex flex-col pt-6 pl-6'>
                            <b>Units</b>
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
                            <b>Material</b>
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
                            {selectedUnit === 'Metric' ? ' l/s' : ' cfm'}
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
                        <div className='flex flex-row pt-4'>
                            <div>
                                {selectedOption === "velocity" && (
                                    <div>
                                        Velocity: <input placeholder='add velocity' style={{ backgroundColor: 'rgb(255, 216, 155)' }} className='rounded w-28 h-8 text-center' />
                                        {selectedUnit === 'Metric' ? ' m/s' : ' fpm'}
                                    </div>
                                )}
                            </div>
                            <div>
                                {selectedOption === "frictionLoss" && (
                                    <div>
                                        Friction Loss: <input placeholder='add friction loss' style={{ backgroundColor: 'rgb(255, 216, 155)' }} className='rounded w-32 h-8 text-center' />
                                        {selectedUnit === 'Metric' ? ' Pa/m' : ' in. wg/100 ft'}
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* <div className='pt-2'>
                            Duct Height: <input placeholder='duct height' style={{ backgroundColor: 'rgb(255, 216, 155)' }} className='rounded w-28 h-8 text-center' />
                            {selectedUnit === 'Metric' ? ' mm' : ' in. (Height)'}
                            
                        </div> */}
                        <hr className="my-4 border-black " />
                    </div>
                    <div className='flex flex-col pl-6 pr-6'>
                        <b>Shape of Duct</b>
                        <div className='flex flex-row gap-12 pt-4'>
                            <label className='flex items-center'>
                                <input
                                    type='radio'
                                    value='round'
                                    checked={selectedShape === "round"}
                                    onChange={() => handleShapeChange("round")}
                                    className="h-4 w-4"
                                />
                                <span className='pl-2'>Round</span>
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type='radio'
                                    value='rect'
                                    checked={selectedShape === "rect"}
                                    onChange={() => handleShapeChange("rect")}
                                    className="h-4 w-4"
                                />
                                <span className='pl-2'>Rectangle</span>
                            </label>
                        </div>
                        <div className='flex flex-row pt-4'>
                            <div>
                                {selectedShape === "round" && (
                                    <div>
                                        Round: Result
                                        {selectedUnit === 'Metric' ? ' mm' : ' in. (Diameter)'}:
                                    </div>
                                )}
                            </div>
                            <div>
                                {selectedShape === "rect" && (
                                    <div>
                                        Rectangle: Result
                                        {selectedUnit === 'Metric' ? ' mm' : ' in'}
                                    </div>
                                )}
                            </div>
                        </div>
                        <hr className="my-4 border-black " />
                    </div>
                    <div className='flex flex-col pl-6 pr-6'>
                        <b>Duct Size</b>
                        <div className='pt-2'>
                            Width × Height = {" "}
                            <input placeholder='width' style={{ backgroundColor: 'rgb(255, 216, 155)' }} className='rounded w-24 h-8 text-center' />
                            {selectedUnit === 'Metric' ? ' mm' : ' in'}  ×  {' '}
                            <input placeholder='height' style={{ backgroundColor: 'rgb(255, 216, 155)' }} className='rounded w-24 h-8 text-center' />
                            {selectedUnit === 'Metric' ? ' mm' : ' in'}  
                        </div>
                        <hr className="my-4 border-black " />
                    </div>
                    <div className='flex flex-col pl-6 pr-6'>
                         <b>Additional Information</b>
                         {/* <div className='pt-2'>
                            Equivalent Diameter
                         </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DuctForm;

// return (
//     <div className="flex flex-wrap pt-10 justify-center pb-20 bg-cover" style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/3434504.jpg")' }}>
//       <div className='flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/3 h-full'>
//         <div className='text-center text-3xl font-bold pb-4 font-serif text-gray-300'>
//           Duct Size Calculation
//         </div>
//         <div className="bg-orange-300 rounded p-4 md:p-6 lg:p-8 h-full">
//           <div className='flex flex-col md:flex-row gap-4'>
//             {/* Units */}
//             <SelectInput
//               label="Units"
//               options={ductOptions}
//               placeholder="Select Unit"
//               onChange={handleUnitChange}
//             />

//             {/* Material */}
//             <SelectInput
//               label="Material"
//               options={materialOptions}
//               placeholder="Select Material"
//               value={materialOptions.find(option => option.value === inputValue)}
//               onChange={(selectedOption) => setInputValue(selectedOption ? selectedOption.value : '')}
//               formatOptionLabel={(option, { context }) => (
//                 <div>
//                   {context === 'menu' ? option.label : option.value}
//                 </div>
//               )}
//             />
//           </div>
//           <hr className="my-4 border-black" />

//           <div className='flex flex-col md:flex-row gap-4'>
//             {/* Parameter */}
//             <TextInput
//               label="Airflow"
//               placeholder='flow rate'
//               unit={selectedUnit === 'Metric' ? 'l/s' : 'cfm'}
//             />

//             {/* Size By */}
//             <RadioInput
//               label="Size By"
//               options={[
//                 { value: 'velocity', label: 'Velocity' },
//                 { value: 'frictionLoss', label: 'Friction Loss' },
//               ]}
//               selectedOption={selectedOption}
//               onChange={handleOptionChange}
//               additionalInputs={{
//                 velocity: {
//                   label: 'Velocity',
//                   placeholder: 'add velocity',
//                   unit: selectedUnit === 'Metric' ? 'm/s' : 'fpm',
//                 },
//                 frictionLoss: {
//                   label: 'Friction Loss',
//                   placeholder: 'add friction loss',
//                   unit: selectedUnit === 'Metric' ? 'Pa/m' : 'in. wg/100 ft',
//                 },
//               }}
//             />
//           </div>
//           <hr className="my-4 border-black" />

//           <div className='flex flex-col md:flex-row gap-4'>
//             {/* Shape of Duct */}
//             <RadioInput
//               label="Shape of Duct"
//               options={[
//                 { value: 'round', label: 'Round' },
//                 { value: 'rect', label: 'Rectangle' },
//               ]}
//               selectedOption={selectedShape}
//               onChange={handleShapeChange}
//               additionalInputs={{
//                 round: {
//                   label: 'Round: Result',
//                   unit: selectedUnit === 'Metric' ? 'mm' : 'in. (Diameter)',
//                 },
//                 rect: {
//                   label: 'Rectangle: Result',
//                   unit: selectedUnit === 'Metric' ? 'mm' : 'in',
//                 },
//               }}
//             />
//           </div>

//           <div className='flex flex-col md:flex-row gap-4'>
//             {/* Duct Size */}
//             <div className='flex flex-col md:w-1/2'>
//               <b>Duct Size</b>
//               <div className='pt-2'>
//                 Width × Height = {" "}
//                 <input placeholder='width' style={{ backgroundColor: 'rgb(255, 216, 155)' }} className='rounded w-24 h-8 text-center' />
//                 {selectedUnit === 'Metric' ? ' mm' : ' in'}  ×  {' '}
//                 <input placeholder='height' style={{ backgroundColor: 'rgb(255, 216, 155)' }} className='rounded w-24 h-8 text-center' />
//                 {selectedUnit === 'Metric' ? ' mm' : ' in'}
//               </div>
//               <hr className="my-4 border-black " />
//             </div>

//             {/* Additional Information */}
//             <div className='flex flex-col md:w-1/2'>
//               <b>Additional Information</b>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
