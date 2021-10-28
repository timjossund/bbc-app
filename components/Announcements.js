import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

export const Announcements = () => {

    const [announcements, setAnnouncements] = useState({});

    useEffect(() => {
        fetch('https://bbcconway.com/wp-json/wp/v2/posts?categories=3')
        .then(response => response.json())
        .then(data => setAnnouncements(data));
    }, []);

    return (
        <SafeAreaView>
            <View style={styles.notifView}>
                {/* <Text style={styles.mainTitle}>Announcements</Text> */}
                <FlatList
                    data={announcements}
                    renderItem={({ item }) => 
                        <ListItem style={{borderBottomWidth:.5, borderColor:'gray', borderStyle:'solid'}}>
                          <Avatar size="large" rounded source={{uri: item.featured_media_src_url}} />
                          <ListItem.Content>
                            <ListItem.Title>{item.title.rendered}</ListItem.Title>
                            <ListItem.Subtitle>{item.content.rendered}</ListItem.Subtitle>
                          </ListItem.Content>
                        </ListItem>
                    }
                    keyExtractor={item => item.id}
                    inverted
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
        marginBottom: 20,
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
