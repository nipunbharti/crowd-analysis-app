import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Chart extends Component {
	render() {
		return (
			<View style={styles.test}>
				<Text>Charts here</Text>
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

export default Chart;