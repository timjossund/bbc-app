import React from 'react'
import { ScrollView } from 'react-native'
import { HomeHero } from '../components/HomeHero'
import { HomeMain } from '../components/HomeMain'

export const HomeScreen = () => {
    return (
        <ScrollView>
            <HomeHero />
            <HomeMain />
        </ScrollView>
    )
}
