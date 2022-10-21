import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { style } from './style';


const Setting = ({navigation}) => {
    return (
        <View style={style.bagian2}>
        <View style={style.container}>
            <Text style={style.jarak}>Setting Screen</Text>
            <View style={style.container2}>
        <View style={{marginRight:20,marginLeft: 10,marginTop: 10,borderRadius:100,overflow:'hidden',borderWidth:1,paddingTop:10,paddingBottom:10,backgroundColor:'#FF1493',borderColor:'#FF1493'}}>
        <Button color="#FF1493" title='Home Screen'
            onPress={()=>navigation.navigate('Home')}/>
        </View>
        <View style={{marginRight:20,marginLeft: 10,marginTop: 10,borderRadius:100,overflow:'hidden',borderWidth:1,paddingTop:10,paddingBottom:10,backgroundColor:'#FF0000',borderColor:'#FF0000'}}>
        <Button  color="#FF0000" title='About'
            onPress={()=>navigation.navigate('About')}/>
        </View>
        <View style={{marginRight:20,marginLeft: 10,marginTop: 10,borderRadius:100,overflow:'hidden',borderWidth:1,paddingTop:10,paddingBottom:10,backgroundColor:'#4169E1',borderColor:'#4169E1'}}>
        <Button style={style.jarakBtn} color="#4169E1" title='Contact'
            onPress={()=>navigation.navigate('Contact')}/>
        </View>
        <View style={{marginRight:20,marginLeft: 10,marginTop: 10,borderRadius:100,overflow:'hidden',borderWidth:1,paddingTop:10,paddingBottom:10,backgroundColor:'#A52A2A',borderColor:'#A52A2A'}}>
        <Button color="#A52A2A" title='Tools'
            onPress={()=>navigation.navigate('Tools')}/>
        </View>
        </View>
        </View>
        </View>
        );
};
export default Setting;