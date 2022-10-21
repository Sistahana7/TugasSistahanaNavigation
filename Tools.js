import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { style } from './style';

const Tools = ({navigation}) => {
    return (
        <View style={style.bagian2}>
        <View style={style.container}>
            <Text style={style.jarak}>Galeri Screen</Text>
        <View style={{marginRight:10,marginLeft: 10,marginTop: 10,borderRadius:100,overflow:'hidden',borderWidth:1,paddingTop:10,paddingBottom:10,backgroundColor:'#FF1493',borderColor:'#FF1493'}}>
        <Button color="#FF1493" title='Home'
            onPress={()=>navigation.navigate('Home')}/>
        </View>
        <View style={{marginRight:10,marginLeft: 10,marginTop: 10,borderRadius:100,overflow:'hidden',borderWidth:1,paddingTop:10,paddingBottom:10,backgroundColor:'#FF0000',borderColor:'#FF0000'}}>
        <Button  color="#FF0000" title='About'
            onPress={()=>navigation.navigate('About')}/>
        </View>
        <View style={{marginRight:10,marginLeft: 10,marginTop: 10,borderRadius:100,overflow:'hidden',borderWidth:1,paddingTop:20,paddingBottom:20,backgroundColor:'#4169E1',borderColor:'#4169E1'}}>
        <Button style={style.jarakBtn} color="#4169E1" title='Contact'
            onPress={()=>navigation.navigate('Contact')}/>
        </View>
        <View style={{marginRight:10,marginLeft: 10,marginTop: 10,borderRadius:100,overflow:'hidden',borderWidth:1,paddingTop:15,paddingBottom:15,backgroundColor:'#8A2BE2',borderColor:'#8A2BE2'}}>
        <Button style={style.jarakBtn} color="#8A2BE2" title='Galeri'
            onPress={()=>navigation.navigate('Galeri')}/>
        </View>
        </View>
        </View>
        );
};
export default Tools;