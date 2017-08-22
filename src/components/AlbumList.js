import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//Class based component
class AlbumList extends Component {
    //this is the state
    state = { albums: [] };

    //As soon as this component will be rendered to the screen this method will fire up
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                this.setState({ albums: response.data });
            })
    }

    //Helper Method
    renderAlbums() {
        return (
            this.state.albums.map( album =>
                <Text> {album.title} </Text>
            )
        );
    }

    //View
    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;