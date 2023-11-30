import React, {useContext} from "react";
import { Text, View , TouchableOpacity, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import AuthContext from "../context/contexto";

export default function Profile(){
  const{nome} = useContext(AuthContext)
  return(
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.icon}>
          <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
          <AntDesign name="questioncircle" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.icon2}>
          <FontAwesome  name="user-circle" size={80} color="black" />
        </View>
        <View style={styles.botao}>
          <TouchableOpacity>
            <Text style={{color:'white', fontSize:13, textAlign:'center'}}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.conteudoo}>
          <View style={styles.conteudo}>
            <FontAwesome name="user" size={24} color="black" />
            <Text style={styles.texto}>{nome}</Text>
            
          </View>
          <View style={styles.conteudo}>
            <FontAwesome name="user" size={24} color="black" />
            <Text style={styles.texto}>Nome de usuário</Text>
          </View>
          <View style={styles.conteudo}>
            <View style={{flexDirection: 'row', alignItems:'center', gap:6}}>
              <Ionicons name="settings" size={24} color="black" />
              <Text style={styles.texto}>Configurações</Text>
            </View>
            <TouchableOpacity>
            <AntDesign  name="right" size={15} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create ({
  container:{

  },
  icon:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10
    
  },
  icon2:{
    alignItems:'center',
    marginTop:'30%'
    
  },
  botao:{
    backgroundColor: '#bfbfbf' ,
    width: '35%',
    height: 35,
    justifyContent: 'center',
    borderRadius: 20,
    textAlign:'center',
    alignSelf:'center',
    marginTop:14    
  },
  conteudoo:{
    alignSelf:'center',
    marginTop:'9%',
  },
  conteudo:{
    flexDirection:'row',
    alignItems:'center',
    gap:6,
    borderBottomWidth:2,
    borderColor:'black',
    padding:10
  },
  texto:{
    width:155,
  }

})