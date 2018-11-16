import React from 'react';
import { TabNavigator } from 'react-navigation';
import FaceCountStackComp from './FaceCountStack';
import FaceRecognition from  '../components/FaceRecognition';
import MastHead from  '../components/MastHead';
import Chart from  '../components/Chart';

export const Tab = TabNavigator({
	FaceCount: {
		screen: FaceCountStackComp,
	},
	Chart: {
		screen: Chart,
	},
	FaceRecognition: {
		screen: FaceRecognition,
	},
	MastHead: {
		screen: MastHead,
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