import React from 'react';
import { Text, View, Image } from 'react-native';

//Import Component
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ( { album } ) => {
    //Props
    let { title, artist, thumbnail_image, image, url } = album;
    //Styling cleaning
    let { thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    //Render
    return (
        <Card>
            <CardSection>
                <View style={ thumbnailContainerStyle }>

                    <Image
                        style={ thumbnailStyle }
                        source={{ uri: thumbnail_image }}
                    />

                </View>
                <View style={ headerContentStyle }>
                    <Text style={ headerTextStyle }> { title } </Text>
                    <Text> { artist } </Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={ imageStyle }
                    source={{ uri: image }}
                />
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
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;