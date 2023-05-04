import { createContext } from "react";

const authContext = createContext({
    isAuth: false,
    setIsAuth: () => { },
    userContextData: {},
    setUserContextData: () => { },
    isEnabled: false,
    setIsEnabled: () => { },
    isFinger: {},
    setIsFinger: () => { }
})

export default authContext