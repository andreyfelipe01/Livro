import React from 'react';
import { View, Text , Image, StyleSheet} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const BookDescription = ({ route }) => {
  const { titulo, autor, descricao, imagem } = route.params;

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Image source={imagem} style={styles.img}  />
      <Text>Título: {titulo}</Text>
      <Text>Autor: {autor}</Text>
      <Text>Descrição: {descricao}</Text>
    </View>
    </SafeAreaView>
  );
};

export default BookDescription;

const styles = StyleSheet.create({
  img:{
    width: 230,
    height: 350,
  },
  container:{
    alignItems:'center'
  }
});