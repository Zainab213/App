// import {View, Text, TouchableOpacity} from 'react-native';

// export default function Weather({navigation}) {
//   return (
//     <View className='flex-1 justify-center items-center  bg-green-600'>
    
//         <Text className=''>Wheather</Text>
//           <TouchableOpacity
//             onPress={() => {
//               console.log('Back button pressed!');
//               navigation.navigate('Home');
//             }}
//              >
//             <Text>{'\u2190'}</Text>
//           </TouchableOpacity>
    
//     </View>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
// import axios from 'axios';

// // Import NativeWind classes
// import { tw } from 'nativewind';

// export default function Weather({ navigation }) {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const apiKey = 'YOUR_OPENWEATHER_API_KEY'; // Replace with your OpenWeather API Key
//   const city = 'London'; // You can change this to any city

//   // Fetch weather data from OpenWeather API
//   useEffect(() => {
//     axios
//       .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//       .then((response) => {
//         setWeatherData(response.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <View style={tw`flex-1 justify-center items-center`}>
//         <Text>Loading weather...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={tw`flex-1 justify-center items-center`}>
//         <Text>Error: {error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={tw`flex-1`}>
//       <ImageBackground
//         source={{ uri: 'https://your-background-image-url.com' }}
//         style={tw`flex-1 justify-center items-center`}
//         resizeMode="cover"
//       >
//         <View style={tw`bg-black bg-opacity-50 p-5 rounded-lg`}>
//           <Text style={tw`text-4xl font-bold text-white`}>{weatherData.name}</Text>
//           <Text style={tw`text-6xl font-bold text-white`}>{weatherData.main.temp}°C</Text>
//           <Text style={tw`text-xl text-white`}>{weatherData.weather[0].description}</Text>
//         </View>

//         <TouchableOpacity onPress={() => navigation.navigate('Home')} style={tw`absolute top-10 left-5 bg-black bg-opacity-60 p-3 rounded-full`}>
//           <Text style={tw`text-2xl text-white`}>{'\u2190'} Back</Text>
//         </TouchableOpacity>
//       </ImageBackground>
//     </View>
//   );
// }



import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

export default function Weather({ navigation }) {
  return (
    <View className="flex-1">
      <ImageBackground
        source={{ uri: 'https://th.bing.com/th/id/R.66a0566adfb8f1c4e8dba2819b59d031?rik=FVNA9awZcPwg6A&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f10%2fGrey-Texture-Background-and-Wallpaper.jpg&ehk=%2bDneVYUhoN2CrSUD2szwsjNhyWSaDQkT%2f5tQE2ipbME%3d&risl=&pid=ImgRaw&r=0' }} // Replace with your image URL
        className="flex-1 justify-center items-center"
        resizeMode="cover"
      >
        <View className="bg-black bg-opacity-50 p-5 rounded-lg">
          <Text className="text-4xl font-bold text-white">Weather</Text>
          <Text className="text-6xl font-bold text-white">25°C</Text>
          <Text className="text-xl text-white">Clear Sky</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className="absolute top-10 left-5 bg-black bg-opacity-60 p-3 rounded-full"
        >
          <Text className="text-2xl text-white">{'\u2190'} Back</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
