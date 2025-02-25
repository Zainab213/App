import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

export default function RecipeDetail(props) {
  console.log('RecipeDetail received params:', props.route.params);

  let item = props.route.params;
  const [isFavourite, setFavourite] = useState(false);
  const navigation = useNavigation();
  const [meal, setMeal] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getMealDta(item.idMeal);
  }, []);

  const getMealDta = async id => {
    try {
      const getresponse = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      );
      console.log('got MealData:', getresponse.data);
      if (getresponse && getresponse.data) {
        setMeal(getresponse.data.meals[0]);
        setLoading(false);
      }
    } catch (err) {
      console.log('error:', err.message);
    }
  };

  const ingredientsIndexes = (meal) => {
    if (!meal) return [];
    let indexes = [];
    
    for (let i = 1; i <= 20; i++) {
        if (meal['strIngredient' + i]) {
            indexes.push(i);
        }
    }
    
    return indexes;
};


  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 30}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      {/* recipesImage */}
      <View className="flex-row justify-center">
        <FastImage
          //   uri={item.strMealThumb}
          source={{uri: item.strMealThumb}}
          style={{height: 430, width: 385, borderRadius: 35, marginTop: 4}}
        />
      </View>

      {/* back button */}
      <View className="w-full absolute flex-row justify-between items-center pt-14">
        <TouchableOpacity
          className="p-2 rounded-full ml-5 bg-white"
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="#fbbf24" />
        </TouchableOpacity>
        <TouchableOpacity
          className="p-2 rounded-full mr-5 bg-white"
          onPress={() => setFavourite(!isFavourite)}>
          <Ionicons
            name="heart"
            size={35}
            color={isFavourite ? 'red' : 'gray'}
          />
        </TouchableOpacity>
      </View>

      {/* name and area */}

      <View className="px-4 flex justify-between space-y-4 pt-8">
        <Text className="text-2xl font-bold flex-1 mb-1 text-neutral-700">
          {meal?.strMeal}
        </Text>
        <Text className="text-xl font-bold mb-3 flex-1 text-neutral-500">
          {meal?.strArea}
        </Text>
      </View>
      {/* des */}
      <View className="flex-row justify-around">
        <View className="flex rounded-full bg-amber-400 p-2">
          <View className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
            <Ionicons
              name="time-outline"
              size={32}
              strokeWidth={2.5}
              className="font-bold"
              color="#525252"
            />
          </View>
          <View className="flex items-center py-2 space-y-1">
            <Text className="text-sm font-bold text-neutral-700">35</Text>
            <Text className="text-sm font-bold text-neutral-700">Mins</Text>
          </View>
        </View>
        <View className="flex rounded-full bg-amber-400 p-2">
          <View className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
            <Ionicons
              name="people"
              size={32}
              strokeWidth={2.5}
              className="font-bold"
              color="#525252"
            />
          </View>
          <View className="flex items-center py-2 space-y-1">
            <Text className="text-sm font-bold text-neutral-700">03</Text>
            <Text className="text-sm font-bold text-neutral-700">Servings</Text>
          </View>
        </View>
        <View className="flex rounded-full bg-amber-400 p-2">
          <View className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
            <Ionicons
              name="flame"
              size={32}
              strokeWidth={2.5}
              className="font-bold"
              color="#525252"
            />
          </View>
          <View className="flex items-center py-2 space-y-1">
            <Text className="text-sm font-bold text-neutral-700">103</Text>
            <Text className="text-sm font-bold text-neutral-700">Cal</Text>
          </View>
        </View>
        <View className="flex rounded-full bg-amber-400 p-2">
          <View className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
            <Ionicons
              name="albums"
              size={32}
              strokeWidth={2.5}
              className="font-bold"
              color="#525252"
            />
          </View>
          <View className="flex items-center py-2 space-y-1">
            <Text className="text-sm font-bold text-neutral-700"></Text>
            <Text className="text-sm font-bold text-neutral-700">Easy</Text>
          </View>
        </View>
      </View>

   {/* ingredients */}
<View className="space-y-4">
  <Text className="font-bold flex-1 text-2xl ml-5 mt-4 text-neutral-700 mb-2">
    Ingredients
  </Text>

  <View className="ml-9 space-y-2">
    {ingredientsIndexes(meal).map((i) => {
      return (
        <View key={i} className="flex-row items-center space-x-3">
          {/* Yellow Dot */}
          <View className="bg-amber-300 h-3 w-3 rounded-full " />

          {/* Ingredient Texts */}
          <Text className="font-extrabold text-neutral-700 ml-4 mr-2 text-lg">
            {meal["strMeasure" + i]} 
          </Text>
          <Text className="font-medium text-neutral-600 text-base">
            {meal["strIngredient" + i]}
          </Text>
        </View>
      );
    })}
  </View>
</View>

{/* instructions */}
<View className="space-y-4">
  <Text 
    className="font-bold flex-1 text-2xl text-neutral-700 ml-6 mt-6 mb-2"
  >
    Instructions
  </Text>

  <Text 
    className="text-neutral-700 text-lg mx-6"
  >
    {meal?.strInstructions}
  </Text>
</View>


    </ScrollView>
  );
}