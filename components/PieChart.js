import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

class PieChartComponent extends Component {

	render() {

		let colors = ['#F5B700', '#484848', '#008BF8', '#DC0073', '#89FC00'];
		let pieData = this.props.sentimentAnalysis
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: colors[index],
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))
		let contentInset = { top: 20, bottom: 20 };

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