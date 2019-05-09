import React, { Component } from 'react';
import {Platform, View, Text, StyleSheet,ScrollView, Switch, StatusBar ,ActivityIndicator,TouchableOpacity,
        TouchableHighlight,FlatList, Image,Alert} from 'react-native';
import {DrawerActions} from 'react-navigation';
import PTRView from 'react-native-pull-to-refresh';
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import StudentInfo from './card';
import GuardianInfo from './card_guardian';
  
class HomeScreen extends Component{    
      toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
      };
    
      setSections = sections => {
        this.setState({
          activeSections: sections.includes(undefined) ? [] : sections,
        });
      };
    
      renderHeader = (section, _, isActive) => {
        return (
          <Animatable.View
            duration={100}
            style={[styles.headeracd, isActive ? styles.active : styles.inactive]}
            transition="backgroundColor"
          >
            <Text style={styles.headerText}>Student Info</Text>
          </Animatable.View>
        );
      };
      renderContent(section, _, isActive) {
        return (
          <Animatable.View
            duration={100}
            style={[styles.content, isActive ? styles.active : styles.inactive]}
            transition="backgroundColor"
          >
            <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
              {this.state.count}
            </Animatable.Text>
          </Animatable.View>
        );
      };
    static navigationOptions = {
        drawerIcon:(
            <Image style={{width:30,
                height:30,
                justifyContent: 'center'}}  source = {require('../assets/profile.png')}/>
        ),
        title:'Profile',
        headerTitle: 'Profile',
    }
    update = () => { return(
        this.setState ({loading: false , prt_show : false , stu_show: false}),
        setTimeout(()=>{this.fetchData()},300)
        )}
      constructor(props) {
        super(props);
        this.state = {
          activeSections: [],
          collapsed: true,
          multipleSelect: false,
          loading: true,
          count: 0,
          dataSource:[],
          stu_show: false,
          prt_show: false,

         };
       }
       componentDidMount = () => {
           this.fetchData();
       }  
       fetchData = () => {
        fetch("http://192.168.0.39:90/api/GetStudentHistoryInfoJSON?studentcode=190001&password=zzzzzz")
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
           loading: false,
           dataSource: responseJson,
           count: responseJson.studentid
          })
        })
        .catch(error=>alert(error)) //to catch the errors if any
       }
       
renderItem=(data)=>
<TouchableOpacity style={styles.list}>
<Text style={styles.lightText}>Name      : {data.item.studentname}</Text>
<Text style={styles.lightText}>Course    : {data.item.course}</Text>
<Text style={styles.lightText}>Attendance:{data.item.attendance}</Text>
</TouchableOpacity>

ShowHideStu = () => {
  if (this.state.stu_show == true) {
    this.setState({ stu_show: false });
  } else {
    this.setState({ stu_show: true });
  }
};
ShowHidePrt = () => {
  if (this.state.prt_show == true) {
    this.setState({ prt_show: false });
  } else {
    this.setState({ prt_show: true });
  }
};
    render(){
        const {loading, activeSections} = this.state;
        if(!loading)
        {
        return(
           <Container style={{backgroundColor: '#DCDCDC'}}>
               <StatusBar 
               hidden={true}
               backgroundColor={'#00b5ec'}
               translucent={true}/>
               <Header style={styles.header}>
                   <Left style={styles.left}>
                       <Icon style={{color: 'white'}} name="menu" onPress={()=>
                       this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
                   </Left>
                   
               </Header>
               <Image style={styles.avatar} source = {require('../assets/avatar6.png')}></Image>
               <PTRView onRefresh={this.update} >
               <ScrollView contentContainerStyle={{ paddingTop: 50 , alignItems: "center" }}>
               
               <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} 
                onPress={this.ShowHideStu}>
                <Text style={styles.loginText}>Student Information</Text>
                </TouchableHighlight>
                {this.state.stu_show ? <StudentInfo/> : null}
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} 
                onPress={this.ShowHidePrt}>
                <Text style={styles.loginText}>Parent Information</Text>
                </TouchableHighlight>
                {this.state.prt_show ? <GuardianInfo/> : null}
               </ScrollView>
               </PTRView>
           </Container>
        
        )
    }
    else
    {
        return(
            <Container style={{backgroundColor: '#DCDCDC'}}>
                <StatusBar hidden={true} />
                <Header style={styles.header}>
                    <Left style={styles.left}>
                        <Icon style={{color: 'white'}} name="menu" onPress={()=>
                        this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
                    </Left>
                </Header>
                <Image style={styles.avatar} source = {require('../assets/avatar6.png')}></Image>
                <ScrollView contentContainerStyle={{ paddingTop: 100 }}>
                <PTRView onRefresh={this.update} >
                <ActivityIndicator style = {styles.activityIndicator} size="small" color= "white"/>
               
                </PTRView>
                </ScrollView>
            </Container>
         )
    }
    }
}
export default HomeScreen
const styles = StyleSheet.create({
    left: {
        marginLeft: Platform.OS === 'android' ? -150 : null,
        marginTop:  Platform.OS === 'android' ? -145 : null,
    },
    list: {

    },
    header: {
        backgroundColor: '#00b5ec',
        height: 200,
    },
    body:{
        marginTop:40,
        alignItems: 'center',
      },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width:350,
      marginTop:20,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    card: {
      width: 250,
      borderRadius: 20,
      backgroundColor: "#00b5ec",
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
      },
      activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 20
     },
     title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
      },
      headeracd: {
        backgroundColor: '#F5FCFF',
        padding: 10,
      },
      headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
      },
      content: {
        padding: 20,
        backgroundColor: '#fff',
      },
      active: {
        backgroundColor: 'rgba(255,255,255,1)',
      },
      inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
      },    
  });


 