import { createContext, useContext, useState } from "react";

const AuthContextProvider = createContext();
function AuthContext({children}) {
    const [user, setUser] = useState(null);
  return (
    <AuthContextProvider.Provider value={{user,setUser}}>
        {children}</AuthContextProvider.Provider>
  );
}

export function useUser() {
    const data = useContext(AuthContextProvider);
    return data;
}
export default AuthContext;
