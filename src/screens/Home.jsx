import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Catogories from '../components/Categories';
import {useEffect, useState} from 'react';
import axios from 'axios'
import Recipies from '../components/recipies';


export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Beef');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getcategories();
  }, [])

  const getcategories = async () => {
    try {
      const getresponse = await axios.get(
        'https://themealdb.com/api/json/v1/1/categories.php',
      );
      console.log('got categories:', getresponse.data);
      if (getresponse && getresponse.data) {
        setCategories(getresponse.data.categories)
      }
    } catch (err) {
      console.log('error:', err.message);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 30}}
        className="gap-y-6 pt-2">
        {/* avator and bellicon */}
        <View className="flex-row justify-between items-center mx-3 mb-2">
          <Image
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg',
            }}
            className="h-20 w-20"
          />
          <Ionicons name="notifications-outline" size={39} />
        </View>
        {/* some greetings */}
        <View className="mx-4 gap-y-2 mb-7 mt-3">
          <Text className="text-2xl text-neutral-600">Hello, zainab!</Text>
          <View>
            <Text className="font-semibold text-neutral-600 text-4xl">
              Make your own food
            </Text>
          </View>
          <Text className="font-semibold text-neutral-600 text-4xl">
            stay at <Text className="text-amber-400">home</Text>
          </Text>
        </View>
        {/* search bar */}
        <View className="mx-4 mb-4 flex-row items-center rounded-full bg-black/5 p-[6px] ">
          <TextInput
            placeholder="search any recipie"
            placeholderTextColor={'gray'}
            className="text-lg mb-1 pl-3 flex-1 tracking-wider"
          />
          <View className="bg-white rounded-full p-3">
            <Ionicons name="search-outline" size={25} />
          </View>
        </View>
        {/* catogories */}
        <View>
         {categories.length>0 && <Catogories
          categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />}
        </View>
        {/* recipies */}
        <View>
          <Recipies />
        </View>
      </ScrollView>
    </View>
  );
}
