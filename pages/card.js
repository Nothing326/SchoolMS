import React, { Component } from 'react';
import {Platform, View, Text, StyleSheet,ScrollView, Switch, StatusBar ,ActivityIndicator,TouchableOpacity,
        TouchableHighlight,FlatList, Image} from 'react-native';
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
import {Card} from 'react-native-elements'

class StudentInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {          
          dataSource:[],
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
           count: this.state.count +1
          })
        })
        .catch(error=>alert(error)) //to catch the errors if any
       }
       
renderItem=(data)=>
<TouchableOpacity style={styles.list}>
<View>
<Text style={styles.lightText}>Name              :  {data.item.studentname}</Text>
<Text style={styles.lightText}>Date of Birth:  {data.item.dob} </Text>
<Text style={styles.lightText}>Batch             :  {data.item.batch}</Text>
<Text style={styles.lightText}>Course            :  {data.item.course}</Text>
<Text style={styles.lightText}>Section           :  {data.item.section}</Text>
<Text style={styles.lightText}>Roll No.           :  {data.item.roll_no} </Text>
<Text style={styles.lightText}>Attendance   :  {data.item.attendance}</Text>
<Text style={styles.lightText}>Appointment  :  {data.item.appointment}</Text>
<Text style={styles.lightText}>Leave              :  {data.item.leave}</Text>
</View>
</TouchableOpacity>

render(){
    const {loading, activeSections} = this.state;
    return(
        <Card borderRadius={20} width={350} style={styles.card}>
            <FlatList
                data= {this.state.dataSource}
                ItemSeparatorComponent = {this.FlatListItemSeparator}
                renderItem= {item=> this.renderItem(item)}
                keyExtractor= {item=>item.studentid.toString()}
            />
        </Card>  
     )
 }
} 
export default StudentInfo;
const styles = StyleSheet.create({
    lightText:{ 
        lineHeight: 40,
        textAlign: 'justify',
    },
    card:{
        justifyContent: 'center',
        alignItems: 'center',
    }
});