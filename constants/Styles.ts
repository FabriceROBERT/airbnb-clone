import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const defaultStyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },

    inputField: {
        height: 44,
        borderWidth:1,
        borderColor:'#ABABAB',
        borderRadius: 8,
        padding:8,
        backgroundColor:'white'

    },
    btn: {
        backgroundColor: Colors.primary,
        height:50,
        fontFamily:'RobotoMono',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
    },
    btnText: {
        color:'white',
        fontSize:16,
    },

    btnIcon: {
        position: 'absolute',
        left:16
    },
    footer: {
        position:'absolute',
        height:100,
        bottom: 0,
        left:8,
        right: 0,
        backgroundColor:'white',
        paddingVertical:10,
        paddingHorizontal:20,
        borderTopColor:Colors.grey,
        borderTopWidth: StyleSheet.hairlineWidth,
    }
})