import React, { Component } from 'react';
import {Platform, View, Text, StyleSheet,ScrollView, Switch, StatusBar ,ActivityIndicator,TouchableOpacity,
        TouchableHighlight,FlatList, Image} from 'react-native';
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
import {Card} from 'react-native-elements'

class GuardianInfo extends Component{
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
        fetch("http://192.168.0.39:90/api/GetGuardianInfoJSON?studentid=1")
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
           loading: false,
           dataSource: responseJson,
          })
        })
        .catch(error=>alert(error)) //to catch the errors if any
       }
       
renderItem=(data)=>
<TouchableOpacity style={styles.list}>
<View>
<Text style={styles.header}>Father's Information</Text>
<Text style={styles.lightText}>Name              :  {data.item.Father_Name}</Text>
<Text style={styles.lightText}>Occupation    :  {data.item.Father_Occupation} </Text>
<Text style={styles.lightText}>Mobile No.     :  {data.item.Father_Phone}</Text>
<Text style={styles.lightText}>Email             :  {data.item.Father_Email}</Text>
</View>
<View>
<Text style={styles.header}>Mother's Information</Text>
<Text style={styles.lightText}>Name              :  {data.item.Mother_Name}</Text>
<Text style={styles.lightText}>Occupation    :  {data.item.Mother_Occupation} </Text>
<Text style={styles.lightText}>Mobile No.     :  {data.item.Mother_Phone}</Text>
<Text style={styles.lightText}>Email             :  {data.item.Mother_Email}</Text>
</View>
<View>
<Text style={styles.header}>Guardian's Information</Text>
<Text style={styles.lightText}>Name              :  {data.item.Guardian_Name}</Text>
<Text style={styles.lightText}>Relation          :  {data.item.Relation}</Text>
<Text style={styles.lightText}>Mobile No.      :  {data.item.Guardian_Phone}</Text>
<Text style={styles.lightText}>Email              :  {data.item.Guardian_Email}</Text>
</View>
</TouchableOpacity>

render(){
    const {loading, activeSections} = this.state;
    return(
        <Card borderRadius={20} width={350}>
            <FlatList
                data= {this.state.dataSource}
                ItemSeparatorComponent = {this.FlatListItemSeparator}
                renderItem= {item=> this.renderItem(item)}
                keyExtractor= {item=>item.StudentID.toString()}
            />
        </Card>  
     )
 }
} 
export default GuardianInfo;
const styles = StyleSheet.create({
    lightText:{ 
        lineHeight: 40,
        textAlign: 'justify',
    },
    header:{
        fontWeight: 'bold'
    }
});