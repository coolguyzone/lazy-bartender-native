import { Text, Modal, View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

function RecipeModal({ recipeTitle, recipeIngredients, recipeInstructions, modalVisible, setModalVisible }) {

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{recipeTitle}</Text>
          <Text>Ingredients: {recipeIngredients}</Text>
          <Text>Instructions: {recipeInstructions}</Text>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text>Here is a pressable</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

export default RecipeModal;

const styles = StyleSheet.create({
  ceneteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    marginTop: 280,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    color: "green",
    fontSize: 24,
  },
});
