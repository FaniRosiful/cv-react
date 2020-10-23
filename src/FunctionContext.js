import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContact'

export default function FunctionContext() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#040331' : '#ffffff',
        color: darkTheme ? '#ffffff' : '#040331',
        padding: '2rem'
    }
    return (
        <>
        <button className="tema" onClick={toggleTheme}> tema</button>
        <div className="foot" style={themeStyles}>Muhammad Fani Rosiful Aqli &copy; 2020
</div>
        </>
    )
}