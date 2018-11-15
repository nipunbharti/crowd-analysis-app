import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class FaceRecognition extends Component {
	render() {
		return (
			<View style={styles.test}>
				<Text>Face recognition here</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	test: {
		flex: 1,
		justifyContent: 'center',
	    alignItems: 'center',
	}
});

export default FaceRecognition;