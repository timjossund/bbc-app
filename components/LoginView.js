import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Logo from '../assets/BBCLOGO.png'

export const LoginView = () => {
    return (
        <View style={styles.loginPage}>
            <Image 
                source={Logo}
                style={{width:300, height:75, marginBottom: 75}}    
            />
            <Text style={styles.loginText}>Admin Login</Text>
            <Input 
                placeholder='Username'
            />
            <Input 
                placeholder='Password'
            />
            <Button
                title='Login'
                type='clear'
                buttonStyle={{ flexDirection: 'row', justifyContent: 'center', }}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    loginPage: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        marginTop: 100,
    },
    loginText: {
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 50,
    }
})
