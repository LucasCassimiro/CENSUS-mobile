import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


export default function Recuperar({ navigation }) {
   
    const enviar = () => {
    navigation.navigate('Main') ;
    }

    return (
        <>
        <View style={styles.container}>
          <StatusBar style= {styles.statusBar}/>
    
          
          <TextInput 
            placeholder="  Email" 
            style={styles.textInput}
            onChangeText={text=>setEmail(text)} 
          />
    

          <View style={{ flexDirection:'row', alignItems:'center'}}>
          
            <TouchableOpacity style={styles.voltar} onPress={()=>enviar()}>
              <Text style={{color:'black', textAlign:'center'}}>Enviar código</Text>
            </TouchableOpacity>
            
      
           
          </View>

        </View>
        </>
      
    );
};

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