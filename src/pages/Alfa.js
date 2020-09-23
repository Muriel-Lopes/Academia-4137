import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Picker} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();


export function Alfa ({navigation},props){

    const [categoria, setCategoria] = React.useState();

    state = {categoria: 'CR'};

      
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
            <Text style={{ fontSize:20, justifyContent:'center', padding: 30}}>Selecione sua categoria{'\n'}     conforme a tabela:  </Text>
            <Text style={{ fontSize:20}}>2 até 18 : Criança{'\n'}19 até 60 : Adulto{'\n'}61 ou maior : Idoso</Text>
             
            <Picker
                selectedValue={categoria}
                style={{height: 50, width: 150}}
                onValueChange={(itemValue, itemIndex) =>
                  setCategoria(itemValue)
                }>
                <Picker.Item label="Criança" value="CR" />
                <Picker.Item label="Adulto" value="AD" />
                <Picker.Item label="Idoso" value="ID" />
            </Picker>

            </View> 
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', padding: 17}}>
            <TouchableOpacity style={styles.ident1} 
              onPress={() => navigation.navigate('Bravo')}>
              <Icon name="arrow-circle-right" size={30} color="#000"></Icon>
              <Text style={styles.texto}>Próximo </Text>
            </TouchableOpacity>
            </View>
            <Text style={{ fontSize:12,fontWeight: 'bold', fontStyle: 'italic'}}>Created by: Muriel Lopes </Text>
              
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
    borderColor: '#dadada',
    padding: 8,
    margin: 10,
    width: 200,

  },
  componente: {
    width: 9000,
    height: 200
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
});
