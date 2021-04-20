import React from 'react'
import {StyleSheet,Text,View,Dimensions,TouchableOpacity,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
const WIDTH =Dimensions.get('window').width
const HEIGHT =Dimensions.get('window').height
export const CurrentLocationButton = function(props){
    const cb=props.cb?props.cb:() =>console.log('no pressed')
    const bottom =props.bottom? props.bottom:100
    return (
       <View style={[styles.container,{top:HEIGHT - bottom}]}>
      <Icon name='my-location' size={20} style={{color:'black'}} style={{alignSelf:'center'}} onPress={()=>{cb()}} />
       </View>
    )
}

const styles=StyleSheet.create({
    container:{
        zIndex:9,
        position:'absolute',
        width:40,
        height:40,
        backgroundColor:'#fff',
        right:WIDTH-70,
        borderRadius:50,
        shadowColor:'#000000',
        elevation:7,
        shadowRadius:5,
        shadowOpacity:1.0,
        justifyContent:'space-around',
        alignItems:'center'

    }
})