import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';



export default function Main() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  
    const login = () => {
      alert('Login realizado com sucesso, ir para página inicial');
    }
  
    const cadastrar = () => {
      alert('Ir para página de cadastro');
    }

    const recuperar = () => {
        alert('Ir para página de recuperação de senha');
      }
  
    return (
      <>
      <View style={styles.container}>
        <StatusBar style= {styles.statusBar}/>
  
        <Image 
          style={
                 { 
                    width: 122, 
                    height: 187, 
                    marginTop:80,
                    marginBottom: 50}} 
                    source={require('../../assets/census.png')} 
        />
  
        <TextInput 
          placeholder="  Email" 
          style={styles.textInput}
          onChangeText={text=>setEmail(text)} 
        />
  
        <TextInput 
          secureTextEntry={true} 
          placeholder="  Senha" 
          style={styles.textInput} 
          onChangeText={text=>setSenha(text)} 
        />
        <View style={{ flexDirection:'row', alignItems:'center'}}>
        <TouchableOpacity style={styles.login} onPress={()=>login()}>
          <Text style={{color:'black', textAlign:'center'}}>Login</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.cadastro} onPress={()=>cadastrar()}>
          <Text style={{color:'black', textAlign:'center'}}>Cadastrar</Text>
        </TouchableOpacity>
        </View>          
        
        <TouchableOpacity  onPress={()=>recuperar()}>
          <Text style = {{color:'black', textAlign:'center', marginTop:34}}>Recuperar senha</Text>
        </TouchableOpacity>
      </View>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    textInput: {
      width: 220,
      height: 32,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: '#E9E3E3',
      marginBottom: 10,
    },
  
    statusBar: {
      width:360, 
      marginBottom:52, 
      backgroundColor:'#FBBC05',
    },
  
    login: {
      width: 92,
      height: 32,
      borderRadius: 15,
      backgroundColor: '#FBBC05',
      //right: 10,
      justifyContent: 'center',
    },
  
    cadastro: {
      width: 92,
      height: 32,
      borderRadius: 15,
      backgroundColor: '#F9D879',
      marginLeft: 36,
      justifyContent: 'center',
      
    },
  
  
  });
