import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input } from 'react-native-elements'
import { Button } from 'react-native-elements/dist/buttons/Button'

export const SendNotification = () => {

    const [text, setText] = useState({});

    fetch('https://bbcconway.com/wp-json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({
            username: 'timjossund',
            password: '@TiMj54874'
        })
    }).then(response => response.json())
    .then(user => console.log(user.token));

    const resetForm = () => {
        setText({...text, title: '', content: ''})
    }

    const handlePost = () => {
        fetch('https://bbcconway.com/wp-json/wp/v2/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYmJjY29ud2F5LmNvbSIsImlhdCI6MTYzNTM2NzI2NywibmJmIjoxNjM1MzY3MjY3LCJleHAiOjE2MzU5NzIwNjcsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.jcxGjU3HTG2hAgui4qAcfpaMTtA5nsKH09tG4SZQiDY"
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
