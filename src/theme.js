import React from "react";
import {themeTypes} from "./_constants"

const DefaultTheme = React.lazy(() => import('./themes/default'));
const BlueTheme = React.lazy(() => import('./themes/blue'));
const GreenTheme = React.lazy(() => import('./themes/green'));
const PurpleTheme = React.lazy(() => import('./themes/purple'));

const ThemeSelector = ({ children }) => {
    const [theme, setTheme] = React.useState(localStorage.getItem('theme') || themeTypes.DEFAULT)
    React.useEffect(()=>{
        window.addEventListener('storage', ()=>{
        
            setTheme(localStorage.getItem("theme"))})
    }
    ,[theme])
    return (
      <>
        <React.Suspense fallback={<></>}>
          {(theme === themeTypes.DEFAULT) && <DefaultTheme />}
          {(theme === themeTypes.BLUE) && <BlueTheme />}
          {(theme === themeTypes.GREEN) && <GreenTheme />}
          {(theme === themeTypes.PURPLE) && <PurpleTheme />}
        </React.Suspense>
        {children}
      </>
    )
  }

  export default ThemeSelector

