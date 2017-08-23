import React from 'react';
import { Text, View } from 'react-native';

//Import Component
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    //Props
    let album = {
        title: props.album.title,
        artist: props.album.artist,
        url: props.album.url,
        image: props.album.image,
        thumbnail: props.album.thumbnail_image
    };

    //Render
    return (
        <Card>
            <CardSection>
                <View>

                </View>
                <View style={styles.headerContentStyle}>
                    <Text> {album.title} </Text>
                    <Text> {album.artist} </Text>
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
    }
};

export default AlbumDetail;