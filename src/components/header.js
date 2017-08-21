//import libraries
import React from 'react';
import { Text, View } from 'react-native';

//make component
const Header = (props) => {
  //this is a prop
  //without this we can use styles.textStyle
  const { textStyle, viewStyle } = styles;

  return (
    // View is a like a div tag
    <View style={viewStyle}>
        <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};

const styles = {
    viewStyle: {
      backgroundColor: '#f8c458',
      //Horizontal
      justifyContent: 'center',
      //Vertical
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      // how tall and wide a shadow should be
      shadowOffset: { width: 0, height: 2 },
      // how dark the shadow is
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
        fontSize: 30
    }
};

//make the components available to other parts of the app
export default Header;