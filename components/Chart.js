import React, {Component} from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { LineChart, Grid ,PieChart } from 'react-native-svg-charts';

class Chart extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

		const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))

		return (
			<ScrollView>
				<View style={styles.mainContainer}>
					<View style={styles.heading}>
						<Text style={styles.headingText}>Face Count and Analysis</Text>
					</View>
					<LineChart
		                style={{ height: 200,width:350}}
		                data={ data }
		                svg={{ stroke: 'rgb(134, 65, 244)' }}
		                contentInset={{ top: 20, bottom: 20 }}
		            >
		                <Grid/>
		            </LineChart>
		            <View style={styles.heading}>
						<Text style={styles.headingText}>Sentiment Analysis</Text>
					</View>
		            <PieChart
	                style={ { height: 200 ,width:200 } }
	                data={ pieData }
	            	/>
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
		paddingVertical:10,
	},
	headingText:{
		textAlign:'center',
		fontSize:20,
	}
});

export default Chart;