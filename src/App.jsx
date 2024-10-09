import { useState } from 'react'
import ToggleDisplayVisibility from './problems/ToggleDisplayVisibility'
import ProductCard from './problems/ProductCard'
import RegistrationForm from './problems/RegistrationForm'
import FetchApiAndFilter from './problems/FetchApiAndFilter'
import FetchApiAndFilter2 from './problems/FetchApiAndFilter2'
import FetchStarships from './problems/FetchStarships'
import CreateFilter from './problems/CreateFilter'
import UserProfileCardQ from './TestProject/UserProfileCardQ'
import UserFormQ from './TestProject/UserFormQ'
// import { ThemeProvider } from './problems/contexts/ThemeContext'
// import ThemeSwitcher from './problems/ContextProblems/ThemeSwitcher'
import CounterUseState from './problems/CounterUseState'
import CounterUseReducer from './problems/CounterUseReducer'
import FormUseReducer from './problems/FormUseReducer'
import TodoWithUseReducer from './problems/TodoUseReducer'

import '../src/styles/global.css'

// only need ThemeProvider for ThemeSwitcher Component

const App = () => {
    return (
        // <ThemeProvider>
        <div className="demo-container">
        {/* <ToggleDisplayVisibility />
        <ProductCard />
        <RegistrationForm />
        <FetchApiAndFilter />
        <FetchApiAndFilter2 />
        <FetchStarships />
        <CreateFilter />
        <UserProfileCardQ /> 
        <UserFormQ />
        <ThemeSwitcher /> 
        <CounterUseState />
            <CounterUseReducer />
            <FormUseReducer />*/}
            <TodoWithUseReducer />
            </div>
        // </ThemeProvider>
    )
}

export default App;
