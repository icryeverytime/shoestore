import { ThemeProvider } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View,Text,FlatList,StyleSheet,StatusBar,TextInput,Alert,Button,ScrollView} from 'react-native';
const Update  =({navigation,route}) =>{
  const [zapatos, setZapatos] = useState([])
  const [id,setId] = useState('')
  const [marca,setMarca] = useState('')
  const [color,setColor]=useState('')
  const [proveedor,setProveedor]=useState('')
  const [mayoreo,setMayoreo]=useState('')
  const [menudeo,setMenudeo]=useState('')
  const [tamanio,setTamanio]=useState('')
  const [tipo,setTipo]=useState('')
  const [num1,setNum1]=useState('')
  const [num2,setNum2]=useState('')
  const [num3,setNum3]=useState('')
  const [num4,setNum4]=useState('')
  const [num5,setNum5]=useState('')
  const [num6,setNum6]=useState('')
  const [num7,setNum7]=useState('')
  const [num8,setNum8]=useState('')
  const [num9,setNum9]=useState('')
  const [num10,setNum10]=useState('')
  const [precio,setPrecio]=useState('')
  const [material,setMaterial]=useState('')
  const [id1,setId1]=useState('white')
  const [marca1,setMarca1]=useState('white')
  const [color1,setColor1]=useState('white')
  const [proveedor1,setProveedor1]=useState('white')
  const [mayoreo1,setMayoreo1]=useState('white')
  const [menudeo1,setMenudeo1]=useState('white')
  const [tamanio1,setTamanio1]=useState('white')
  const [tipo1,setTipo1]=useState('white')
  const [precio1,setPrecio1]=useState('white')
  const [material1,setMaterial1]=useState('white')
  const cargarDatos = async () => {
    const resp = await fetch("http://25.83.103.75:3500/zapatos/buscar/"+route.params.id);
    const datos = await resp.json()
    console.log(datos[0])
    setId(datos[0].id)
    setMarca(datos[0].Marca)
    setColor(JSON.stringify(datos[0].Color))
    setProveedor(JSON.stringify(datos[0].Costo[0].proveedor))
    setMayoreo(JSON.stringify(datos[0].Costo[0].mayoreo))
    setMenudeo(JSON.stringify(datos[0].Costo[0].menudeo))
    setTamanio(datos[0].Tamanio)
    setNum1(JSON.stringify(datos[0].Num_zapato[0]))
    setNum2(JSON.stringify(datos[0].Num_zapato[1]))
    setNum3(JSON.stringify(datos[0].Num_zapato[2]))
    setNum4(JSON.stringify(datos[0].Num_zapato[3]))
    setNum5(JSON.stringify(datos[0].Num_zapato[4]))
    setNum6(JSON.stringify(datos[0].Num_zapato[5]))
    setNum7(JSON.stringify(datos[0].Num_zapato[6]))
    setNum8(JSON.stringify(datos[0].Num_zapato[7]))
    setNum9(JSON.stringify(datos[0].Num_zapato[8]))
    setNum10(JSON.stringify(datos[0].Num_zapato[9]))
    setPrecio(JSON.stringify(datos[0].Precio))
    setMaterial(datos[0].Material)
    setTipo(JSON.stringify(datos[0].Tipo))
}
useEffect(()=>{ 
    cargarDatos();
},[]);
async function handledelete()
{
    const requestOption={
        method: 'GET'
      }
      try{
          const url='http://25.83.103.75:3500/zapatos/delete/'+route.params.id
          console.log(url)
        const response=await fetch(
          url,requestOption)
          const respuesta=await response.json();
          const message=respuesta.msg
          console.log(message)
          if(message==="Zapato insertado")
          {
            
            Alert.alert(
              "Succes",
              "Deleted succesfully",
              [
                { text: "OK", onPress: () => navigation.replace('Home')}
              ]
            );

          }
          else{
            Alert.alert(
              "Unsuccesfull",
              "Deleted unsuccesfully",
              [
                { text: "OK", onPress: () => console.log("pressed")}
              ]
            );
          }
      }
      catch(error)
      {
        console.log(error)
      }
}
  async function handlesubmit(){
    let aux=0;
    let aux2=0;
    if(id==='')
    {
      setId1('red')
      aux=1
    }
    if(marca==='')
    {
      setMarca1('red')
      aux=1
    }
    if(color==='')
    {
      setColor1('red')
      aux=1
    }
    if(proveedor==='')
    {
      setProveedor1('red')
      aux=1
    }
    if(mayoreo==='')
    { 
      setMayoreo1('red')
      aux=1
    }
    if(menudeo==='')
    {
      setMenudeo1('red')
      aux=1
    }
    if(tamanio==='')
    {
      setTamanio1('red')
      aux=1
    }
    if(tipo==='')
    {
      setTipo1('red')
      aux=1
    }
    if(precio==='')
    {
      setPrecio1('red')
      aux=1
    }
    if(material==='')
    {
      setMaterial1('red')
      aux=1
    }
    if(aux==1)
    {
      Alert.alert(
        "Invalid submission",
        "Please fill out the form",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      ); 
    }
    else{
      const text='{"proveedor":'+proveedor+',"mayoreo":'+mayoreo+',"menudeo":'+menudeo+'}'
      const cost=JSON.parse(text);
      let array=[]
      if(num1!="")
      {
        array.push(num1)
      }
      if(num2!="")
      {
        array.push(num2)
      }
      if(num3!="")
      {
        array.push(num3)
      }
      if(num4!="")
      {
        array.push(num4)
      }
      if(num5!="")
      {
        array.push(num5)
      }
      if(num6!="")
      {
        array.push(num6)
      }
      if(num7!="")
      {
        array.push(num7)
      }
      if(num8!="")
      {
        array.push(num8)
      }
      if(num9!="")
      {
        array.push(num9)
      }
      if(num10!="")
      {
        array.push(num10)
      }
        const requestOption={
          method: 'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({id: id,Marca: marca,Color: color,Costo: cost,Tamanio:tamanio,Num_zapato:array,Precio:precio,Material:material})
        }
        try{
            const url='http://25.83.103.75:3500/zapatos/update/'+route.params.id
            console.log(url)
          const response=await fetch(
            url,requestOption)
            const respuesta=await response.json();
            const message=respuesta.msg
            console.log(message)
            if(message==="Zapato insertado")
            {
              
              Alert.alert(
                "Succes",
                "Updated succesfully",
                [
                  { text: "OK", onPress: () => navigation.replace('Home')}
                ]
              );

            }
            else{
              Alert.alert(
                "Unsuccesfull",
                "Inserted unsuccesfully",
                [
                  { text: "OK", onPress: () => console.log("pressed")}
                ]
              );
            }
        }
        catch(error)
        {
          console.log(error)
        }
    
    }
  }
    return (
      <View style={styles.main}>
      <ScrollView contentContainerStyle={styles.container}>
      <TextInput  style={[styles.searchInput,{borderColor: id1}]}
        placeholderTextColor='gray'
        placeholder="Insertar id"
        onChangeText={text=>{setId(text); setId1('white')}}
        value={id} />
        <TextInput style={[styles.searchInput,{borderColor: marca1}]} 
          placeholderTextColor='gray'
          placeholder="Insertar marca"
          onChangeText={text=>{setMarca(text);setMarca1('white')}}
          value={marca}
        />
        <TextInput style={[styles.searchInput,{borderColor: color1}]} 
          placeholderTextColor='gray'
          placeholder="Insertar color"
          onChangeText={text=>{setColor(text); setColor1('white')}}
          value={color}
        />
        <TextInput style={[styles.searchInput,{borderColor: proveedor1}]} 
          placeholderTextColor='gray'
          placeholder="Insertar proveedor"
          onChangeText={text=>{setProveedor(text); setProveedor1('white')}}
          value={proveedor}
        />
        <TextInput style={[styles.searchInput,{borderColor: mayoreo1}]} 
          placeholderTextColor='gray'
          placeholder="Insertar mayoreo"
          onChangeText={text=>{setMayoreo(text);setMayoreo1('white')}}
          value={mayoreo}
        />
        <TextInput style={[styles.searchInput,{borderColor: menudeo1}]} 
          placeholderTextColor='gray'
          placeholder="Insertar menudeo"
          onChangeText={text=>{setMenudeo(text); setMenudeo1('white')}}
          value={menudeo}
        />
        <TextInput style={[styles.searchInput,{borderColor: tamanio1}]} 
          placeholderTextColor='gray'
          placeholder="Insertar tamaño"
          onChangeText={text=>{setTamanio(text);setTamanio1('white')}}
          value={tamanio}
        />
        <TextInput style={[styles.searchInput,{borderColor: tipo1}]} 
          placeholderTextColor='gray'
          placeholder="Insertar tipo"
          onChangeText={text=>{setTipo(text);setTipo1('white')}}
          value={tipo}
        />
        <TextInput style={[styles.searchInput,{borderColor: 'white'}]} 
          placeholderTextColor='gray'
          placeholder="Insertar numero1"
          onChangeText={text=>setNum1(text)}
          value={num1}
        />  
        <TextInput style={[styles.searchInput,{borderColor: 'white'}]} 
          placeholderTextColor='gray'
          placeholder="Insertar numero 2"
          onChangeText={text=>setNum2(text)}
          value={num2}
        />
        <TextInput style={[styles.searchInput,{borderColor: 'white'}]} 
          placeholderTextColor='gray'
          placeholder="Insertar numero 3"
          onChangeText={text=>setNum3(text)}
          value={num3}
        />
        <TextInput style={[styles.searchInput,{borderColor: 'white'}]} 
          placeholderTextColor='gray'
          placeholder="Insertar numero 4"
          onChangeText={text=>setNum4(text)}
          value={num4}
        />
        <TextInput style={[styles.searchInput,{borderColor: 'white'}]} 
          placeholderTextColor='gray'
          placeholder="Insertar numero 5"
          onChangeText={text=>setNum5(text)}
          value={num5}
        />
        <TextInput style={[styles.searchInput,{borderColor: 'white'}]} 
          placeholderTextColor='gray'
          placeholder="Insertar numero 6"
          onChangeText={text=>setNum6(text)}
          value={num6}
        />
        <TextInput style={[styles.searchInput,{borderColor: 'white'}]} 
          placeholderTextColor='gray'
          placeholder="Insertar numero 7"
          onChangeText={text=>setNum7(text)}
          value={num7}
        />
        <TextInput style={[styles.searchInput,{borderColor: 'white'}]} 
          placeholderTextColor='gray'
          placeholder="Insertar numero 8"
          onChangeText={text=>setNum8(text)}
          value={num8}
        />
        <TextInput style={[styles.searchInput,{borderColor: 'white'}]} 
          placeholderTextColor='gray'
          placeholder="Insertar numero 9"
          onChangeText={text=>setNum9(text)}
          value={num9}
        />
        <TextInput style={[styles.searchInput,{borderColor: 'white'}]} 
          placeholderTextColor='gray'
          placeholder="Insertar numero 10"
          onChangeText={text=>setNum10(text)}
          value={num10}
        />
        <TextInput style={[styles.searchInput,{borderColor: precio1}]} 
          placeholderTextColor='gray'
          onChangeText={text=>{setPrecio(text);setPrecio1('white')}}
          placeholder="Insertar precio"
          value={precio}
        />
        <TextInput style={[styles.searchInput,{borderColor: material1}]} 
          placeholderTextColor='gray'
          placeholder="Insertar material"
          onChangeText={text=>{setMaterial(text);setMaterial1('white')}}
          value={material}
        />
        <View style={styles.button}>
        <Button style={styles.button} title="Update"
          onPress={() => handlesubmit()}
        />
        </View>
        <View style={styles.delete}>
        <Button style={styles.delete} title="Delete"
          onPress={() => handledelete()}
        />
        </View>
      </ScrollView>
      </View> 
    )
  }
  const styles=StyleSheet.create({
      main:{
          backgroundColor: 'black',
        flex: 1,
        width: '100%',
      },
      container:{
       width: '100%',
       alignItems: 'center',
      },
      text:{
          color: 'white'
      },
      searchInput:{
          marginTop: 20,
        color: 'white',
        borderWidth: 2,
        width: 200,
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
      },
      delete:{
          marginTop: 10,
          backgroundColor: 'red',
          color: 'red'
      },
      button:{
          marginTop: 10
      }
  })
  export default Update;