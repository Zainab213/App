import { View, Text, Pressable } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import FastImage from 'react-native-fast-image';
import Animated, {FadeInDown} from 'react-native-reanimated';
import Loading from './Loading';
import { useNavigation } from '@react-navigation/native';
import { category, meal } from '../types';
import { Mealprops } from '../types';

type RecipesProps = {
  categories: category[];
  meals: meal[];
};


export default function Recipes({categories, meals}: RecipesProps) {
    console.log("Categories:", categories);
    console.log("Meals:", meals);
    
  const navigation = useNavigation();
  return (
    <View className="mx-4 mt-5">
      <Text className="font-semibold text-neutral-600 mb-2 text-3xl">
        Recipes
      </Text>
<View>
    {
        categories.length==0 || meals.length==0 ? (
          <Loading size='large' className='mt-32' />
        ) : (
          <MasonryList
          data={meals as meal[]} 
          keyExtractor={(item) => (item as meal).idMeal}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => (
            <RecipeCard item={item as unknown as meal} index={i} navigation={navigation} />
          )}
        />
          
        )   
    }
      </View>
    </View>
  );
}


const RecipeCard = ({ item, index, navigation }: Mealprops) => {
  console.log("Item Type:", typeof item);
  console.log("Item Data:", item);
  console.log("Navigation:", navigation);
  let isEven = index % 2 === 0;
  return (
    <Animated.View entering={FadeInDown.delay(index*100).duration(600).springify().damping(12)}>
      <Pressable 
        style={{
          width: '100%', 
          paddingLeft: isEven ? 0 : 8, 
          paddingRight: isEven ? 8 : 0
        }} 
        className="flex justify-center  space-y-1 "
        onPress={() => {
          console.log("Navigating with item:", item);
          navigation.navigate('RecipeDetails', {...item});
        }}
        
      >
        <FastImage 
          source={{ uri: item.strMealThumb }}
          style={{
            width: '100%', 
            height: index%3==0?  220 : 300, 
            borderRadius: 30
          }}
          className="bg-black/5"
          sharedTransitionTag={item.strMeal}
        />

        <Text className=" text-neutral-600 ml-2 mb-3 text-base font-semibold">
           
        { item.strMeal.length>20? item.strMeal.slice(0,20)+"...": item.strMeal}
            
            
            </Text>
       
      </Pressable>
    </Animated.View>
  );
};
