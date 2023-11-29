import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet , View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Item = ({ titulo, imagem, autor, descricao }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => {
      console.log('Navegando para BookDescription com parâmetros:', { titulo, autor, descricao, imagem });
      navigation.navigate('BookDescription', { titulo, autor, descricao, imagem });
    }}>
      <View style={styles.container}>
        <Image source={imagem} style={styles.imagem} />
        <Text style={styles.titulo}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },
  imagem:{
    width: 230,
    height: 350,
  },
  titulo:{
    fontWeight:'bold',
    marginTop:16,
    fontSize:20
  }
});

export default Item;
