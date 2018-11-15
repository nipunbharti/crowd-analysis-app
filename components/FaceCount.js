import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class FaceCount extends Component {
	render() {
		return (
			<View style={styles.test}>
				<Text>Face count here</Text>
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

export default FaceCount;