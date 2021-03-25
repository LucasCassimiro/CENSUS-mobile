import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


export default function Cadastro({ navigation }) {
   
   
    const voltar = () => {
    navigation.navigate('Main') ;
    }

    const login = () => {
    navigation.navigate('Main') ;
    }
  
    const cadastrar = () => {
    alert('Cadastro realizado com sucesso, faça seu login!');  
    navigation.navigate('Main') ;
    }

    return (
        <>
        <View style={styles.container}>
          <StatusBar style= {styles.statusBar}/>
              
          <TouchableOpacity  onPress={()=>login()}>
            <Text 
              style = {{
                color:'black', 
                textAlign:'center', 
                marginBottom:120, 
                fontSize:20}}>
                  Já possuo uma conta!
              </Text>
          </TouchableOpacity>
          
          <TextInput 
            placeholder="  Digite seu email cadastrado" 
            style={styles.textInput}
            onChangeText={text=>setEmail(text)} 
          />
    
          <TextInput 
            secureTextEntry={true} 
            placeholder="  Digite uma senha segura" 
            style={styles.textInput} 
            onChangeText={text=>setSenha(text)} 
          />

        <TextInput 
            secureTextEntry={true} 
            placeholder="  Confirme sua senha" 
            style={styles.textInput} 
            onChangeText={text=>setSenha(text)} 
          />

          <View style={{ flexDirection:'row', alignItems:'center'}}>
          
          <TouchableOpacity style={styles.voltar} onPress={()=>voltar()}>
              <Text style={{color:'black', textAlign:'center'}}>Voltar</Text>
            </TouchableOpacity>
            
            
            <TouchableOpacity style={styles.cadastro} onPress={()=>cadastrar()}>
              <Text style={{color:'black', textAlign:'center'}}>Cadastrar</Text>
            </TouchableOpacity>
           
          </View>

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

  voltar: {
      width: 92,
      height: 32,
      borderRadius: 15,
      backgroundColor: '#FBBC05',
      //right: 10,
      justifyContent: 'center',
    },

  }

);