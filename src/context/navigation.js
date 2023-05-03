import { createContext, useState, useEffect } from "react";
//Antes
const NavigationContext = createContext();

function NavigatioProvider ({children}){
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(
        ()=>{
            const handler = () =>{
                setCurrentPath(window.location.pathname)
            };
            window.addEventListener('popstate', handler);

            return () =>{
                window.removeEventListener('popstate', handler)
            }
        },[]
    );

    const navigate = (to) =>{
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    return <NavigationContext.Provider value={{currentPath, navigate}}>
     
        {children}
    </NavigationContext.Provider>
};

export {NavigatioProvider};
export default NavigationContext;