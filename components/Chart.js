import React, {Component} from 'react';
import { View, Text, StyleSheet,ScrollView,Dimensions } from 'react-native';
import { LineChart, Grid ,PieChart, YAxis } from 'react-native-svg-charts';
import { Icon } from 'react-native-elements';
import LineChartComponent from './LineChart';
import PieChartComponent from './PieChart';
import Legend from './Legend';


var { height, width } = Dimensions.get('window');
class Chart extends Component {

	constructor(props) {
		super(props);

		this.state = {
			sentimentAnalysis: [],
			faceCount: []
		};
	}

	componentDidMount() {
		this.refreshCharts();
	}

	refreshCharts = () => {
		this.collectSentimentAnalysis();
		this.collectFaceCount();
	}

	collectSentimentAnalysis = () => {
		fetch('https://cromdev-server.herokuapp.com/face_count')
			.then(res1 => res1.json())
			.then(res1Json => {
				let faceCountData = res1Json.reverse().splice(0, 20).map(res => res.image_name);
				fetch('https://cromdev-server.herokuapp.com/face_metrics')
					.then(res2 => res2.json())
					.then(res2Json => {
						let setOfPeople = res2Json.filter(peep => faceCountData.includes(peep.image_name));
						let happyCount = setOfPeople.filter(peep => peep.emotion1_value == "HAPPY");
						let sadCount = setOfPeople.filter(peep => peep.emotion1_value == "SAD");
						let calmCount = setOfPeople.filter(peep => peep.emotion1_value == "CALM");
						let angryCount = setOfPeople.filter(peep => peep.emotion1_value == "ANGRY");
						let confusedCount = setOfPeople.filter(peep => peep.emotion1_value == "CONFUSED");
						let finalCount = [happyCount.length, sadCount.length, calmCount.length, angryCount.length, confusedCount.length];
						this.setState({
							sentimentAnalysis: finalCount
						});
					})
			})
			.catch(err => console.log(err));
	}

	collectFaceCount = () => {
		fetch('https://cromdev-server.herokuapp.com/face_count')
			.then(res => res.json())
			.then(resJson => {
				let faceCountData = resJson.reverse().splice(0, 20).map(res => res.face_count);
				faceCountData.reverse();
				this.setState({
					faceCount: faceCountData
				});
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<ScrollView>
				<View style={styles.mainContainer}>
					<View style={styles.heading}>
						<Text style={styles.headingText}>Face Count and Analysis</Text>
					</View>
					<LineChartComponent faceCount={this.state.faceCount} />
		            <View style={styles.heading}>
						<Text style={styles.headingText}>Sentiment Analysis</Text>
					</View>
					<PieChartComponent sentimentAnalysis={this.state.sentimentAnalysis} />
					<View style={{width:width,flexDirection:'row',justifyContent:'space-around', marginTop: 10}}>	
						<Legend color="#F5B700" text="Happy" />	 
						<Legend color="#484848" text="Sad" />	    
						<Legend color="#008BF8" text="Calm" />	    
						<Legend color="#DC0073" text="Angry" />
						<Legend color="#89FC00" text="Confused" />	 
					</View>
					<View style={styles.refreshView}>
						<Icon name='refresh' size={30} onPress={this.refreshCharts} />
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
	},
	refreshView: {
		width: width,
		paddingRight: 20,
		alignItems: 'flex-end',
		marginTop: 10
	},
});

export default Chart;