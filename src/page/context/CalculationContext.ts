// import React, { createContext, useContext, useState, ReactNode } from 'react';

// // Create a context
// const CalculationContext = createContext({});
// interface CalculationProviderProps {
//     children: ReactNode;
//   }

// // Create a provider component to wrap your app with
// export const CalculationProvider: React.FC<CalculationProviderProps>  = ({ children }) => {
//   const [greatestValues, setGreatestValues] = useState({
//     col1: null,
//     col2: null,
//     col3: null,
//     col4: null,
//     col5: null,
//   });

//   const [combinedGreatestValue, setCombinedGreatestValue] = useState(null);

//   const [inputFactors, setInputFactors] = useState({
//     Fz: '',
//     Fa: '',
//     Fb: '',
//     Fc: '',
//     Fd: '',
//   });

//   const [inputStaff, setInputStaff] = useState({
//     Ez: '',
//     Ea: '',
//     Eb: '',
//     Ec: '',
//     Ed: '',
//   });

//   const [inputVType, setInputVType] = useState({
//     Tz: '',
//     Ta: '',
//     Tb: '',
//     Tc: '',
//     Td: '',
//   });

//   const [inputValuesP, setInputValuesP] = useState({
//     Pz: '',
//     Pa: '',
//     Pb: '',
//     Pc: '',
//     Pd: '',
//   });

//   const [percentValue, setPercentValue] = useState('');

//   const [calculatedValues, setCalculatedValues] = useState({
//     C: '',
//     Ca: '',
//     Cb: '',
//     Cc: '',
//     Cd: '',
//   });

//   const [calculatedValuesA, setCalculatedValuesA] = useState({
//     Az: '',
//     Aa: '',
//     Ab: '',
//     Ac: '',
//     Ad: '',
//   });

//   const [calculatedValuesB, setCalculatedValuesB] = useState({
//     Bz: '',
//     Ba: '',
//     Bb: '',
//     Bc: '',
//     Bd: '',
//   });

//   const [calculatedValuesC1, setCalculatedValuesC1] = useState({
//     C1z: '',
//     C1a: '',
//     C1b: '',
//     C1c: '',
//     C1d: '',
//   });

//   const [totalAirSupply, setTotalAirSupply] = useState(null);

//   // Create an object with all the states to provide to consumers
//   const contextValue = {
//     greatestValues,
//     setGreatestValues,
//     combinedGreatestValue,
//     setCombinedGreatestValue,
//     inputFactors,
//     setInputFactors,
//     inputStaff,
//     setInputStaff,
//     inputVType,
//     setInputVType,
//     inputValuesP,
//     setInputValuesP,
//     percentValue,
//     setPercentValue,
//     calculatedValues,
//     setCalculatedValues,
//     calculatedValuesA,
//     setCalculatedValuesA,
//     calculatedValuesB,
//     setCalculatedValuesB,
//     calculatedValuesC1,
//     setCalculatedValuesC1,
//     totalAirSupply,
//     setTotalAirSupply,
//   };

//   return (
//     <CalculationContext.Provider value={contextValue}>
//       {children}
//     </CalculationContext.Provider>
//   );
// };

// // Custom hook to use the context
// export const useCalculationContext = () => {
//   const context = useContext(CalculationContext);
//   if (!context) {
//     throw new Error('useCalculationContext must be used within a CalculationProvider');
//   }
//   return context;
// };
