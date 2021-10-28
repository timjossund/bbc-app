import React from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


export const HomeMain = () => {

    const navigation = useNavigation();

    return (
            <View style={styles.mainHomeSection}>
                <Text style={styles.welcomeText}>Welcome to our app!</Text>
                <View style={styles.mainButton}>
                    <Button
                        title='Prayer List'
                        icon={{
                            name: "arrow-right",
                            size: 25,
                            color: "white"
                        }}
                        buttonStyle={{ width: 300, height: 100, flexDirection: 'row', justifyContent: 'flex-start', borderRadius: 15 }}
                        onPress={() => navigation.navigate('PrayerScreen')}
                    />
                </View>
                <View style={styles.mainButton}>
                    <Button 
                        title='Notifications'
                        icon={{
                            name: "arrow-right",
                            size: 25,
                            color: "white"
                        }}
                        buttonStyle={{ width: 300, height: 100, flexDirection: 'row', justifyContent: 'flex-start', borderRadius: 15 }}
                        onPress={() => navigation.navigate('NotificationScreen')}
                    />
                </View> 
                <View style={styles.mainButton}>
                    <Button
                        title='Upcoming Events'
                        icon={{
                            name: "arrow-right",
                            size: 25,
                            color: "white"
                        }}
                        buttonStyle={{ width: 300, height: 100, flexDirection: 'row', justifyContent: 'flex-start', borderRadius: 15 }}
                        onPress={() => navigation.navigate('AnnouncementScreen')}
                    />
                </View> 
                <View style={styles.mainLoginButton}>
                    <Button
                        title='Admin Login'
                        type="outline"
                        buttonStyle={{ width: 300, height: 50, flexDirection: 'row', justifyContent: 'center', borderRadius: 15 }}
                        onPress={() => navigation.navigate('PostMessage')}
                    />
                </View>    
            </View>

    )
    
}

const styles = StyleSheet.create({
    mainHomeSection: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        marginTop: -20,
        paddingTop: 30,
        height: 400,
        width: '100%'
    },
    mainButton: {
        width: 300,
        marginBottom: 20
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 30
    }
})
