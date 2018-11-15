import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MetricScreen extends Component {
	render() {
		const { navigation } = this.props;
		const metrics = navigation.getParam('metrics', 'Not found');
		console.log(metrics);
		return (
			<View style={styles.test}>
				<Text>MetricScreens here</Text>
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

export default MetricScreen;