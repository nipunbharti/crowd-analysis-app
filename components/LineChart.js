import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart, Grid, YAxis } from 'react-native-svg-charts';

class LineChartComponent extends Component {

	render() {

		let contentInset = { top: 20, bottom: 20 };
		console.log(this.props.faceCount);

		return (
			<View style={{flex: 1, flexDirection: 'row', padding: 10}}>
				<YAxis
                    data={ this.props.faceCount }
                    contentInset={ contentInset }
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={ 10 }
                    formatLabel={ value => `${value}` }
                />
				<LineChart
	                style={{ height: 200,width:350}}
	                data={ this.props.faceCount }
	                svg={{ stroke: 'rgb(134, 65, 244)' }}
	                contentInset={{ top: 20, bottom: 20 }}
	            >
	                <Grid/>
	            </LineChart>
            </View>
		);
	}
}

export default LineChartComponent;