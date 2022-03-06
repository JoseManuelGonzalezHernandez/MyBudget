import {View, StyleSheet} from 'react-native';

const Card = ({children, style}) => {
  return (
    <View style={{...styles.card, ...style}}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        maxWidth: "80%",
        alignItems: 'center',
        elevation: 5,
        shadowColor: "grey",
        backgroundColor: "#ffffff",
        shadowRadius: 6,
        shadowOpacity: 0.26,
        shadowOffset: {width: 5, height: 5},
        borderRadius: 7,
        padding: 20,
      },
})

export default Card;