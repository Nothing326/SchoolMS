import React, { Component } from 'react';
import { Platform,View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import {DrawerActions} from 'react-navigation';
import DateTime from 'react-native-customize-selected-date';
import { Icon, Button, Container, Header, Content,Left } from 'native-base';
import {Card} from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

class SettingsScreen extends Component{
    static navigationOptions = {
        drawerIcon:(
            <Image style={{width:30,
                height:30,
                justifyContent: 'center'}}  source = {require('../assets/timetable.png')}/>
        )
    }
    render(){
        return(
           <Container>
               <StatusBar hidden={true} />
               <Header style={{backgroundColor: '#00b5ec'}}>
                   <Left style={styles.left}>
                    <Icon style={{color: 'white'}} name="menu" onPress={()=>
                        this.props.navigation.dispatch(DrawerActions.openDrawer())} />
                    </Left>
               </Header>
               <Content contentContainerStyle={{
                   flex: 1,
                   alignItems: "center",
                   justifyContent: "center"
               }}>
                  <Card><Calendar></Calendar></Card>
               </Content>
           </Container>
        )
    }
}
export default SettingsScreen;
const styles = StyleSheet.create({
    left: {
        marginLeft: Platform.OS === 'android' ? -150 : null
    }
  });