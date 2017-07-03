/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import MapView from './src/MapView'
const { height, width } = Dimensions.get('window')

export default class iosNativeUiComponents extends Component {
	static region = {
		latitude: 37.48,
		longitude: -122.16,
		latitudeDelta: 0.1,
		longitudeDelta: 0.1,
	}
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} pitchEnabled={false} region={iosNativeUiComponents.region} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	map: {
		// flex: 1,
		height: height,
		width: width,
	},
});

AppRegistry.registerComponent('iosNativeUiComponents', () => iosNativeUiComponents);
