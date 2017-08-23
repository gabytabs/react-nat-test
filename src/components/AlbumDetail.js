import React from 'react';
import { Text, View, Image } from 'react-native';

//Import Component
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ( { album } ) => {
    //Props
    let { title, artist, thumbnail_image } = album;
    //Styling cleaning
    let { thumbnailStyle, headerContentStyle } = styles;

    //Render
    return (
        <Card>
            <CardSection>
                <View>

                    <Image
                        style={ thumbnailStyle }
                        source={{ uri: thumbnail_image }}
                    />

                </View>
                <View style={ headerContentStyle }>
                    <Text> { title } </Text>
                    <Text> { artist } </Text>
                </View>
            </CardSection>
        </Card>
    );
};

//Styling
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    }
};

export default AlbumDetail;