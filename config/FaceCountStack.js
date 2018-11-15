import React from 'react';
import { StackNavigator } from 'react-navigation';
import FaceCount from  '../components/FaceCount';
import MetricScreen from  '../components/MetricScreen';

const FaceCountStack = StackNavigator({
	FaceCount: {
		screen: FaceCount,
	},
	MetricScreen: {
		screen: MetricScreen,
	},
});

export default FaceCountStackComp = () => {
	return <FaceCountStack />
}