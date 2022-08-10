import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Loading from "./components/common/Loading";
import { api } from "./config";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(`${api}/auth/me`, {
          withCredentials: true,
        });
        setUser(result.data);
      } catch (err) {}
      setLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {loading ? <Loading height="100vh" /> : <>{children}</>}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;

export function useGlobal() {
  return useContext(GlobalContext);
}
