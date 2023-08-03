import { ExpoConfig, ConfigContext } from 'expo/config';
export const VERSION = '1.0.0';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'React Native Expo Base App',
  slug: 'react-native-base-app',
  version: VERSION,
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'cl.sokkay.reactnativebaseapp',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'cl.sokkay.reactnativebaseapp',
  },
  web: {
    favicon: './assets/favicon.png',
  },
  experiments: {
    tsconfigPaths: true,
  },
});
