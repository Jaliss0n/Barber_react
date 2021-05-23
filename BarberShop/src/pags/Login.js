import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button, Image } from "react-native-elements";
import {InputText} from "../components/InputText";

export const Login = () => {
    return(
        <View style={styles.container}>
            <View style={styles.box_1}>

                <Image
                    source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8grL9jtKlqZR0vXTigic0kwJm0JX2eAZffg&usqp=CAU"}}
                    style={styles.image}
                    resizeMode="stretch"
                    
                />

                <InputText
                    textHolder = "Alfredo01"
                    textLabel ="Digite seu login"
                    iconChoice = "user"
                />

                <InputText
                    textHolder = "Digite sua senha"
                    iconChoice = "key"
                />

                <Button
                    title="Login"
                    type="solid"
                    
                    buttonStyle={
                        styles.bottom
                    }
                    
                />
            </View>

            <Text
                style={styles.text}
            >
                Ainda não possui um Login?, clique aqui! 
            </Text>

        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#4331A4",
        padding:40,
        paddingTop:130
    },
    box_1:{
        backgroundColor: "white",
        borderRadius: 12,
        padding: 15
    },
    image:{
        width:"100%",
        height:100,
    },
    bottom:{
        backgroundColor:"#4331A4",
        borderRadius:8
    },
    text:{
        paddingTop:100,
        alignSelf:"center",
        color:"white",
        fontSize:15
    }
})
