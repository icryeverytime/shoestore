import React, {useEffect, useState} from 'react';
import {View,Text,FlatList,StyleSheet,StatusBar,TextInput,Alert,Button,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Zapatos from './Zapatos';
const Home  =({navigation}) =>{
  const [zapatos, setZapatos] = useState([])
  const [search,setSearch] = useState('')
  const cargarDatos = async () => {
      const resp = await fetch("http://25.83.103.75:3500/zapatos/zapato");
      const datos = await resp.json()
      setZapatos(datos)
  }
useEffect(()=>{
  cargarDatos();
},[]);
    return (
      <View style={styles.caja}>
      <StatusBar backgroundColor='orange'/>
      <View style={styles.header}>
          <Text style={styles.fuente}>
            Zapateria
          </Text>
          <TextInput 
              style={styles.searchInput}
              placeholderTextColor='lightgray'
              placeholder="Buscar Zapateria"
              onChangeText={text => setSearch(text)}
          />
      </View>
      <View style={styles.padding}>
      <Button
        title="Insertar Zapatos"
        onPress={() => navigation.navigate('Insert')}
        style={styles.padding}
      />
      </View>
      <ScrollView horizontal={true} contentContainerStyle={styles.sub}>
      <View style={styles.separador}>
              <Text style={styles.id}>
                  Id
              </Text>
              <Text style={styles.marca}>
                  Marca
              </Text>
              <Text style={styles.color}>
                  Color
              </Text>
              <Text style={styles.costo}>
                  Proveedor
              </Text>
              <Text style={styles.costo}>
                  Mayoreo
              </Text>
              <Text style={styles.costo}>
                  Menudeo
              </Text>
              <Text style={styles.tam}>
                  Tam
              </Text>
              <Text style={styles.color}>
                  Tipo
              </Text>
              <Text style={styles.numero}>
                Numero
              </Text>
              <Text style={styles.precio}>
                  Precio
              </Text>
              <Text style={styles.material}>
                  Material
              </Text>
              <Text style={styles.edit}>
                  Edit
              </Text>
        </View>
        <FlatList
          style={styles.listas}
          data={zapatos.filter(zapatos=> zapatos.Marca.toLowerCase().includes(search))}
          renderItem={({item})=>{
          return <Zapatos coin={item}/>
        }}
        />
        </ScrollView>
      </View> 
    )
  }
const styles = StyleSheet.create({
  caja:{
    backgroundColor: 'black',
    alignItems: 'center',
    flex: 1,
  },
  precio:{
    color: 'white',
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: 75,
  },
  material:{
    color: 'white',
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: 100,
  },
  sub:{
    flexDirection: 'column',
  },
  padding:{
    marginBottom: 20,
  },
  edit:{
    color: 'white',
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: 50,
  },
  fuente:{
    color: 'orange',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800' 
  },
  listas:{
    width: '95%',
    marginTop: 0,
    marginBottom: 0,
  },
  header:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      marginBottom: 20,
  },
  searchInput:{
    color: 'orangered',
    borderBottomColor: 'orange',
    borderBottomWidth: 2,
    width: '40%',
    textAlign: 'right',
  },
  id:{
    color: 'white',
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: 55,
  },
  marca:{
    color: 'white',
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: 125,
  },
  color:{
    color: 'white',
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: 275,
  },
  numero:{
    color: 'white',
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: 250,
  },
  costo:{
    color: 'white',
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: 100,
  },
  tam:{
    color: 'white',
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: 100,
  },
  fuentes:{
    color: 'white',
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  separador:{
    flexDirection:'row',
    margin: 0
  },
  image:{
  	width: 30,
  	height: 30,
  },
  symbol:{
  	textAlign: 'center',
  	color: 'gray',
  	fontSize: 10,
  },
  separador:{
    flexDirection: 'row',
    
  },
  symbol:{
    color: 'gray',
    textTransform:'uppercase',
  },
  names:{
    marginLeft: 20,
  },
  pricecolor:{
    color: 'aqua',
    textAlign: 'right',
  },
  up:{
    color: 'green',
  },
  down:{
    color: 'red',
  }
})
export default Home;