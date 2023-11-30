import React from 'react';
import { View, Text , Image, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';

const BookDescription = ({ route, navigation }) => {
  const { titulo, autor, descricao, imagem } = route.params;

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
      <AntDesign name="arrowleft" style={styles.icon} size={24} color="black" />
      </TouchableOpacity>
      <Image source={imagem} style={styles.img}  />
      <Text style={styles.titulo}>Título: {titulo}</Text>
      <Text style={styles.autor}>Autor: {autor}</Text>
      <Text style={styles.descricao}>Descrição: {descricao}</Text>
    </View>
    </SafeAreaView>
  );
};

export default BookDescription;

const styles = StyleSheet.create({
  img:{
    width: 220,
    height: 300,
    alignSelf:'center'
  },
  container:{

  },
  titulo:{
    fontWeight:'bold',
    padding:10,
    alignSelf:'center'
  },
  autor:{
    fontWeight:'bold',
    padding:10,
    alignSelf:'center'
  },
  descricao:{
    fontWeight:'bold',
    textAlign:'center'
  },
  icon:{
    paddingLeft:10,
    marginBottom:10
  }
});