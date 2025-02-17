import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const Counter = ({navigation}) => {
  const [count, setCount] = useState(0);

  return (
    <ImageBackground
      source={{
        uri: 'https://th.bing.com/th/id/R.66a0566adfb8f1c4e8dba2819b59d031?rik=FVNA9awZcPwg6A&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f10%2fGrey-Texture-Background-and-Wallpaper.jpg&ehk=%2bDneVYUhoN2CrSUD2szwsjNhyWSaDQkT%2f5tQE2ipbME%3d&risl=&pid=ImgRaw&r=0',
      }}
      style={styles.background}
      resizeMode="cover">
      <TouchableOpacity
        onPress={() => {
          console.log('Back button pressed!');
          navigation.navigate('Home');
        }}
        style={styles.backButton} >
        <Text style={styles.backButtonText}>{'\u2190'}</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.heading}>ClickNCount</Text>

        <View style={styles.counterContainer}>
          <Text style={styles.counter}>{count}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => setCount(count + 1)}
            style={[styles.button, {backgroundColor: '#bdc0c4'}]}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setCount(count - 1)}
            style={[styles.button, {backgroundColor: '#bdc0c4'}]}>
            <Text style={styles.buttonText}>{'\u2212'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => setCount(0)}
          style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#b9bec5',
    letterSpacing: 3,
    marginBottom: 90,
    marginTop: 90,
  },

  counterContainer: {
    width: 150,
    height: 150,
    backgroundColor: '#00000090',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 87,
    marginBottom: 70,
    shadowColor: '#b9bec5',
  },
  counter: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#b9bec5',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 100,
    marginBottom: 75,
  },
  button: {
    width: 84,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 40,
    fontWeight: 'semibold',
    color: '#374151',
  },
  resetButton: {
    backgroundColor: '#00000090',
    paddingVertical: 17,
    paddingHorizontal: 45,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#6b7280',
    shadowColor: '#ffffff',
  },
  resetButtonText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'gray',
  },

  backButton: {
    // backgroundColor: 'rgba(126, 126, 126, 0.3)',
    // paddingVertical: 17,
    // paddingHorizontal: 45,
    // borderRadius: 12,
    // borderWidth: 1,
    // borderColor: '#6b7280',
    // shadowColor: '#ffffff',
    // position: 'absolute',
    // top: -23,
    position: 'absolute',
  top: 0, // Adjust according to your design
  left: 17,
  paddingBottom: 50, 
  zIndex: 10, //
    backgroundColor: "transparent",
    elevation: 10,
  },


  backButtonText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'rgba(173, 173, 173, 0.85)',
  },
});

export default Counter;
