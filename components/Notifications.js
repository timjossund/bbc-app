import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native'

export const Notifications = () => {

    const [notifs, setNotifs] = useState({});

    useEffect(() => {
        fetch('https://bbcconway.com/wp-json/wp/v2/posts?categories=1')
        .then(response => response.json())
        .then(data => setNotifs(data));
    }, []);

    return (
        <SafeAreaView>
            <View style={styles.notifView}>
                {/* <Text style={styles.mainTitle}>Latest Notifications</Text> */}
                <FlatList
                    data={notifs}
                    renderItem={({ item }) => (
                        <View style={styles.notifItem}>
                            <Text style={styles.notifTitle}>{item.title.rendered}</Text>
                            <Text>{item.content.rendered}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    notifItem: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        width:'90%',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
        shadowOffset: {
            width: 0,
            height: 0
          },
        shadowOpacity: .3,
        shadowRadius: 3,
        shadowColor: 'gray',
        padding: 10
    },
    mainTitle: {
        fontSize: 30,
        fontWeight: '500',
        marginLeft: 20,
        marginBottom: 10,
        color: 'gray'
    },
    notifView: {
        paddingTop: 50,
        margin: 12,
    },
    notifTitle: {
        fontSize: 16,
        fontWeight: '400'
    }
})
