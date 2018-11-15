import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

class FaceCount extends Component {

	constructor(props) {
		super(props);

		this.state = {
			currentCount: null,
		}
	}

	componentDidMount() {
		this.refreshCount();
	}

	refreshCount = () => {
		fetch('http://localhost:8000/face_count')
			.then(res => res.json())
			.then(resJson => {
				console.log(resJson);
				let latestDate = resJson.filter(obj => obj.image_name).reduce(function (a, b) { return a > b ? a : b; });
				this.setState({
					currentCount: latestDate.face_count
				});
			})
			.catch(err => console.log(err));
	}

	render() {
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
		paddingTop: 45,
		paddingRight: 30,
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
	}
});

export default FaceCount;