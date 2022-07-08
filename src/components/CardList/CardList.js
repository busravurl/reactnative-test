import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './CardList.style';

const CardList = props => {
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.imageCard} source={{uri: props.uri}} />
                <View style={styles.card}> 
                    <Text style={styles.title}>{props.firstName} ,</Text>
                    <Text style={styles.title}> {props.age}</Text>
                </View>
            </TouchableOpacity>
            
        </SafeAreaView>
    );
};

export default CardList;
