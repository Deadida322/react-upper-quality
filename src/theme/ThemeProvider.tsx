import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY, ThemeContextProps } from "./ThemeContext";
import { useState, useMemo, FC, ReactElement, ReactNode } from "react";


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
interface Props {
    children: ReactElement | ReactElement[] | ReactNode;

}
export const ThemeProvider = ({children}: Props) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo<ThemeContextProps>(()=>({
        theme,
        setTheme
    }), [theme, setTheme]);


    return (<ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>)
}