import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart, Grid, YAxis } from 'react-native-svg-charts';

class LineChartComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			faceCount: []
		};
	}

	componentDidMount() {
		fetch('https://cromdev-server.herokuapp.com/face_count')
			.then(res => res.json())
			.then(resJson => {
				let faceCountData = resJson.reverse().splice(0, 20).map(res => res.face_count);
				this.setState({
					faceCount: faceCountData
				});
			})
	}

	render() {

		const contentInset = { top: 20, bottom: 20 };

		return (
			<View style={{flex: 1, flexDirection: 'row', padding: 10}}>
				<YAxis
                    data={ this.state.faceCount }
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
	                data={ this.state.faceCount }
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