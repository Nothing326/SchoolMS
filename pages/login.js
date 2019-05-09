import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import {Container,Footer, Header} from 'native-base';
import styles from './styles';
import config from '../utils/config';
import { Linking } from 'react-native';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      studentCode: '',
      password: '',
      studentid: '',
      dataSource:[],
      auth_token: ''
      }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
  Login = async () => {
    const { studentCode }  = this.state ;
     const { password }  = this.state ;
    let uri = `${config.login}studentcode=${studentCode}&password=${password}`;
    fetch(uri, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "provider": "studentcode",
            "data": {
                "student_code": studentCode,
                "password": password
            }
          })
        }).then((response) => response.json())
        .then((res) => {
          this.setState({studentid: res.results.studentid})
      if(typeof(res.message) != "undefined"){
       Alert.alert("Error", "Error: "+ res.message);
      }
      else if(this.state.studentid == '1'){
        this.setState({ auth_token: res.auth_token });
        Alert.alert("Welcome", " You have succesfully logged in");
        
        }
     }).catch((error) => {
         console.error(error);
        });
  }
  test = () => {
    // const { studentCode }  = this.state ;
    // const { password }  = this.state ;
    // const { dataSource } = this.state;

    // if (studentCode != '') {
    //   if (password != '') {
        let uri = `studentCode=${studentCode}&password=${password}`;
        fetch(config.login+uri)
        .then(response => response.json())
        .then((responseJson)=> {
          return responseJson.studentname;
          // this.setState({
          //  loading: false,
          //  dataSource: responseJson,
          //  studentData:{
          //    studetnid: responseJson.studetnid,
          //    studentname: responseJson.studentname,
             
        //   }
         // })
        })
      //  Alert.alert("Warning!",student_name+'hello');
      }
  //     else {
  //       Alert.alert("Warning!", 'Please Enter Password.');
  //     }
  //   }
  //   else {
  //     Alert.alert("Warning!", 'Please Enter Student Code.');
  //   }
  // }
  static navigationOptions = {
    drawerIcon:(
        <Image style={{width:30,
            height:30,
            justifyContent: 'center'}}  source = {require('../assets/logout.png')}/>
    )
}
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container >

      <View style={styles.container}>
      <Image style={styles.galaxyImageHeader}
           source={require('../assets/GS_School_proud_logo.png')}>
        </Image>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source = {require('../assets/studentCode.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Student Code"
              underlineColorAndroid='transparent'
              onChangeText={(studentCode) => this.setState({studentCode})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon}  source = {require('../assets/password.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              //password={true}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} 
         onPress={() => navigate('Profile')}
         >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableOpacity style={styles.list}
         onPress={() => this.onClickListener('restore_password')}
        >
            <Text>Forgot your password?</Text>
        </TouchableOpacity>

        
      </View>
      <Footer style={styles.footer}>
        <Text style={styles.poweredbyText}>Powered by</Text>
        <Image style={styles.galaxyImage}
           source={require('../assets/GS_School_proud_logo.png')}>
        </Image>
        <TouchableOpacity onPress={() => Linking.openURL('http://www.galaxy.com.mm')}>
           <Text style={{color: 'white',marginLeft : 16,marginTop : 16,textDecorationLine: 'underline',}}>
           www.galaxy.com.mm
           </Text>
        </TouchableOpacity>
      

      </Footer>
        
    </Container>  
    );
  }
}

