import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { ListItem, Header } from 'react-native-elements';

const mastHeadPeople = [
	{
		name: 'Dr. Jagadeesh Kakarla',
		role: 'Mentor'
	},
	{
		name: 'Akhil Jasrotia',
		role: 'Front End Developer'
	},
	{
		name: 'Kenneth Karthik',
		role: 'UI/UX Designer'
	},
	{
		name: 'Nipun Bharti',
		role: 'Full Stack Developer'
	},
	{
		name: 'S Sai Yashovardhan',
		role: 'DevOps Engineer/IoT Developer'
	},
];

class MastHead extends Component {
	render() {
		return (
			<View>
				<View style={styles.container} />
				<View>
					{
						mastHeadPeople.map((l, i) => (
						  <ListItem
						    key={i}
						    title={l.name}
						    subtitle={l.role}
						  />
						))
					}
				</View>
			</View>
		);
	}
}

export default MastHead;

const styles = StyleSheet.create({
	container: {
		height: (Platform.OS == 'ios') ? 50 : 0,
		backgroundColor: 'white'
	}
})