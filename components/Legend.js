import React, {Component} from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Legend extends React.Component{

	render() {
		return(
			<View style={{alignItems:'center'}}>
				<View style={{backgroundColor: this.props.color, width: 50, height: 20}}>
					</View>
				<Text>{this.props.text}</Text>
			</View>
		);
	}
}