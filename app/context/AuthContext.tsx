"use client";

import { createContext, useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  city: string;
  phone: string;
}

interface State {
  loading: boolean;
  data: string | null;
  error: string | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
}

export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  data: null,
  error: null,
  setAuthState: () => {},
});

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<State>({
    loading: true,
    data: null,
    error: null,
  }); // khởi tạo

  const fetchUser = async () => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const jwt = getCookie("jwt");
      if (!jwt) {
        return setAuthState({
          data: null,
          error: null,
          loading: false,
        });
      }
      const response = await axios.get("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      axios.defaults.headers.common["Authorizaton"] = `Bearer ${jwt}`;
      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };

  useEffect(() => {
    fetchUser;
  }, []);
  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
