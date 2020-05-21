import React, {useReducer} from "react";
import {AlertContext} from "./alertContext";
import alertReducer, {hideAC,showAC} from "./alertReducer";

const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, null)
    const hide = () => dispatch(hideAC())
    const show = (text) => dispatch(showAC(text))

    return (
        <AlertContext.Provider value={{hide,show,alert:state}}>
            {children}
        </AlertContext.Provider>
    )
}
export default AlertState