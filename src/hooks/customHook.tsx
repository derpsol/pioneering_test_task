import { useState } from "react";

export const useVariable = (value: boolean) => {
    const [theme, setTheme] = useState(true);

    setTheme(value);

    return theme;
}