import React from 'react';
import { FlatList , Image , StyleSheet} from 'react-native';
import Item from './Item';
import { ScrollView } from 'react-native-virtualized-view';

const BookList = ({ books }) => {
  const renderItem = ({ item }) => (
    <Item
      titulo={item.titulo}
      autor={item.autor}
      descricao={item.descricao}
      imagem={item.imagem}
      
      onPress={() => console.log('Livro pressionado:', item.titulo)}
    />
    
  );

  return (

    <FlatList
      data={books}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={{maxHeight:'63%'}}
    />

  );
};

export default BookList;

