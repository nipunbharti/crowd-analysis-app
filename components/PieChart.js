import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

class PieChartComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			sentimentAnalysis: []
		};
	}

	componentDidMount() {
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

	render() {

		let colors = ['#F5B700', '#484848', '#008BF8', '#DC0073', '#89FC00'];
		const pieData = this.state.sentimentAnalysis
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: colors[index],
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))
		const contentInset = { top: 20, bottom: 20 };

		return (
			<View style={{flex: 1, flexDirection: 'row', padding: 10}}>
				<PieChart
	                style={ { height: 200 ,width:200 } }
	                data={ pieData }
            	/>
            </View>
		);
	}
}

export default PieChartComponent;