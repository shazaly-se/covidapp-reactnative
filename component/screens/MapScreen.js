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
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image,
  Dimensions
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import axios from 'axios'
import MapView, { PROVIDER_GOOGLE,Marker,Callout,Location, Permissions  } from 'react-native-maps';
import {SearchButton} from './SearchButton'
import {CurrentLocationButton} from './CurrentLocationButton'
//import Icon from 'react-native-vector-icons/FontAwesome'
import Autocomplete from 'react-native-autocomplete-input';
import { Container, Header, Left, Body, Right, Button,  Title ,Icon} from 'native-base';
let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};
class MapScreen extends React.Component{
  constructor(){
    super();
    this.state={
      mydata:[],
      query:'',
      isLoading:false,
       latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        error:null
        
      }
      
    
    this._getLocationAsync()
  }

  _getLocationAsync = async() =>{
    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if(status !== 'granted')
    console.log('permission to access denied')

      let location = await Location.getCurrentPositionAsync({enableHighAccuracy : true});
    
   
   
    this.setState({   latitude:location.coords.latitude,
      longitude:location.coords.longitude,
      latitudeDelta:0.045,
      longitudeDelta:0.045})
  }

  centerMap(){
    const {latitude,longitude,latitudeDelta,longitudeDelta} = this.state
    this.map.animateToRegion({
      latitude,longitude,
      latitudeDelta,longitudeDelta
    })
  }

  componentDidMount(){
    //this._getLocationAsync();

    
    this.setState({isLoading:true})
    axios.get("https://corona.lmao.ninja/v2/countries")
    .then(res => this.setState({mydata:res.data,isLoading:false}))
  }
  render()
  {
    console.log('my map',this.state.mydata)
    return(
      <Container>
     
      {this.state.isLoading?<View></View>:<View>
        <View style={{ zIndex:9,
        position:'absolute',
        flexDirection:'row',
        width:(width-0),
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
        shadowOpacity:1.0}}>
        <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
 
      getDefaultValue={() => ''}
 
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyD4IbGtFIGAqkczb1qAtnwtawpj_7PGDOc',
        language: 'en', // language of the results
        types: '(cities)' // default: 'geocode'
      }}
 
      styles={{
        textInputContainer: {
          width: '100%'
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}
 
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        type: 'cafe'
      }}
      
      GooglePlacesDetailsQuery={{
        // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
        fields: 'formatted_address',
      }}
 
      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      predefinedPlaces={[homePlace, workPlace]}
 
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      //renderLeftButton={()  => <Image source={require('../../assets/pin.png')} style={{width:20,height:20,position:'absolute'}} />}
     // renderRightButton={() => <Text>Custom text after the input</Text>}
    /></View>
        <CurrentLocationButton cb={()=>{this.centerMap()}} /></View>}
      
      <View style={styles.container}>
        {this.state.isLoading? <View>
          <ActivityIndicator size="large" color="gray" />
        </View>:
        
        
         <MapView
         initialRegion={{
          latitude: this.state.latitude,
          longitude:this.state.longitude,
          latitudeDelta:0.045,
          longitudeDelta:0.045
         }}
         showsUserLocation={true}
         provider={PROVIDER_GOOGLE}
         ref={(map) =>{this.map = map }}
        rotateEnable={true}// remove if not using Google Maps
         style={styles.map}>
         {this.state.mydata.map((confirmed,index) => <Marker 
         key={index}
         coordinate={{
           latitude:confirmed.countryInfo.lat ?confirmed.countryInfo.lat:0,
           longitude:confirmed.countryInfo.long?confirmed.countryInfo.long:0
         }}>  
         {confirmed.cases >0? <Image source={{uri:confirmed.countryInfo.flag}} style={{width:30,height:20}}/>:<View></View>}   
        <Callout>
        <View style={{width:240}}>
        <Text style={{fontSize:20,alignItems:'center',justifyContent:'center'}}>{confirmed.country} </Text>
        <Text style={{fontSize:15}}>confirmed: {confirmed.cases}</Text>
        <Text style={{fontSize:15,color:confirmed.recovered >0?'green':'black'}}>recovered:  {confirmed.recovered}</Text>
        <Text style={{fontSize:15,color:confirmed.deaths > 0?'red':'black'}}>deaths:  {confirmed.deaths}</Text>
        <Text style={{fontSize:15}}>active:  {confirmed.active}</Text>
        </View>
        </Callout>
         </Marker>)}
         
       </MapView>
       
        }
     
    </View>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%'
   
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
  itemText: {
    fontSize: 15,
    margin: 2
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 25
  },
  infoText: {
    textAlign: 'center'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center'
  },
  openingText: {
    textAlign: 'center'
  }
 });

export default MapScreen;
