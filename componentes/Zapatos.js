import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
const Zapatos = ({coin}) => {
  const navigation=useNavigation()
    return (
      <View style={styles.caja}>
      	<View style={styles.separador}>
              <Text style={styles.id}>
                  {coin.id}
              </Text>
              <Text style={styles.marca}>
                  {coin.Marca}
              </Text>
              <Text style={styles.color}>
              { coin.Color.map((item, key)=>(
            <Text key={key} > { item } </Text>)
          )}
              </Text>
              <Text style={styles.costo}>
                  ${coin.Costo[0].proveedor}
              </Text>
              <Text style={styles.costo}>
                  ${coin.Costo[0].mayoreo}
              </Text>
              <Text style={styles.costo}>
                  ${coin.Costo[0].menudeo}
              </Text>
              <Text style={styles.tam}>
                  {coin.Tamanio}
              </Text>
              <Text style={styles.color}>
                  {coin.Tipo}
              </Text>
              <Text style={styles.numero}>
              { coin.Num_zapato.map((item, key)=>(
            <Text key={key} > { item } </Text>)
          )}</Text>
              <Text style={styles.precio}>
                  ${coin.Precio}
              </Text>
              <Text style={styles.material}>
                  {coin.Material}
              </Text>
              <Text style={styles.edit}>
                  <Button title="Edit" onPress={() => navigation.navigate('Update', { id: coin._id })}/>
              </Text>
        </View>
      </View>
    );
  }
const styles = StyleSheet.create({
	caja:{
    backgroundColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 0,
    justifyContent: 'space-between', 
    margin: 0,
    paddingRight: 100  
  },
  fuente:{
    color: 'white',
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
  borderColor: 'white'  
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
});
export default Zapatos;