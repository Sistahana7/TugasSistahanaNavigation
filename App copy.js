import React from "react";
import {ImageBackground, View, Text, Image, TextInput, StyleSheet } from "react-native";
import foto from './senyum.png';
import foto2 from './microphone.png';
import foto3 from './photo-camera.png';
import foto4 from './attachment.png';
import foto5 from './back.png';
import foto6 from './list.png';
import foto7 from './phone-call.png';
import foto8 from './video-camera.png';
import foto9 from './pp.jpeg';
import { Component } from "react/cjs/react.production.min";
import { style } from "./style";

const App = () => {
  return(
    <ImageBackground source={require('./bg.jpeg')} style={{width: '100%', height: '100%'}}>
    <View style={style.container}>
      <View style={style.bagian1}>
        <Photo5/>
        <Photo9/>
        <Teks>Malinda Mahanani</Teks>
        <Photo8/>
        <Photo7/>
        <Photo6/>
     </View>

    <View style={style.bagian2}>
        <Text style={{
          fontSize:20,          
          borderRadius:20,
          color:"black",
          fontWeight:"10",
          backgroundColor:"#cafcc7",
          marginLeft:160,
          marginTop:50,
          paddingLeft:10,
          paddingTop:5,
          width:240,
          height:35}}>Selamat Pagi Malinda</Text>

<Text style={{
          fontSize:20,          
          borderRadius:20,
          color:"black",
          fontWeight:"10",
          backgroundColor:"#cafcc7",
          marginLeft:15,
          paddingLeft:10,
          paddingTop:5,
          width:80,
          height:35}}>Y</Text>

<Text style={{
          fontSize:20,          
          borderRadius:20,
          color:"black",
          fontWeight:"10",
          backgroundColor:"#cafcc7",
          marginLeft:220,
          paddingLeft:10,
          paddingTop:5,
          width:180,
          height:35}}>Enggak Mandi</Text>

<Text style={{
          fontSize:20,          
          borderRadius:20,
          color:"black",
          fontWeight:"10",
          backgroundColor:"#cafcc7",
          marginLeft:15,
          paddingLeft:10,
          paddingTop:5,
          width:150,
          height:35}}>G, Maless</Text>
    </View>

      <View style={style.bagianBawah}>
        <Photo/>
        <TextInput style={{
          backgroundColor: 'white',
          borderColor:'grey',
          borderWidth:2,
          marginBottom:6,
          marginTop:5,
          borderRadius:20,
          width:282,
          height:40
        }}>  Ketik Pesan   
        </TextInput>
        <Photo4/>
        <Photo3/>
        <Photo2/>
      </View>
     </View>
    </ImageBackground>
  );
}

const Teks = () => {
  return(
    <Text 
    style={{
      fontSize:20,
      color:"white",
      marginTop:15,
      marginLeft:15,
      fontWeight:"bold"
    }}
    >Malinda Mahanani</Text>
  )
}

const Teks2 = () => {
  return(
    <Text 
    style={{
      fontSize:10,
    }}
    >Selamat Pagi</Text>
  )
}

const Photo = () => {
  return(
    <Image source={foto} style={{
    flexDirection:"row",width:25, height:25,marginTop:15,marginLeft:10,marginRight:5}}/>
  )
}

const Photo2 = () => {
  return(
    <Image source={foto2} style={{
    flexDirection:"row",width:25, height:25,marginTop:15,marginLeft:5}}/>
  )
}

const Photo3 = () => {
  return(
    <Image source={foto3} style={{
    flexDirection:"row",width:25, height:25,marginTop:15,marginLeft:5}}/>
  )
}

const Photo4 = () => {
  return(
    <Image source={foto4} style={{
    flexDirection:"row",width:25, height:25,marginTop:15,marginLeft:5}}/>
  )
}

const Photo5 = () => {
  return(
    <Image source={foto5} style={{
    flexDirection:"row",width:25, height:25,marginTop:18,marginLeft:5}}/>
  )
}

const Photo6 = () => {
  return(
    <Image source={foto6} style={{
    flexDirection:"row",width:20, height:20,marginTop:16,marginLeft:10}}/>
  )
}

const Photo7 = () => {
  return(
    <Image source={foto7} style={{
    flexDirection:"row",width:18, height:18,marginTop:16,marginLeft:15}}/>
  )
}

const Photo8 = () => {
  return(
    <Image source={foto8} style={{
    flexDirection:"row",width:25, height:25,marginTop:15,marginLeft:55}}/>
  )
}

const Photo9 = () => {
  return(
    <Image source={foto9} style={{
    flexDirection:"row",width:40,borderRadius:100, height:40,marginTop:10,marginLeft:5}}/>
  )
}

const Tampilan =() => {
  return(
    <View style={{width:100, height:100, backgroundColor:'red'}}/>
  )
}
class Tulisan extends Component{
  render (){
    return(
      <Text>Tampilan dari Komponen Class</Text>
    
    )
  }
}

class Photoku extends Component {
  render () {
    return (
      <Image source={{uri:'https://placeimg.com/100/100/tech'}} style={{width:200,height:200}}/>
    )
    
  }
}



export default App;