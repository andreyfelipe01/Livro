import React, { useEffect , useState} from "react";
import { Text, View, Modal, Image , StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import imagemLivro1 from '../img/Aventura.jpg';
import imagemLivro2 from '../img/Aventura.jpg';
import imagemLivro3 from '../img/Aventura.jpg';

import BookList from "../components/BookList";

const livros = [
  { id: '1', titulo: 'Livro 1', autor:'irineu', descricao:'raoadwofugwdasdasssssssssssssssssssssssssssssssssssssssssssssssssssssssdpfugeadiweufhedfo', imagem: imagemLivro1 },
  { id: '2', titulo: 'Livro 2', imagem: imagemLivro2 },
  { id: '3', titulo: 'Livro 3', imagem: imagemLivro3 },
];

export default function Login({navigation}){
    useEffect(()=>{
        navigation.getParent().setOptions({tabBarStyle:{display:'none'}})
    },[])

    const [visivel, setVisivel] = useState(true);
    const [nome,  setNome] = useState(true);
    const [pesquisa, setPesquisa] = useState('');

    const livrosFiltrados = livros.filter(livro => livro.titulo.toLowerCase().includes(pesquisa.toLowerCase()));
    return(
      <ScrollView>
        <View >
          
          <SafeAreaView>
            <View style={estilos.container}>
                <View style={estilos.icones}> 
                    <FontAwesome5  style={estilos.icon} name="user-alt" size={20} color="black" />
                    <FontAwesome name="bars" size={24} color="black" />
                </View>
                <View style={estilos.texto}>
                    <Text style={estilos.texto2}>Olá, {nome} o que você gostaria de aprender ?</Text>
                </View>                      
                <View style={estilos.sectionStyle}>
                    <Ionicons name="search" size={24} color="black" />
                <View style={{width:'80%',}}>
                    <TextInput
                        placeholder="Procurar" 
                        underlineColorAndroid="transparent"  
                        onChangeText={text => setPesquisa(text)}


                    />
                </View>
                
                </View>

            </View>
        </SafeAreaView>
            <Modal
              animationType='none'
              transparent={false}
              visible={visivel}
            >
            <View style={estilos.container}>
              <View style={estilos.imagemview}>
                <Image
                  source={require('../icon/informatica.png')}
                  style={estilos.img}
                />
              </View>
              <Text style={estilos.textoo}>Como quer ser chamado ?</Text>
              <View>
                <Text style={estilos.textsenha}>Seu Nome</Text>
                <View>
                  <TextInput
                    placeholder='Ex: Andrey'
                    style={estilos.input}
                    onChangeText={setNome}
                  />
                </View>
                <TouchableOpacity style={estilos.botao} 
                  onPress={()=>{
                    navigation.getParent().setOptions({
                    
                    tabBarStyle:{
                    backgroundColor: '#0ca788',
                    paddingLeft:40,
                    paddingRight:40,
                    height:'9%',
                    alignItems:'center',
                    
                    }})
                    setVisivel(false)}}
                 >
                  <Text style={estilos.textbotao}>Entrar</Text>
                </TouchableOpacity>
              </View>

            </View>

            </Modal>
           
            <BookList books={livrosFiltrados} />

        </View>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
  container:{

  },
  imagemview:{
    alignSelf:'center',
    padding:50
  },
  img:{
    width:150,
    height:150
  },
  textoo:{
    fontWeight:'bold',
    fontSize:27,
    marginLeft:15,
    paddingBottom:20
  },
  input:{
    borderRadius:2,
    borderWidth:2,
    width:'90%',
    height:35,
    paddingLeft:14,
    alignSelf:'center',
    borderColor:'#d2d2d2',
  },
  textsenha:{
    padding:9,
    fontWeight:'bold',
    paddingLeft:30,
  },
  botao:{
    fontWeight:'bold',
    backgroundColor:'#909090',
    borderRadius:2,
    width:'90%',
    height:35,
    alignSelf:'center',
    marginTop:10,
    justifyContent:'center',
    
  },
  textbotao:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
  },
  container:{

  },
  icones:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      padding:20

  },
  icon:{
      borderRadius: 99, 
      padding:10, 
      backgroundColor:'#d1d1d1',


      
  },
  texto:{
      marginLeft:'10%'
  },
  texto2:{
      width:'40%',
      fontWeight:'bold',
      fontSize:22
  },
  sectionStyle: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderWidth: 2,
      borderColor: '#d2d2d2',
      borderRadius: 7,
      alignItems: 'center',
      justifyContent:'space-evenly',
      height:40,
      width:'70%',
      alignSelf:'center',
      marginTop:10
  },
  imageStyle: {
      height: 20,
      width: 20
  },
})