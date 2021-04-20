/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import axios from 'axios'
import {SearchCountry} from './SearchCountry'
const WIDTH =Dimensions.get('window').width
const HEIGHT =Dimensions.get('window').height
class Test extends React.Component{
  constructor(props){
    super(props)
    this.state={
      countries: [],
      isLoading:false,
      //refreshing: true
    }
  }

  componentDidMount(){
 // this.fetchCountry()
  }




  render()
  {
    //console.log('contries',this.state.countries)
    return(
      <View  >
        <Text>SEARCH MAP</Text>
      </View>
    )
  }
}
export default Test
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});


