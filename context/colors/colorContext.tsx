"use client";
import React, { ReactNode, createContext, useState } from "react";

interface ContextProps {
  color: string;
  setColor: (arg0: string) => void; 
}

const ColorContext = createContext<ContextProps | undefined>(undefined);

interface ColorProviderProps {
  children: ReactNode;
}

const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [color, setColor] = useState("#0670a4");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorContext, ColorProvider };
