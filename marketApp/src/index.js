import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import Routes from './routes';

MapboxGL.setAccessToken('pk.eyJ1Ijoiam9zZWhwZW5hIiwiYSI6ImNrZXU5OW90YTFieXUydG9tYXBxcnloZzEifQ.YFlFCUKrn1p3CoYK78miSg');

const App = () => <Routes />;


export default App;