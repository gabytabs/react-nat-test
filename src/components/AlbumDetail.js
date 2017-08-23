import React from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = (props) => {
    //Props
    let album = {
        title: props.album.title
    };

    //Render
    return (
        <View>
            <Text> {album.title} </Text>
        </View>
    );
};

export default AlbumDetail;