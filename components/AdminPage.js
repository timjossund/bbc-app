import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

export const AdminPage = () => {

    const navigation = useNavigation();
        
        return (
            <View style={styles.mainHomeSection}>
                <Text style={styles.welcomeText}>Admin Page</Text>
                <View style={styles.mainButton}>
                    <Button
                        title='Send Notification'
                        icon={{
                            name: "arrow-right",
                            size: 25,
                            color: "white"
                        }}
                        buttonStyle={{ width: 300, height: 100, flexDirection: 'row', justifyContent: 'flex-start', borderRadius: 15 }}
                        onPress={() => navigation.navigate('SendNotification')}
                    />
                </View> 
                <View style={styles.mainButton}>
                    <Button
                        title='Add To Prayer List'
                        icon={{
                            name: "arrow-right",
                            size: 25,
                            color: "white"
                        }}
                        buttonStyle={{ width: 300, height: 100, flexDirection: 'row', justifyContent: 'flex-start', borderRadius: 15 }}
                        onPress={() => navigation.navigate('AddPrayerRequest')}
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
