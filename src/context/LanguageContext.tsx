import React, { createContext, useState } from "react";

interface LangContextType {
  lang: string;
  setLang: (lang: string) => void;
}

export const LangContext = createContext<LangContextType>({
  lang: "pl",
  setLang: () => {},
});

interface LangProviderProps {
  children: React.ReactNode;
}

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  const [lang, setLang] = useState("pl");

  const changeLang = (lang: string) => {
    setLang(lang);
  };

  const value = {
    lang,
    setLang: changeLang,
  };

  return (
    <LangContext.Provider value={value}>{children}</LangContext.Provider>
  );
};
