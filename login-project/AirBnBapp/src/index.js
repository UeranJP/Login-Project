import React from 'react';

import Routes from './routes';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

const App = () => <Routes />;
MapboxGL.setAccessToken('pk.eyJ1IjoidWVyYW4iLCJhIjoiY2tnZHh6dmJyMTVmcjJ6bWlnODNjYmFseiJ9.bMcd6IU5X8VOKB0-x2SHrQ');

export default App;