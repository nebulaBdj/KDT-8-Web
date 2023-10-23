import { useState } from "react";
import MyContext from "./lang-context";


export default function LanguageProvider(props) {
    const [language, setLang] = useState('ko')
    
    return <MyContext.Provider value={{language}}>
        {props.children}
    </MyContext.Provider>
}