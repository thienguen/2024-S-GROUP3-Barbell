import React, { useState } from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

import { Ionicons } from '@expo/vector-icons'

import Toggle from '~/components/toggle/toggle'

export default function Award() {
  // screen dimensions
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

  // vmin: CSS
  const vmin70 = Math.min(screenWidth, screenHeight) * 0.7

  return (
    <SafeAreaView style={{ backgroundColor: '#1C1B1B', flex: 1 }}>
      <View className='flex flex-row justify-between px-5'>
        <Ionicons onPress={() => router.back()} name='chevron-back' size={24} color='#CACACA' />
        <Text style={{ color: '#CACACA', fontSize: 20 }}>Award</Text>
        <Ionicons name='ellipsis-horizontal-sharp' size={24} color='#CACACA' />
      </View>

      <View className='flex flex-row items-center'>
        <Image
          source={require('~assets/award/trophy.png')}
          style={{
            flex: 1,
            width: screenWidth * 0.9,
            height: screenWidth * 0.9,
          }}
          resizeMode='contain'
        />
      </View>
    </SafeAreaView>
  )
}
