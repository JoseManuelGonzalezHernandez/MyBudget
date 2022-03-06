import { useState } from 'react'
import {
    Alert,
    Button,
    FlatList,
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constant/Colors';
import BudgetContainer from '../components/BudgetContainer';

const MovementScreen = () => {

    const [budget, setBudget] = useState(0);
    const [history, setHistory] = useState([])
    const [movement, setMovement] = useState(0);
    const [description, setDescription] = useState("");
    const [transactionDone, setTransactionDone] = useState(false);

    const budgetInputHandler = inputText => {
        setMovement(inputText.replace(/[^0-9]/g, ""));
    }

    const descriptionInputHandler = inputText => {
        setDescription(inputText);
    }

    const resetInputHandler = () => {
        setMovement(0);
    }
    const resetDescriptionHandler = () => {
        setDescription("");
    }

    const depositHandler = () => {
        if (movement == 0 || description === "") {
            Alert.alert("ERROR", "You need to input the amount and the description.", [
                { text: "Ok", style: "destructive", onPress: resetInputHandler },
            ]);
        } else {
            setBudget(parseInt(budget) + parseInt(movement));
            let value = "Deposit: " + description + " -> " + movement + " €.\n";
            setHistory((currentHistory) => [
                ...currentHistory,
                { key: Math.random().toString(), value: value }]);
            resetInputHandler();
            resetDescriptionHandler();
            setTransactionDone(true);
        }

    }

    const withdrawalHandler = () => {
        if (movement == 0 || description === "") {
            Alert.alert("ERROR", "You need to input the amount and the description.", [
                { text: "Ok", style: "destructive", onPress: resetInputHandler },
            ]);
        } else {
            setBudget(parseInt(budget) - parseInt(movement));
            let value = "Withdrawal: " + description + " -> -" + movement + " €.\n";
            setHistory((currentHistory) => [
                ...currentHistory,
                { key: Math.random().toString(), value: value }]);
            resetInputHandler();
            resetDescriptionHandler();
            setTransactionDone(true);
        }


    }

    let budgetContainer;
    let beInNumbersRed = (budget < 0);
    if (beInNumbersRed) {
        budgetContainer = (
            <Card style={styles.summaryContainerInNumbersRed}>
                <BudgetContainer>
                    {budget} €
                </BudgetContainer>
            </Card>
        )
    } else {
        budgetContainer = (
            <Card style={styles.summaryContainer}>
                <BudgetContainer>
                    {budget} €
                </BudgetContainer>
            </Card>
        )
    }

    let historyTransactions;
    if (transactionDone) {
        historyTransactions = (
            <View style={styles.listContainer}>
                <FlatList data={history} renderItem={historyData => (
                    <View>
                        <Card style={styles.summaryContainer}>
                            <Text key={historyData.item.key}> {historyData.item.value} </Text>
                        </Card>
                    </View>
                )} />
            </View>
        )

    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>

            <View style={styles.screen}>
                {budgetContainer}
                <Card style={{ width: "80%" }}>
                    <Text>Enter the amount and description of the transaction</Text>
                    <Input style={styles.input}
                        blurOnSubmit
                        keyboardType="number-pad" autoCapitalize="none" placeholder="Amount" autoCorrect={true} onChangeText={budgetInputHandler} value={movement} />
                    <Input style={styles.input}
                        blurOnSubmit autoCapitalize="none" placeholder="Description" autoCorrect={true} onChangeText={descriptionInputHandler} value={description} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Withdrawal" color={Colors.accent} onPress={() => { withdrawalHandler() }} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Deposit" color={Colors.primary} onPress={() => { depositHandler() }} />
                        </View>
                    </View>
                </Card>
                {historyTransactions}
            </View>
        </TouchableWithoutFeedback>

    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 3
    },
    input: {
        width: "100%",
    },
    button: {
        width: "33%"
    },
    summaryContainer: {
        marginBottom: 20
    },
    summaryContainerInNumbersRed: {
        marginBottom: 20,
        backgroundColor: "red"
    },
	listContainer: {
		width: "100%",
		height: "100%",
		padding: 30,
        margin: 0
	}
})

export default MovementScreen