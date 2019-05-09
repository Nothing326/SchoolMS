import React, { Component } from 'react';
import { StyleSheet, Text, View,Image,FlatList,Alert} from 'react-native';
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
import { createStackNavigator } from "react-navigation";
import { YellowBox } from "react-native";
import {Card,  CardTitle,
    CardImage,
    CardContent,
  CardAction} from 'react-native-elements'
  import {DrawerActions} from 'react-navigation';
 class Appointment extends React.Component {

    static navigationOptions = {
        drawerIcon:(
            <Image style={{width:30,
                height:30,
                justifyContent: 'center'}}  source = {require('../assets/appointment.png')}/>
        ),
                  title: "Appointment",
          headerStyle: {
            backgroundColor: "#00b5ec"
            
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          }
    }
        // // Adding header title, color and font weight
        // static navigationOptions = {
        //   title: "Appointment",
        //   headerStyle: {
        //     backgroundColor: "#00b5ec"
            
        //   },
        //   headerTintColor: "#fff",
        //   headerTitleStyle: {
        //     fontWeight: "bold"
        //   }
        // };
        constructor(props) {
            super(props);
            this.state = {
              FlatListItems: [
                 { id: '1', value: 'Student Health' },{ id: 'Smoking', value: 'Drinking' },{ id: '3', value: 'C' },
                 { id: '4', value: 'D' },{ id: '5', value: 'E' },{ id: '6', value: 'F' },
                 { id: '7', value: 'G' },{ id: '8', value: 'H' },{ id: '9', value: 'I' },
                 { id: '10', value: 'J' },{ id: '11', value: 'K' },{ id: '12', value: 'L' },
                 { id: '13', value: 'M' },{ id: '14', value: 'N' },{ id: '15', value: 'O' },
                 { id: '16', value: 'P' },{ id: '17', value: 'Q' },{ id: '18', value: 'R' },
                 { id: '19', value: 'S' },{ id: '20', value: 'T' },{ id: '21', value: 'U' },
                 { id: '22', value: 'V' },{ id: '23', value: 'W' },{ id: '24', value: 'X' },
                 { id: '25', value: 'Y' },{ id: '26', value: 'Z' }],
            };
          }

          FlatListItemSeparator = () => {
            return (
              //Item Separator
              <View style={{height: 0.0, width: '100%', backgroundColor: '#C8C8C8'}}/>
            );
          };
          GetItem(item) {
            //Function for click on an item
            Alert.alert(item);
          }  
  render() {
    const {navigate} = this.props.navigation;

    return (
        <Container>

        <Header style={{backgroundColor: '#00b5ec'}}>
        <Left style={styles.left}>
         <Icon style={{color: 'white'}} name="menu" onPress={()=>
             this.props.navigation.dispatch(DrawerActions.openDrawer())} />
         </Left>
    </Header>
    <View style={styles.MainContainer}>
       <FlatList
          data={this.state.FlatListItems}
          //data defined in constructor
          ItemSeparatorComponent={this.FlatListItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <View>
             <Card borderRadius={8} width={350} style={styles.card}             > 

              <Text
                style={styles.item}
                onPress={this.GetItem.bind(this, 'Id : '+item.id+' Value : '+item.value)}>
                {item.value}
              </Text>
              <Text>
                  Daw Hnin Min Oo
              </Text>
              <Text>
                  096804920
              </Text>
              <Text>
                  May 7 Tuesday
              </Text>
              <Text>
                  9:00AM
              </Text>
              </Card>  
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      </Container>
    );
  }
}
// export default Appointment;
// Adding Header Bar In React Native
export default createStackNavigator({
    Appointment: {
      screen: Appointment
    }
  });
  YellowBox.ignoreWarnings([
    "Warning: isMounted(...) is deprecated",
    "Module RCTImageLoader"
  ]);
  const styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      marginTop: 30,
    },
   
    item: {
      padding: 10,
      fontSize: 24,
      height: 44,
      marginBottom :8
    },
    card:{
        justifyContent: 'center',
        alignItems: 'center',
        margin : 8
    }
  });
