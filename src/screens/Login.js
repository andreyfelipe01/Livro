import React, { useEffect , useState, useContext} from "react";
import { Text, View, Modal, Image , StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import imagemLivro1 from '../img/livro1.jpg';
import imagemLivro2 from '../img/livro2.jpg';
import imagemLivro3 from '../img/livro3.jpg';

import BookList from "../components/BookList";
import AuthContext from "../context/contexto";

const livros = [
  { id: '1', titulo: 'Introdução à Informática.',autor: ' Daniel Hayashida Simão',
   descricao:'Hoje em dia o mundo é praticamente todo informatizado. As tarefas do cotidiano, as negociações comerciais, os trabalhos e as pesquisas escolares são apenas alguns exemplos da facilidade que o uso do computador oferece. Os computadores são muito utilizados devido a sua ampla empregabilidade e seu custo acessível.'
  , imagem: imagemLivro1 },
  { id: '2', titulo: 'Informática: Conceitos e aplicações ',autor: '  Marcelo Marçula'
  , descricao:'Este livro é indicado como material de apoio aos cursos de Informática e disciplinas afins dos demais cursos. Pode ser utilizado por professores (como uma diretriz básica para a disciplina), alunos (e de pesquisa para os principais conceitos) e profissionais de todas as áreas, que necessitem adquirir conhecimentos sobre informática.'
  ,imagem: imagemLivro2 },
  { id: '3', titulo: 'Informática de A a Z',autor: ' João Paulo Colet Orso , Luiz Rezende ',
   descricao:'A OBRA A Obra Informática de A a Z tem como objetivo apresentar os principais tópicos de Informática e Tecnologia da Informação abordados em provas de concursos públicos, de maneira direta e objetiva, sem cometer o erro da superficialidade ou do exagero. Os primeiros capítulos abordam as concepções do mundo do Hardware e do Software, programas de escritório, editores de textos, planilhas e apresentações, sistemas operacionais, redes e segurança da informação. '
  ,imagem: imagemLivro3 },
];


export default function Login({navigation}){
    useEffect(()=>{
        navigation.getParent().setOptions({tabBarStyle:{display:'none'}})
    },[])

    const [visivel, setVisivel] = useState(true);
    const [nome,  setNome] = useState('');
    const [pesquisa, setPesquisa] = useState('');
    const {setNomeContexto} = useContext(AuthContext)

    const livrosFiltrados = livros.filter(livro => livro.titulo.toLowerCase().includes(pesquisa.toLowerCase()));
    return(

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
                    value={nome}
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
                    setNomeContexto(nome)
                    setVisivel(false)}}
                 >
                  <Text style={estilos.textbotao}>Entrar</Text>
                </TouchableOpacity>
              </View>
            </View>
            </Modal>
            <BookList books={livrosFiltrados} />
            </View>

     
        
        
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
      marginTop:10,
      marginBottom:20
  },
  imageStyle: {
      height: 20,
      width: 20
  },
})