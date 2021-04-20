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

const WIDTH =Dimensions.get('window').width
const HEIGHT =Dimensions.get('window').height

class CountryDashboard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            countryname:'',
            cases: '',
            todayCases: '',
            deaths: '',
            todayDeaths: '',
            recovered: '',
            active: '',
            critical: '',
            casesPerOneMillion: '',
            deathsPerOneMillion: '',
            tests: '',
            testsPerOneMillion: '',
            affectedCountries: ''
        }
    }
    componentDidMount(){
        const { route } = this.props
        const { item } = route.params
       
       axios.get("https://corona.lmao.ninja/v2/countries/"+item)
       .then(res => this.setState({countryname: item,cases: res.data.cases,
        todayCases: res.data.todayCases,
        deaths: res.data.deaths,
        todayDeaths: res.data.todayDeaths,
        recovered: res.data.recovered,
        active: res.data.active,
        critical: res.data.critical,
        casesPerOneMillion: res.data.casesPerOneMillion,
        deathsPerOneMillion: res.data.deathsPerOneMillion,
        tests: res.data.tests,
        testsPerOneMillion: res.data.testsPerOneMillion,
        affectedCountries: res.data.affectedCountries}))
    }
    render(){
        return(
            <View>
                <Text> Country {this.state.countryname}</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('MapScreen')}>
        <Text>{this.state.cases}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MapScreen')}>
        <Text>{this.state.todayCases}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MapScreen')}>
        <Text>{this.state.deaths}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MapScreen')}>
        <Text>{this.state.todayDeaths}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MapScreen')}>
        <Text>{this.state.recovered}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MapScreen')}>
        <Text>{this.state.active}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MapScreen')}>
        <Text>{this.state.critical}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MapScreen')}>
        <Text>{this.state.casesPerOneMillion}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MapScreen')}>
        <Text>{this.state.deathsPerOneMillion}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MapScreen')}>
        <Text>{this.state.tests}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MapScreen')}>
        <Text>{this.state.testsPerOneMillion}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MapScreen')}>
        <Text>{this.state.affectedCountries}</Text>
        </TouchableOpacity>
            </View>
        )
    }
}

export default CountryDashboard