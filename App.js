// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
// import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import Routes from './src/routes';

export default function App() {

  // const [email, setEmail] = useState('');
  // const [senha, setSenha] = useState('');

  // const login = () => {
  //   alert('Login realizado com sucesso, ir para página inicial');
  // }

  // const cadastrar = () => {
  //   alert('Ir para página de cadastro');
  // }

  return (
    <Routes />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   textInput: {
//     width: 220,
//     height: 32,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent:'center',
//     backgroundColor: '#E9E3E3',
//     marginBottom: 10,
//   },

//   statusBar: {
//     width:360, 
//     marginBottom:52, 
//     backgroundColor:'#FBBC05',
//   },

//   login: {
//     width: 92,
//     height: 32,
//     borderRadius: 15,
//     backgroundColor: '#FBBC05',
//     //right: 10,
//     justifyContent: 'center',
//   },

//   cadastro: {
//     width: 92,
//     height: 32,
//     borderRadius: 15,
//     backgroundColor: '#F9D879',
//     marginLeft: 36,
//     justifyContent: 'center',
    
//   },


// });
