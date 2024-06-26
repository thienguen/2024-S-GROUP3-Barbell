import React from 'react'
import { Button, FlatList, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Route, router } from 'expo-router'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
  },
})

const Nav = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[
          // add your component routes here
          { key: 'Home', route: '/' },
          { key: 'Go Auth', route: '/auth' },
          { key: 'Notifs', route: '/notif' },
          { key: 'Message Input', route: '/messages' },
          { key: 'Create New Workout', route: '/workout/createNew' },
          { key: 'Start Existing Workout', route: '/workout/startExisting' },
          { key: 'Profile', route: '/user' },
          { key: 'Achievements', route: '/user/achievements' },
          { key: 'Activity History', route: '/user/activity-history' },
          { key: 'Personal Data', route: '/user/personal-data' },
          { key: 'Workout Progress', route: '/user/workout-progress' },
          { key: 'Contact Us', route: '/contact-us' },
          { key: 'Privacy Policy', route: '/privacy-policy' },
          { key: 'Friends List', route: '/frlist' },
          { key: 'Award', route: '/award' },
          { key: 'Spotify', route: '/spotify' },
          { key: 'Tracker', route: '/tracker' },
          { key: 'Activity Feed', route: '/activity/feed' },
          { key: 'Post Feed', route: '/post/feed' },
          { key: '(workout)', route: '/(workout)' },
          { key: '(inbox)', route: '/(inbox)' },
          { key: '(friends)', route: '/(friends)' },
          { key: 'MuscleGroup', route: '/muscleGroup' },
          { key: 'KeypadDemo', route: '/keypadDemo' },
          { key: 'Frequency Graph Demo', route: '/graphDemo' },
          { key: 'post2', route: '/post2' },
          { key: 'Rest Timer', route: '/rest-timer' },
          { key: 'Filtered Exercises', route: '/filteredExercises' }
        ]}
        renderItem={({ item }) => (
          <Button
            title={item.key}
            onPress={() => {
              router.push(item.route as Route<string>)
            }}
          />
        )}
      />
    </SafeAreaView>
  )
}

export default Nav
