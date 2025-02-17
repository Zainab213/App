



import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <ImageBackground
      source={{
        uri: 'https://th.bing.com/th/id/R.66a0566adfb8f1c4e8dba2819b59d031?rik=FVNA9awZcPwg6A&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f10%2fGrey-Texture-Background-and-Wallpaper.jpg&ehk=%2bDneVYUhoN2CrSUD2szwsjNhyWSaDQkT%2f5tQE2ipbME%3d&risl=&pid=ImgRaw&r=0',
      }}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.heading}>ClickNCount</Text>
{/* 
        <Button title='go to profile' onPress={() => navigation.navigate('Counter')}></Button> */}

<View style={styles.startButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Counter')} style={styles.startButton}>
<Text style={styles.startButtonText}>
    {'Starting Counting'}
</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.startButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Weather')} style={styles.startButton}>
<Text style={styles.startButtonText}>
    {'Check Weather'}
</Text>
        </TouchableOpacity>
        </View>
        
      </View>
    </ImageBackground>
  );
}

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
    fontSize: 45,
    fontWeight: 'bold',
    color: '#b9bec5',
    letterSpacing: 3,
    marginTop: 314,
  },

  startButtonContainer: { 
    flex: 1, 
    justifyContent: 'flex-end',  
    alignItems: 'center',
    marginBottom: 50,  
  },

  startButton: {
        backgroundColor: 'rgba(92, 92, 92, 0.7)',
        paddingVertical: 17,
        paddingHorizontal: 18,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#6b7280',
        
  },
  startButtonText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'rgba(219, 219, 219, 0.77)',
  },
});
