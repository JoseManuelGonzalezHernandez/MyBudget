import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constant/Colors';

const Header = ({Title}) => {
    return (
        <View style={styles.header}>
        <Text style={styles.headerTitle}>{Title}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    backgroundColor: '#000000',
    paddingTop: 36,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  headerTitle: {
    color: "white"
  }
})

export default Header;