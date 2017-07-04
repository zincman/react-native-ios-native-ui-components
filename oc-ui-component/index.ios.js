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
	TouchableOpacity,
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

	onRegionChange(event){
		console.log(event)
	}

	render() {
		return (
			<View style={styles.container}>
				{/* <TouchableOpacity style={styles.button} onPress={()=>{alert("aa")}}>
					<Text style={styles.txt}>Open The Webview</Text>
				</TouchableOpacity> */}
				<MapView
					style={styles.map}
					pitchEnabled={false}
					region={iosNativeUiComponents.region}
					onChange={this.onRegionChange} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	button: {
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
	},
	txt: {
		fontSize: 26,
		color: "#0000dd",
	},
	map: {
		height: height-200,
		width: width,
	},
});

AppRegistry.registerComponent('iosNativeUiComponents', () => iosNativeUiComponents)
