import React, {useRef} from 'react';
import {Animated, ImageBackground, ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import {Text} from 'react-native-elements';

const Screen: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const {width: windowWidth} = useWindowDimensions();

  const images = [...Array(6)];

  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={1}>
          {images.map((_, index) => (
            <View style={{width: windowWidth, height: 250}} key={index}>
              <ImageBackground source={require('./../../assets/img1.jpg')} style={styles.card}>
                <View style={styles.textContainer}>
                  <Text style={styles.infoText}>{'Image - ' + index}</Text>
                </View>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((_, index) => {
            const width = scrollX.interpolate({
              inputRange: [windowWidth * (index - 1), windowWidth * index, windowWidth * (index + 1)],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });

            return <Animated.View key={index} style={[styles.normalDot, {width}]} />;
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const ScrollViewAnimationScreen: ScreenProps = {
  name: 'ScrollViewAnimation',
  component: Screen,
  options: {
    title: 'ScrollViewAnimation',
  },
};
