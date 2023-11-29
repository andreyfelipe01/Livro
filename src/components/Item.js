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
    
  },
  imagem:{
    height:250,
    width:180,

  },
  titulo:{
    padding:10,
    fontWeight:'bold',

    
  }
});

export default Item;
