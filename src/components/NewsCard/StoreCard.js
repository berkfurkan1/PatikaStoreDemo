import React from 'react';
import { Text,View,Image } from 'react-native';
import styles from './StoreCard.style';

const NewsCard = ({news}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: news.imgURL}}/>
            <View style={styles.inner_container}>
                <Text style={styles.title}>{news.title}</Text>
                <Text style={styles.price}>{news.price} </Text>
                <Text style={news.inStock ? styles.inStock : styles.outOfStock }>{news.inStock ? 'In Stock' : 'Out Of Stock'} </Text>
            </View>
        </View>
    )
}

export default NewsCard;