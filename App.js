import React from 'react';
import { StyleSheet, Text, View , StatusBar, Image} from 'react-native';
import { createDrawerNavigator , DrawerItems, DrawerActions} from 'react-navigation';
import HomeScreen from './pages/Home';
import SettingsScreen from './pages/Timetable';
import Login from './pages/login';
import {Container, Content, Header, Footer, Body, Icon, Left, Drawer} from 'native-base';
import Appointment from './pages/appointment';
export default class App extends React.Component {
  render() {
    return (
     <MyApp/>
    );
  }
}
const CustomDrawerContentContainer = (props) => (
  <Container>
    <Header style={{backgroundColor: '#00b5ec',height:200}}>
      <Body>
        <Image
          style = {styles.drawerImage}
          source = {require('./assets/schoolicon.png')}
        />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
    <Footer style={{backgroundColor: '#00b5ec',height:50,}}>
    <Image style={styles.galaxyImage}
           source={require('./assets/GS_School_proud_logo.png')}>
    </Image>
    </Footer>
  </Container>
)
const MyApp = createDrawerNavigator({
  
  Profile: {
    screen: HomeScreen,
  },
  Timetable: {
    screen: SettingsScreen
  },
  Appointment: {
    screen: Appointment
  },
  Logout: {
    screen: Login
  },
},{
  contentComponent:CustomDrawerContentContainer,
  initialRouteName: 'Logout',
  drawerPosition: 'Left',
  drawerOpenRoute: 'DraweOpen',
  drawerCloseRoute: 'DraweClose',
  drawerToggleRoute: 'DraweToggle'
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerImage:{
    height:150,
    width:150,
    borderRadius:75
  },
  galaxyImage: {
    width: 64,
    height: 30,
    resizeMode: 'contain',
    alignItems: 'center',
    margin:10
  },
  
});
