import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';
import { CategoriesProps } from '../types';

export default function Catogories({
  categories,
  activeCategory,
  handleChangeCategory,
}: CategoriesProps) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="gap-x-4"
        contentContainerStyle={{paddingHorizontal: 15}}>
        {categories.map((cat, index) => {
          let isActive = cat.strCategory == activeCategory;
          let activebuttonClass = isActive ? 'bg-amber-400' : 'bg-black/10';
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleChangeCategory(cat.strCategory)}
              className="flex items-center mt-2"
              style={{marginRight: 15}}>
              <View className={'rounded-full p-[6px]  ' + activebuttonClass}>
                <FastImage
                  source={{
                    uri: cat.strCategoryThumb,
                    priority: FastImage.priority.high,
                  }}
                  style={{width: 50, height: 50, borderRadius: 25}}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </View>
              <Text className="text-neutral-600 ">{cat.strCategory}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}
