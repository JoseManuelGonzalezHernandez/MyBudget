import { StyleSheet, View } from 'react-native';
import Header from "./components/Header";
import BudgetScreen from "./screens/BudgetScreen"

export default function App() {
 
  return (
    <View style={styles.screen}>
      <Header Title="MyBudget"/>
      <BudgetScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#121212'
  }
});