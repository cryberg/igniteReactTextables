import { StackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import TextablesScreen from '../Containers/TextablesScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  TextablesScreen: { screen: TextablesScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  // headerMode: 'none',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
