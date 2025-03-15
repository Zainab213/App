import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Catogories from '../components/Categories';
import { useEffect, useState} from 'react';
import axios from 'axios';
import Recipes from '../components/recipies';
import auth from '@react-native-firebase/auth';
import { meal, category } from '../types';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('Beef');
  const [categories, setCategories] = useState<category[]>([]);
  const [meals, setMeals] = useState<meal[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [userImage, setUserImage] = useState<string | undefined >(undefined)
  
  const [filteredMeals, setFilteredMeals] = useState<meal[]>([]);
  const [userName, setUserName] = useState<string>('');
  

  useEffect(() => {
    getcategories();
    getRecipes();
    fetchUserData();
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredMeals(meals);
    } else {
      const filtered = meals.filter(meal =>
        meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredMeals(filtered);
    }
  }, [searchQuery, meals]);

  const fetchUserData = () => {
    const user = auth().currentUser;
    if (user) {
      setUserName(user.displayName || 'Guest');
      
      setUserImage(
        
        user.photoURL || 'https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg'
      );
    }
  };

  

  const handleChangeCategory = (category: string) => {
    setSearchQuery('');
    getRecipes(category);
    setActiveCategory(category);
  };

  const getcategories = async () => {
    try {
      const response = await axios.get(
        'https://themealdb.com/api/json/v1/1/categories.php',
      );
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (err) {
      console.log('error:', (err as Error).message);
    }
  };

  const getRecipes = async (category = 'Beef') => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`,
      );
      if (response && response.data) {
        setMeals(response.data.meals);
        setFilteredMeals(response.data.meals);
      }
    } catch (err) {
      console.log('error:',(err as Error).message);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 30}}
        className="gap-y-6 pt-2">
        <View className="flex-row justify-between items-center mx-3">
          <Image source={{
            uri: userImage ?? 'https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg'}} style={{ width: 55, height: 56, borderRadius: 25 }} />
          <Ionicons name="notifications-outline" size={39} />
        </View>

        
        {/* Greeting Message */}
        <View className="mx-4 gap-y-2 mb-7 mt-3">
          <Text className="text-2xl text-neutral-600">Hello, {userName}!</Text>
          <Text className="font-semibold text-neutral-600 text-4xl">
            Make your own food
          </Text>
          <Text className="font-semibold text-neutral-600 text-4xl">
            stay at <Text className="text-amber-400">home</Text>
          </Text>
        </View>

        {/* Search any recipes */}
        <View className="mx-4 mb-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor={'gray'}
            className="text-lg mb-1 pl-3 flex-1 tracking-wider"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <View className="bg-white rounded-full p-3">
            <Ionicons name="search-outline" size={25} />
          </View>
        </View>

        {/* Categories */}
        <View>
          {categories.length > 0 && (
            <Catogories
              categories={categories}
              activeCategory={activeCategory}
              handleChangeCategory={handleChangeCategory}
            />
          )}
        </View>

        {/* Recipes */}
        <View>
          <Recipes meals={filteredMeals} categories={categories} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}