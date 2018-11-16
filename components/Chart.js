import React, {Component} from 'react';
import { View, Text, StyleSheet,ScrollView,Dimensions } from 'react-native';
import { LineChart, Grid ,PieChart, YAxis } from 'react-native-svg-charts';
import LineChartComponent from './LineChart';
import PieChartComponent from './PieChart';
import Legend from './Legend';


var { height, width } = Dimensions.get('window');
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
					<View style={{width:width,flexDirection:'row',justifyContent:'space-around', marginTop: 10}}>	
						<Legend color="#F5B700" text="Happy" />	 
						<Legend color="#484848" text="Sad" />	    
						<Legend color="#008BF8" text="Calm" />	    
						<Legend color="#DC0073" text="Angry" />
						<Legend color="#89FC00" text="Confused" />	 
					</View>           
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