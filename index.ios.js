//iOS!!
// import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';

//Imported components
import Header from './src/components/header';

// Create a component
const App = function() {
  return(
    //Make headerText as props
    <Header headerText={'Albums'} />
  );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);