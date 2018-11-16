import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Icon, Button } from 'react-native-elements'

class FaceCount extends Component {

	constructor(props) {
		super(props);

		this.state = {
			currentCount: null,
			metricCollection: []
		}
	}

	componentDidMount() {
		this.refreshCount();
	}

	refreshCount = () => {
		fetch('https://cromdev-server.herokuapp.com/face_count')
			.then(res1 => res1.json())
			.then(res1Json => {
				let latestDate = res1Json.filter(obj => obj.image_name).reduce(function (a, b) { return a > b ? a : b; });
				this.setState({
					currentCount: latestDate.face_count
				});
				fetch('https://cromdev-server.herokuapp.com/face_metrics')
					.then(res2 => res2.json())
					.then(res2Json => {
						let setOfPeople = res2Json.filter(peep => peep.image_name == latestDate.image_name);
						this.setState({
							metricCollection: setOfPeople	
						});
						console.log(setOfPeople);
					})
			})
			.catch(err => console.log(err));
	}

	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.main}>
				<View style={styles.refreshView}>
					<Icon name='refresh' size={30} onPress={this.refreshCount} />
				</View>
				<View style={styles.countView}>
					<Text style={{fontSize: 25}}>Current count</Text>
					<Text style={{fontSize: 60, fontWeight: 'bold'}}>{this.state.currentCount}</Text>
				</View>
				<View style={styles.flatListContainer}>
					<FlatList
						data={this.state.metricCollection}
						renderItem={({item, index}) => 
							<Button 
								title={'Face '.concat(index+1)} 
								buttonStyle={styles.buttonColor} 
								onPress={() => this.props.navigation.navigate('MetricScreen', {
									metrics: item
								})} 
							/>
						}
						style={{paddingTop: 20}}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
	},
	refreshView: {
		flex: 0.1,
		paddingRight: 20,
		alignItems: 'flex-end',
	},
	countView: {
		flex: 0.2,
		alignItems: 'center',
		fontSize: 22,
		// borderWidth: 1
	},
	flatListContainer: {
		flex: 1,
	},
	buttonColor: {
		backgroundColor: '#6058d8',
		marginTop: 20
	}
});

export default FaceCount;