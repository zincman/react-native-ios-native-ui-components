/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	NativeModules,
	TouchableOpacity,
} from 'react-native';

export default class ocPresentViewcontroller extends Component {
	_onPress(){
		NativeModules.AppDelegate.pushWebView()
	}
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this._onPress}>
					<Text>Open the Webview</Text>
				</TouchableOpacity>
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

});

AppRegistry.registerComponent('ocPresentViewcontroller', () => ocPresentViewcontroller);
