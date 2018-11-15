import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button, ListItem } from 'react-native-elements';

class FaceRecognition extends Component {

	constructor(props) {
		super(props);

		this.state = {
			text: null,
			names: []
		};
	}

	componentDidMount() {
		this.setState({
			text: null,
			names: []
		})
	}

	fetchNames = () => {
		fetch('https://cromdev-server.herokuapp.com/face_match',{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				imageName: this.state.text
			})
		})
		.then(res => res.json())
		.then(resJson => {
			console.log(resJson);
			let names = resJson.filter(res => res.face_name);
			console.log(names);
			this.setState({
				names: names
			});
		})

	}

	render() {
		return (
			<View style={styles.test}>
				<TextInput 
					style={styles.textBox}
					placeholder="Enter the name of the file"
					onChangeText={(text) => this.setState({text})}
				/>
				<Button
					title='Submit'
					onPress={this.fetchNames}
					buttonStyle={{backgroundColor: '#6058d8'}}
				/>
				<View>
					{
						this.state.names.map((li, i) => (
							<ListItem
								key={i}
								title={li.face_name}
							/>
						))
					}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	test: {
		flex: 1,
		paddingTop: 60,
	},
	textBox: {
		height: 50,
		fontSize: 25,
		paddingLeft: 40
	}
});

export default FaceRecognition;