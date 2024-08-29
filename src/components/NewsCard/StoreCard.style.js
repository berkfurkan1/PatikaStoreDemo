import { Image, StyleSheet ,Dimensions} from 'react-native';

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:10,
        borderRadius:10,
        width: Dimensions.get('window').width/2,
        elevation:5,
        alignItems:'center',

    },
    image:{ height: Dimensions.get('window').height/5 ,
        width: Dimensions.get('window').width/2,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        resizeMode:'contain'
     },
    title:{
        fontWeight:'bold',
        fontSize:20,
    },
    price:{
        paddingTop:3,
        fontWeight:'bold',
        fontSize:15,
        
    },
    inner_container:{
        padding:5,
        },
    author:{
        fontStyle:'italic',
        textAlign:'right',
    },
    inStock:{
        fontSize:14,
        color:'green',
    },
    outOfStock:{
        fontSize:14,
        color:'red',
    },
})