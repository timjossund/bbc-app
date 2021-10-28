import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import bbcLogo from '../assets/bbchero.jpg'
 
export const HomeHero = () => {

    return (
        <View style={styles.mainHeroSection}>
            <ImageBackground 
                style={styles.mainHeroImage}
                source={bbcLogo}
                resizeMode="cover"
            >
            <Text style={styles.mainHeroText}>Bible Baptist Church</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    mainHeroSection: {
        flex: 1,
        width: "100%",
        margin: 0
    },
    mainHeroImage: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: "100%",
        height: 200,
        paddingTop: 100,
        margin: 0
    },
    mainHeroText: {
        color: 'white', 
        fontSize: 25,
        fontWeight: '700'
    }
})
