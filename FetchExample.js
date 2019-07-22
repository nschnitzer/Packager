import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class FetchExample extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {isLoading: true};
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson.movies,
            }, function(){

            });
        })
        .catch((error) => {
            console.error(error)
        });
    }


    render() {

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 1000, alignSelf: 'center'}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
        <View style={{flex: 1, paddingTop: 70, alignSelf: 'center' }}>
            <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => <Text>{item.title}, {item.releaseYear}
                </Text>}
                keyExtractor={({id}, index) => id}
            />
        </View>
        );
    }
}