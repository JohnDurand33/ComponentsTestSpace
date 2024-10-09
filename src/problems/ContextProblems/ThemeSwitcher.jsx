import { useTheme } from "../contexts/ThemeContext";
import '../../styles/module.themeSwitcherStyles.css'

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    const handleToggle = () => {
        toggleTheme();
    }
    return (
        <>
        <div className='theme-switcher'>
            <p>Current Theme: {theme}</p>
            <button
                type='button'
                onClick={handleToggle}>
                Toggle Theme
            </button>
        </div>
        </>
    )
};

export default ThemeSwitcher;