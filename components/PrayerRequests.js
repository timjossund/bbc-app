import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native'

export const PrayerRequests = ({ navigation }) => {

    const [reqs, setReqs] = useState({});

    useEffect(() => {
        fetch('https://bbcconway.com/wp-json/wp/v2/posts?categories=4')
        .then(response => response.json())
        .then(data => setReqs(data));
    }, []);

    return (
        <SafeAreaView>
            <View style={styles.prayerView}>
                {/* <Text style={styles.mainTitle}>Prayer Requests</Text> */}
                <FlatList
                    data={reqs}
                    renderItem={({ item }) => (
                        <View style={styles.prayerItem}>
                            <Text style={styles.prayerTitle}>{item.title.rendered}</Text>
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
    prayerItem: {
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
    prayerView: {
        paddingTop: 50,
        margin: 12,
    },
    prayerTitle: {
        fontSize: 16,
        fontWeight: '400'
    }
})
