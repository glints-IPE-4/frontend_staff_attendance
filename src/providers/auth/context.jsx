import React, { useState, createContext, useMemo, useContext, useEffect } from 'react';
import { useLocalStorageState, useRequest } from 'ahooks';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [reqHeader, setReqHeader] = useState({
    'Content-Type': 'application/json',
    Authorization: '',
  });
  const history = useHistory();
  const [auth, setAuth] = useLocalStorageState('auth', {
    token: '',
    nip: '',
    email: '',
    role: '',
  });

  useEffect(() => {
    setReqHeader(() => ({
      ...reqHeader,
      Authorization: `Bearer ${auth.token}`,
    }));
  }, [auth]);

  const login = useRequest(
    values => ({
      url: 'http://staffattendanceipe4.herokuapp.com/auth/api/v1/login',
      method: 'post',
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
      headers: {
        ...reqHeader,
      },
    }),
    {
      manual: true,
      throwOnError: true,
      onSuccess: data => {
        setAuth({
          token: data.token,
          email: data.email,
          nip: data.nip,
          role: data.role,
        });
        history.push('/');
      },
    },
  );
  const logout = () => {
    setAuth({ token: '', nip: '', email: '', role: '' });
  };
  const memoedValue = useMemo(
    () => ({
      login,
      auth,
      reqHeader,
      logout,
    }),
    [auth, login, reqHeader],
  );
  return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function useAuth() {
  return useContext(AuthContext);
}
