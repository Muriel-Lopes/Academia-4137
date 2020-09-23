import React, { Component, useState } from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();



export function Bravo ({navigation},props){

  
    const [peso, setPeso] = useState(0.00);
    const [altura, setAltura] = useState(0.00);
    const [imc, setImc] = useState(0.00);

    function calcularIMC (peso, altura) {
      var resultado = peso / (altura*altura)
      setImc(resultado)
      if(resultado != 0){
        navigation.navigate('Charlie' ,{imc})
      }
    }

    

    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <LinearGradient
                // Background Linear Gradient
                colors={['#4876FF', '#3A5FCD', '#27408B']}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  height: 612,
                }}
              />
          
          <Text style={{ fontSize:30,color:'#FFFAFA' ,fontWeight: 'bold', padding: 30}}>Calculadora de IMC </Text>
          
          <Text style={styles.texto}>Digite seu Peso em KG :</Text>
          <TextInput  
          style={styles.entrada}
          placeholder= 'Ex: 60.65'
          keyboardType={'numeric'}
          onChangeText={(val)=> setPeso(val)}
          ></TextInput>

          <Text style={styles.texto}>Digite sua Altura em CM :</Text>
          <TextInput  
          style={styles.entrada}
          placeholder= 'Ex: 169.5'
          keyboardType={'numeric'}
          onChangeText={(val)=> setAltura(val)}
          ></TextInput>
          <Text>
            IMC: {imc.toFixed(2)}
          </Text>

        <View style={{ flex: 1, alignItems: 'center' , flexDirection: 'row', paddingTop: 170}}>
          <TouchableOpacity style={styles.ident1} 
              onPress={() => navigation.navigate('Alfa')}>
              <Icon name="arrow-circle-left" size={30} color="#000"></Icon>
              <Text style={styles.texto}>Voltar </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ident1} 
              onPress={() => navigation.navigate('Charlie')}>
              <Icon name="calculator" size={30} color="#000"></Icon>
              <Text style={styles.texto}>Calcular </Text>
          </TouchableOpacity>
          </View>
          <Text style={{ fontSize:12,fontWeight: 'bold', fontStyle: 'italic' }}>Created by: Muriel Lopes </Text>
          
                
        </View>
        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    paddingTop: 40,
  },
  views: {
    width: 300,
    height: 300,
    margin: 15,
    borderRadius: 6,
    alignItems: "center",
  },
  entrada: {
    borderWidth: 1,
    borderColor: '#CD919E',
    padding: 8,
    margin: 10,
    width: 200,

  },
  componente: {
    width: 500,
  },
  ident1: {
    backgroundColor:'#FAFAFA',
    shadowColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 150,
    height: 60,
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    margin: 10,
    
  },
  texto: {
    fontSize:20,
    fontWeight: 'bold',
    color:'#000000'
  },
  title: {
    fontSize:30,color:'#FFFAFA' ,
    fontWeight: 'bold',
    alignItems: 'baseline', 
  }
});



// <Button title="calcular" onPress={()=>calcularIMC(peso,altura)}> </Button>
// calcular