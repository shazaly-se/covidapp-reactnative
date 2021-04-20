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
  Dimensions,
  ImageBackground
} from 'react-native';
import axios from 'axios'
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right,Title } from 'native-base';
import {SearchCountry} from './SearchCountry'
const WIDTH =Dimensions.get('window').width
const HEIGHT =Dimensions.get('window').height
class CountryPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      countries: [],
      isLoading:false,
      //refreshing: true
    }
  }

  componentDidMount(){
  this.fetchCountry()
  }

  fetchCountry = ()=>
  {
    this.setState({isLoading:true})
    axios.get("https://corona.lmao.ninja/v2/countries")
    .then(res => this.setState({countries:res.data,isLoading:false})
    .catch(() => console.log('error'))
    )
  }

  renderItem = ({ item }) => {
    //console.log('item',item)
    return(
      
      <TouchableOpacity style={styles.divFood} onPress={() => this.props.navigation.navigate('CountryDashboard',   { item: item.country })}>
          <ImageBackground source={{uri: item.countryInfo.flag}}   style={{width:(WIDTH/2)-10,height:60}}>
         
           </ImageBackground>
           <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:20,textAlign:'center',alignItems:'center',justifyContent:'center'}}>
              {item.country}
            </Text>
            </View>
          </TouchableOpacity>
    )
  }
  render()
  {
    //console.log('contries',this.state.countries)
    return(
     
        
        <View style={{backgroundColor:'white'}}>
            <FlatList
            showsVerticalScrollIndicator={false}
      data={this.state.countries}
      numColumns={2}
      renderItem={this.renderItem}
      keyExtractor={item => item.url}
      //refreshing={this.state.refreshing}
      
    />
    </View>
      
    )
  }
}
export default CountryPage
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  divCategorie:{
    backgroundColor:'red',
    margin:5, alignItems:'center',
    borderRadius:10,
    padding:10
  },
  titleCatg:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:10
  },
  imageFood:{
    width:((WIDTH/2)-20)-10,
    height:((WIDTH/2)-20)-30,
    backgroundColor:'transparent',
    position:'absolute',
    top:-45
  },
  divFood:{
    width:(WIDTH/2)-10,
    padding:10,
    borderRadius:10,
    marginTop:5,
    marginBottom:5,
    marginLeft:5,
    alignItems:'center',
    elevation:8,
    shadowOpacity:0.3,
    shadowRadius:20,
    backgroundColor:'white',
  }
});


