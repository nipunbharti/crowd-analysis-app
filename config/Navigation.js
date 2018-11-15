import React from 'react';
import { TabNavigator } from 'react-navigation';
import FaceCount from  '../components/FaceCount';
import FaceRecognition from  '../components/FaceRecognition';
import Chart from  '../components/Chart';

export const Tab = TabNavigator({
	FaceCount: {
		screen: FaceCount,
	},
	Chart: {
		screen: Chart,
	},
	FaceRecognition: {
		screen: FaceRecognition,
	},
}, {
	tabBarPosition: 'bottom',
	swipeEnabled: true,
	tabBarOptions: {
		activeTintColor: '#f2f2f2',
		activeBackgroundColor: '#2EC4B6',
		inactiveTintColor: '#666',
		labelStyle: {
			fontSize: 12,
			padding: 12
		}
	}
});