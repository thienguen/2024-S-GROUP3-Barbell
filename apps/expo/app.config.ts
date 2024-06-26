import type { ExpoConfig } from 'expo/config'

const defineConfig = (): ExpoConfig => ({
  name: 'expo',
  slug: 'expo',
  scheme: 'expo',
  version: '0.1.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/icon.png',
    resizeMode: 'contain',
    backgroundColor: '#1F104A',
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: 'https://u.expo.dev/a5b98934-bf53-4573-ba91-972c22a6759a',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    bundleIdentifier: 'your.bundle.identifier',
    supportsTablet: true,
    // associatedDomains: ['applinks:clerk.helping.lemming-64.lclstage.dev'],
  },
  android: {
    package: 'your.bundle.identifier',
    adaptiveIcon: {
      foregroundImage: './assets/icon.png',
      backgroundColor: '#1F104A',
    },
    // intentFilters: [
    //   {
    //     action: 'VIEW',
    //     autoVerify: true,
    //     data: [
    //       {
    //         scheme: 'https',
    //         host: 'clerk.helping.lemming-64.lclstage.dev',
    //         pathPrefix: '/v1/oauth-native-callback',
    //       },
    //     ],
    //     category: ['BROWSABLE', 'DEFAULT'],
    //   },
    // ],
    jsEngine: 'hermes',
  },
  extra: {
    // this is commented out so you don't have to log in to run expo start locally
    // eas: {
    //   projectId: 'a5b98934-bf53-4573-ba91-972c22a6759a',
    // },
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  // jsEngine: 'hermes',
  plugins: [
    /* don't touch this */
    ['expo-router', { root: './src/app/' }],
    'expo-font',
    'expo-secure-store',
    // 'expo-router',
    // './expo-plugins/with-modify-gradle.js',
  ],
})

export default defineConfig
