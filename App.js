/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Tab } from './config/Navigation';
import FaceCount from './components/FaceCount';
import Chart from './components/Chart';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Tab />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
