import React, { createContext, useState, useContext, ReactNode } from "react";

type DataContextType = {
  contextData: string;
  setContextData: React.Dispatch<React.SetStateAction<string>>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

type ProviderProps = {
  children: ReactNode;
};

function DataContextProvider({ children }: ProviderProps) {
  const [contextData, setContextData] = useState("Felipe");

  const valor = { contextData, setContextData };

  return <DataContext.Provider value={valor}>{children}</DataContext.Provider>;
}

function useDataContext() {
  const ctx = useContext(DataContext);
  if (ctx === undefined) {
    throw new Error("useDataContext debe usarse dentro de DataContextProvider");
  }
  return ctx;
}

export { DataContextProvider, useDataContext };
