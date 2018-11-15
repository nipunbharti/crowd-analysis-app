import React, {Component} from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

class MetricScreen extends Component {
	render() {
		const { navigation } = this.props;
		const metrics = navigation.getParam('metrics', 'Not found');
		console.log(metrics);
		return (
			<ScrollView style={styles.test}>
				<View style={styles.flexCard}>
					<View style={styles.card}>
						<Text style={styles.ageHigh}>Age high</Text>
						<Text style={styles.ageHighNumber}>{metrics.age_range_high}</Text>
					</View>
					<View style={styles.card}>
						<Text style={styles.ageHigh}>Age low</Text>
						<Text style={styles.ageHighNumber}>{metrics.age_range_low}</Text>
					</View>
				</View>
				<View style={styles.flexCard}>
					<View style={styles.card}>
						<Text style={styles.ageHigh}>Emotion</Text>
						<Text style={styles.ageHighNumber}>{metrics.emotion1_value}</Text>
					</View>
					<View style={styles.card}>
						<Text style={styles.ageHigh}>Gender</Text>
						<Text style={styles.ageHighNumber}>{metrics.gender_value}</Text>
					</View>
				</View>
				<View style={styles.flexCard}>
					<View style={styles.card}>
						<Text style={styles.ageHigh}>Smiling?</Text>
						<Text style={styles.ageHighNumber}>{metrics.smile_value == true ? "Yes" : "No"}</Text>
					</View>
					<View style={styles.card}>
						<Text style={styles.ageHigh}>Mustache?</Text>
						<Text style={styles.ageHighNumber}>{metrics.mustache_value == true ? "Yes" : "No"}</Text>
					</View>
				</View>
				<View style={styles.flexCard}>
					<View style={styles.card}>
						<Text style={styles.ageHigh}>Eyeglasses?</Text>
						<Text style={styles.ageHighNumber}>{metrics.eyeglasses_value == true ? "Yes" : "No"}</Text>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	test: {
		flex: 1,
	},
	flexCard: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 25,
	},
	card: {
		width: 150,
		height: 150,
		borderRadius: 5,
		backgroundColor: 'white',
		alignItems: 'center'
	},
	ageHigh: {
		flex: 1,
		paddingTop: 10,
		fontSize: 28, 
	},
	ageHighNumber: {
		flex: 1.3,
		fontSize: 50
	}
});

export default MetricScreen;