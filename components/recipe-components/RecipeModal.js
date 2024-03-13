import { Text, Modal, View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

function RecipeModal({ recipeTitle, recipeIngredients, recipeInstructions, modalVisible, setModalVisible }) {

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.xOut}>X</Text>
          </Pressable>
          <Text style={styles.modalTitle}>{recipeTitle}</Text>
          <Text style={styles.modalIngredients}>Ingredients: {recipeIngredients}</Text>
          <Text>Instructions: {recipeInstructions}</Text>
         
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
  modalTitle: {
    color: "green",
    fontSize: 24,
    marginVertical: 24,
  },
  modalIngredients: {
    marginBottom: 20,
  },
  xOut: {
    color: 'red',
    marginLeft: 270,
    marginTop: -20,
    fontSize: 20,
    fontWeight: 'bold',
  }
});
