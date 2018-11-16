import React, {Component} from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { LineChart, Grid ,PieChart, YAxis } from 'react-native-svg-charts';
import LineChartComponent from './LineChart';
import PieChartComponent from './PieChart';

class Chart extends Component {

	render() {
		return (
			<ScrollView>
				<View style={styles.mainContainer}>
					<View style={styles.heading}>
						<Text style={styles.headingText}>Face Count and Analysis</Text>
					</View>
					<LineChartComponent />
		            <View style={styles.heading}>
						<Text style={styles.headingText}>Sentiment Analysis</Text>
					</View>
					<PieChartComponent />		            
	            </View>
            </ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
	    alignItems: 'center',
	    padding:15,
	},
	heading:{
		marginTop:40,
	},
	headingText:{
		textAlign:'center',
		fontSize:20,
	}
});

export default Chart;