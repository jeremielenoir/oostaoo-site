import React, {
  Dispatch, ReactNode, SetStateAction, createContext, useMemo, useState,
} from 'react';

interface Props {
  children: ReactNode;
}

interface DataContextProps {
  jobApply: string;
  setJobApply: Dispatch<SetStateAction<string>>,
}

// Créer le contexte
export const DataContext = createContext<DataContextProps>({
  jobApply: '',
  setJobApply: () => { },
});

const DataContextProvider = ({ children }: Props) => {
  const [jobApply, setJobApply] = useState<string>('');

  const contextValue = useMemo(() => ({ jobApply, setJobApply }), [jobApply]);

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
