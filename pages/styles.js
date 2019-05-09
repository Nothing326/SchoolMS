import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    footer:{
      backgroundColor: '#00b5ec',
      height:50
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    },
    galaxyImage: {
      width: 64,
      height: 30,
      resizeMode: 'contain',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
    },
    galaxyImageHeader: {
      width: 100,
      height: 50,
      resizeMode: 'contain',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom : 64
    },
    poweredbyText :{
    marginRight :16,  
    marginTop : 16,
    color :'white',
 
    }
  });

  export default styles;