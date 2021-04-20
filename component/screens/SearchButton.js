import React from 'react'
import {StyleSheet,Text,View,Dimensions,TouchableOpacity,TextInput} from 'react-native'
import { Container, Header, Left, Body, Right, Button,  Title ,Icon} from 'native-base';
const WIDTH =Dimensions.get('window').width
export const SearchButton = function(props){
    return (
        <TouchableOpacity onPress={()=>{}} style={styles.container}>
       <View style={styles.leftCol}>
    
       </View>
       <View style={styles.centerCol}>
        <TextInput placeholder="search here" style={{fontFamily:'sans-serif-thin',fontSize:21,color:'#545454'}}/>
         
       </View>
       <View style={styles.rightCol}>
       <Icon name='search' size={25} style={{color:'black'}} style={{alignSelf:'center'}} />
       </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        zIndex:9,
        position:'absolute',
        flexDirection:'row',
        width:(WIDTH-0),
        height:60,
        top:0,
        left:0,
        right:10,
        borderRadius:2,
        backgroundColor:'white',
        alignItems:'center',
        shadowColor:'#000000',
        elevation:7,
        shadowRadius:5,
        shadowOpacity:1.0

    },
    leftCol:{
        flex:1,
        alignItems:'center'
    },
    centerCol:{
        flex:4
    },
    rightCol:{
  flex:1,
  borderLeftWidth:1,
  borderColor:'#ededed'
    }
})