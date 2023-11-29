import React from 'react';
import { FlatList } from 'react-native';
import Item from './Item';

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
    />
  );
};

export default BookList;