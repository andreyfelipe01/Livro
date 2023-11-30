import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/pages/routes'

import AuthContext from "./src/context/contexto";

export default function App() {
  const [nome , setNome] = useState('')
  function setNomeContexto (props){
    setNome(props)
  }
  return (
      <AuthContext.Provider value={{nome, setNomeContexto}}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      </AuthContext.Provider>
  );
}