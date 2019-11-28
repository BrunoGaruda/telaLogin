import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

export default class app extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi There</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff5722',
    flex: 1,

  }
})