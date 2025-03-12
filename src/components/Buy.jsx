import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Modal,
    TextInput,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore'

export default function Order({ route }) {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [modalVisible, setModalVisible] = useState(false); 
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setnumber] = useState('');

    const navigation = useNavigation();
    const { ingredients } = route.params || { ingredients: [] };

    const toggleSelection = (index) => {
        if (selectedIngredients.includes(index)) {
            setSelectedIngredients(selectedIngredients.filter(i => i !== index));
        } else {
            setSelectedIngredients([...selectedIngredients, index]);
        }
    };

    const handleOrderSubmit = async () => {
        if (!name || !address || !number) {
            Alert.alert("Error", "Please fill in all fields!");
            return;
        }
        try {
            await firestore().collection('orders').add(
                {
                    name,
                    number,
                    address,
                    createdAt: firestore.FieldValue.serverTimestamp() 
                }
            )
            Alert.alert("Success", "Your order has been placed!");
            setModalVisible(false);
            setName('');
            setAddress('');
            setnumber('');
            setSelectedIngredients([]);
        }catch (error) {
            Alert.alert("Error", 'Failed to place order')
            console.log('firebase errror:', error)
        }

 
    };

    return (
        <View className="flex-1 bg-white p-4">
            <View className="flex-row items-center justify-between mb-5 mt-9">
                <TouchableOpacity
                    className="p-2 rounded-full"
                    onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={30} color="#fbbf24" />
                </TouchableOpacity>
                <Text className="text-2xl font-bold text-neutral-600">Select Ingredients to Buy</Text>
                <View className="w-8" />
            </View>

            {/* Ingredients List */}
            {ingredients.length > 0 ? (
                <FlatList
                    data={ingredients}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View className="flex-row justify-between items-center p-3 border-b border-gray-300">
                            <Text className="text-lg text-neutral-700">{item}</Text>
                            <TouchableOpacity
                                className="px-4 py-2 rounded-lg"
                                style={{
                                    backgroundColor: selectedIngredients.includes(index) ? '#fbbf24' : 'gray',
                                }}
                                onPress={() => toggleSelection(index)}
                            >
                                <Text className="text-white font-semibold">Select</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            ) : (
                <Text className="text-center text-lg text-gray-500 mt-10">
                    No ingredients found!
                </Text>
            )}

            {/* Add to cart btn */}
            <TouchableOpacity
                className="bg-amber-500 py-4 w-40 rounded-md self-center mt-4"
                onPress={() => setModalVisible(true)}
            >
                <Text className="text-white text-center font-semibold text-xl">Order Now</Text>
            </TouchableOpacity>

            {/* order modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View className="flex-1 justify-center items-center bg-black/75 bg-opacity-50">
                    <View className="bg-white w-4/5 p-6 rounded-lg">
                        <Text className="text-xl font-bold text-center mb-4">Enter Your Details for Order</Text>

                        <TextInput
                            placeholder="Your Name"
                            className="border border-gray-300 p-2 rounded mb-3"
                            value={name}
                            onChangeText={setName}
                        />

                        <TextInput
                            placeholder="Address"
                            className="border border-gray-300 p-2 rounded mb-3"
                            value={address}
                            onChangeText={setAddress}
                        />

                        <TextInput
                            placeholder="Phone Number"
                            keyboardType="phone-pad"
                            className="border border-gray-300 p-2 rounded mb-3"
                            value={number}
                            onChangeText={setnumber}
                        />

                        <View className="flex-row justify-around mt-4">
                            <TouchableOpacity
                                className="bg-red-500 px-4 py-2 rounded-lg"
                                onPress={() => setModalVisible(false)}
                            >
                                <Text className="text-white font-semibold">Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                className="bg-amber-500 px-4 py-2 rounded-lg"
                                onPress={handleOrderSubmit}
                            >
                                <Text className="text-white font-semibold">Place Order</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
