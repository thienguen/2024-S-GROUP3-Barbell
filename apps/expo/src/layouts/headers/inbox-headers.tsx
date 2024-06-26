import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'

import ArrowLeft from '~assets/svgs/arrow-left.svg'
import Write from '~assets/svgs/write.svg'

interface InboxHeaderProps {
  title: string
}

export const InboxHeader = ({ title }: InboxHeaderProps) => {
  return (
    <View className='flex-row items-center justify-between bg-slate-900 px-1 pt-1'>
      <TouchableOpacity
        className='p-2 pt-4'
        testID='inbox-header-button'
        onPress={() => {
          router.back()
        }}
      >
        <ArrowLeft width={40} height={40} />
      </TouchableOpacity>

      <Text className='font-istok-web flex-1 pb-2 text-center text-4xl font-bold  text-slate-200'>
        {title}
      </Text>

      <TouchableOpacity className='p-2'>
        <Write width={40} height={40} />
      </TouchableOpacity>
    </View>
  )
}
