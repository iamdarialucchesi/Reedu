import {createContext, useContext, useState} from "react";

const ModuleContext = createContext();

function ModuleProvider({children}) {
    const [moduleContext, setModuleContext] = useState();
    const [count, setCount] = useState(1);

    return (
        <ModuleContext.Provider value={{moduleContext, setModuleContext, count, setCount}}>
            {children}
        </ModuleContext.Provider>
    );
};

function useModule() {
    const context = useContext(ModuleContext);
    if (context === undefined) throw new Error("ModuleContext use outside the ModuleProvider");
    return context;
}

export {ModuleProvider, useModule};
