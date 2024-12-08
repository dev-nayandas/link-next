import { useState } from "react";

import { AuthContext } from "../context";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;