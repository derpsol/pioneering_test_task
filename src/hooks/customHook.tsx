/* eslint-disable */

import { useState } from "react";

export const useVariable = (flag: boolean) => {
    const [theme, setTheme] = useState('light');
    if(flag) {theme == 'light' ? () => {setTheme('dark')} : () => {setTheme('light')}};

    return theme;
}