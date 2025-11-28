import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [cpt, setCpt] = useState(0)
  const [showSpecialButton, setShowSpecialButton] = useState(false)

  function button() {
    return (<Button title="Bouton d'autisme special pour Cecile" onPress={() => {
      alert("CECILE A CLIQUE SUR LE BOUTON D'AUTISME")
    }} />
    )
  }
  
  useEffect(() => {
    if (cpt === 10) {
      alert("CECILE A ATTEINT 10, FELICITATIONS!");
    }

    if (cpt === 100) {
      alert("CECILE A DECOUVERT LE BOUTON SPECIAL, FELICITATIONS!");
      setShowSpecialButton(true);
    }
  }, [cpt]);

  function incrementCpt() {
    setCpt(cpt + 1)
  }

  return (
    <View style={styles.container}>+6
      <Text>Open up App.js to start working on your app!</Text>
      <Text> CECILE speedrun le jeu</Text>
      <Text> Count: {cpt} </Text>
      <Button title="CECILE CLIQUE MOI" onPress={() => {
        alert("BRAVO CECILE TU AS GAGNE")
      }} />
      <Button title="CECILE NE PAS CLIQUE MOI" onPress={() => {
        alert("CECILE ESPECE DE GROGNASSE")
      }} />

      <Button title="Bouton d'autisme pour Cecile" onPress={() => {
        incrementCpt()
      }} />

      {showSpecialButton && button()}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
