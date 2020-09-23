import React, { useState } from 'react';
import {View, Text, StyleSheet,TouchableOpacity, ImageComponent, Table } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();

export function Charlie ({navigation},props){
     
    
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
          
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 30 }}>
          <Text style={{ fontSize:30,color:'#FFFAFA' ,fontWeight: 'bold', padding: 30}}>Calculadora de IMC </Text>
          <Text style={styles.texto}>Resultado</Text>
          
          <View style={{ alignItems: 'center' , flexDirection: 'row'}}>
            <Text style={styles.box}>IMC (kg/m2)  </Text>
            <Text style={styles.box}>Classificação</Text>
          </View>

          <View style={{ alignItems: 'center' , flexDirection: 'row'}}>
            <Text style={styles.box2}>Menor 18,5  </Text>
            <Text style={styles.box2}>Baixo Peso</Text>
          </View>

          <View style={{ alignItems: 'center' , flexDirection: 'row'}}>
            <Text style={styles.box3}>18,5 - 24,9 </Text>
            <Text style={styles.box3}>Peso Saudável</Text>
          </View>

          <View style={{  alignItems: 'center' ,flexDirection: 'row'}}>
            <Text style={styles.box2}>25,0 - 29,9 </Text>
            <Text style={styles.box2}>Sobrepeso</Text>
          </View>

          <View style={{ alignItems: 'center' , flexDirection: 'row'}}>
            <Text style={styles.box3}>Maior 30,0  </Text>
            <Text style={styles.box3}>Obesidade</Text>
          </View>
          
          
          </View>
          <View style={{ alignItems: 'center' , flexDirection: 'row'}}>
          <TouchableOpacity style={styles.ident1} 
              onPress={() => navigation.navigate('Bravo')}>
              <Icon name="arrow-circle-left" size={30} color="#000"></Icon>
              <Text style={styles.texto}>Voltar </Text>
          </TouchableOpacity> 

          <TouchableOpacity style={styles.ident1} 
              onPress={() => navigation.navigate('Alfa')}>
              <Icon name="home" size={30} color="#000"></Icon>
              <Text style={styles.texto}>Início </Text>
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
    borderColor: '#FFFAFA',
    padding: 8,
    margin: 10,
    width: 200,

  },
  componente: {
    width: 500,
  },
  ident1: {
    backgroundColor:'#FFFAFA',
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
    padding: 0,
    margin: 10,
    
  },
  teste: {
    fontSize:20,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#FFFAFA',

  },
  texto: {
    fontSize:20,
    fontWeight: 'bold',
    color:'#000000',
  },
  box: {
    backgroundColor:'#CD919E',
    alignItems: 'center',
    width: 120,
    height: 40,

  },
  box2: {
    backgroundColor:'#EEA9B8',
    alignItems: 'center',
    width: 120,
    height: 40,

  },
  box3: {
    backgroundColor:'#FFB5C5',
    alignItems: 'center',
    width: 120,
    height: 40,

  },
});
