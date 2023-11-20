import React, {createContext, useState} from 'react' 


export  const Context = createContext();


let browserLang="EN";

// 2-component context
export default function ContextProvider ({children})   {

    const [lang, setLang] = useState(browserLang)

    

    return (
        <Context.Provider value={{lang, setLang}}>
            {children}
        </Context.Provider>
    )

}

