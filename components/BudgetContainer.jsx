import {
    StyleSheet,
    View,
    Text,
  } from 'react-native';
  import Colors from '../constant/Colors';
  
  const BudgetContainer = ({children}) => {
      return (
          <View style={styles.container}>
              <Text style={styles.budget}>{children}</Text>
          </View>
      )
  }
  
  const styles = StyleSheet.create({
      container: {
          borderWidth: 2,
          borderColor: Colors.accent,
          padding: 10,
          borderRadius: 10,
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignItems: 'center',
      },
      budget: {
          fontSize: 22,
          color: Colors.accent,
      }
  })
  
  export default BudgetContainer;