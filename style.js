import { StyleSheet } from "react-native";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";

const style=StyleSheet.create({
    container: {
      flex: 5,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    container2:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent: 'center'
    },
    jarak:{
      marginBottom:10,
      fontSize:20,
      color:'#4f4f4f'
    },
    jarakBtn:{
      marginRight:10,
      marginLeft:10
    },
    bagian1:{
      flex:1,
      flexDirection:'row',
      backgroundColor:'#3e963e',
    },
    bagian11:{
      flex:1,
      backgroundColor:'#29663b'
    },
    bagian12:{
      flex:5,
      backgroundColor:'#29663b'
    },

    bagian2:{
      flex:5,
      flexDirection:"column"
    },

    bagianBawah:{
      flexDirection:"row",
      backgroundColor:'white'
    },

    TextStyle: {
      textAlign: 'center',
      fontSize: 40,
      marginTop:20
    },

    tulisanku:{
      marginTop:15,
      paddingVertical:8,
      borderWidth:3,
      fontSize:20
    },
  
  });

  export {style};