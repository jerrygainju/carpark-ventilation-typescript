// import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// interface CalculationState {
//   greatestValues: Record<string, number | null>;
//   combinedGreatestValue: number | null;
//   inputFactors: Record<string, string>;
//   inputStaffExposures: Record<string, string>;
//   inputVehicleTypes: Record<string, string>;
//   inputValuesP: Record<string, string>;
//   percentValue: string;
//   calculatedValues: Record<string, string>;
//   calculateAirSupply: number;
// }

// interface CalculationContextType {
//   state: CalculationState;
//   setState: Dispatch<SetStateAction<CalculationState>>;
// }

// const CalculationContext = createContext<CalculationContextType | undefined>(undefined);

// interface CalculationProviderProps {
//   children: ReactNode;
// }

// export const useCalculationContext = (): CalculationContextType => {
//   const context = useContext(CalculationContext);
//   if (!context) {
//     throw new Error("useCalculationContext must be used within a CalculationProvider");
//   }
//   return context;
// };

// export function CalculationProvider(props: CalculationProviderProps): JSX.Element {
//   const [state, setState] = useState<CalculationState>({
//     greatestValues: { col1: null, col2: null, col3: null, col4: null, col5: null },
//     combinedGreatestValue: null,
//     inputFactors: { inputFactorFz: "", inputFactorFa: "", inputFactorFb: "", inputFactorFc: "", inputFactorFd: "" },
//     inputStaffExposures: { inputStaffEz: "", inputStaffEa: "", inputStaffEb: "", inputStaffEc: "", inputStaffEd: "" },
//     inputVehicleTypes: { inputVTypeTz: "", inputVTypeTa: "", inputVTypeTb: "", inputVTypeTc: "", inputVTypeTd: "" },
//     inputValuesP: { inputValuePz: "", inputValuePa: "", inputValuePb: "", inputValuePc: "", inputValuePd: "" },
//     percentValue: "",
//     calculatedValues: {},
//     calculateAirSupply: 0,
//   });

//   return (
//     <CalculationContext.Provider value={{ state, setState }}>
//       {props.children}
//     </CalculationContext.Provider>
//   );
// }
