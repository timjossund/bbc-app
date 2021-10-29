import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input } from 'react-native-elements'
import { Button } from 'react-native-elements/dist/buttons/Button'
import {API_URL, API_TOKEN} from "@env"

export const SendNotification = () => {

    const [text, setText] = useState({});

    const resetForm = () => {
        setText({...text, title: '', content: ''})
    }

    const handlePost = () => {
        fetch(`${API_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${API_TOKEN}`
            },
            body: JSON.stringify({
                "title": `${text.title}`,
                "content": `${text.content}`,
                "categories": 1,
                status: 'publish'
            }
            ),
        })
    }

    return (
        <View style={styles.mainAdminSection}>
            <Text style={styles.mainTitle}>New Notification</Text>
            <Input 
                type='text'
                onChangeText={value => setText({...text, title: value})}
                defaultValue={text.title} 
                placeholder='Enter your title'
            />
            <Input 
                type='text'
                onChangeText={value => setText({...text, content: value})}
                defaultValue={text.content} 
                placeholder='Enter your message'
            />
            <Button 
                title='Send'
                type='clear'
                buttonStyle={{ flexDirection: 'row', justifyContent: 'center', }}
                onPress={() => {handlePost(); resetForm()}}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    mainAdminSection: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 800,
        marginTop: 100
    },
    mainTitle: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 50,
    }
})
