import React, { createContext, useState } from "react";
import { lightTheme, darkTheme } from "./theme";

export const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  const theme = dark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        dark,
        toggleTheme: () => setDark((prev) => !prev),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
