import React from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

import { Container } from './styles';

const Main = () => (
    <Container>
        <StatusBar barStyle="light-content" />
        <MapboxGL.MapView
            centerCoordinate={[-49.6446024, -27.2108001]}
            style={{ flex: 1 }}
            styleURL={MapboxGL.StyleURL.Dark}
        />
    </Container>
);

Main.navigationOptions = {
    header: null,
};

export default Main;