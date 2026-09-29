import { useState } from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const CATEGORIES = ['Food', 'Travel', 'Shopping', 'Bills', 'Salary', 'Other'];


// 🔹 Summary Card
const SummaryCard = ({ income, expense, balance }) => (
  <View style={styles.summaryCard}>
    <Text style={styles.summaryTitle}>Current Balance</Text>

    <Text
      style={[
        styles.balanceText,
        { color: balance >= 0 ? '#2e7d32' : '#c62828' },
      ]}
    >
      ₹{balance.toFixed(2)}
    </Text>

    <View style={styles.summaryRow}>
      <View style={styles.summaryItem}>
        <Text style={styles.summaryLabel}>Income</Text>
        <Text style={styles.incomeText}>+₹{income.toFixed(2)}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.summaryItem}>
        <Text style={styles.summaryLabel}>Expense</Text>
        <Text style={styles.expenseText}>-₹{expense.toFixed(2)}</Text>
      </View>
    </View>
  </View>
);


// 🔹 Category Chip
const CategoryChip = ({ label, selected, onSelect }) => (
  <TouchableOpacity
    style={[styles.chip, selected && styles.selectedChip]}
    onPress={() => onSelect(label)}
  >
    <Text style={[styles.chipText, selected && styles.selectedChipText]}>
      {label}
    </Text>
  </TouchableOpacity>
);


// 🔹 Add Transaction Form
const AddForm = ({ onAddTransaction }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('Food');

  const handleSubmit = () => {
    const parsedAmount = parseFloat(amount);

    if (!title.trim() || isNaN(parsedAmount) || parsedAmount <= 0) {
      Alert.alert('Invalid Input', 'Enter valid title and amount');
      return;
    }

    onAddTransaction({
      id: Date.now().toString(),
      title,
      amount: parsedAmount,
      type,
      category,
    });

    setTitle('');
    setAmount('');
  };

  return (
    <View style={styles.formCard}>
      <Text style={styles.formTitle}>Add New Transaction</Text>

      {/* Type Toggle */}
      <View style={styles.typeContainer}>
        <TouchableOpacity
          style={[
            styles.typeButton,
            type === 'income' && styles.incomeActive,
          ]}
          onPress={() => setType('income')}
        >
          <Text style={styles.typeButtonText}>Income</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.typeButton,
            type === 'expense' && styles.expenseActive,
          ]}
          onPress={() => setType('expense')}
        >
          <Text style={styles.typeButtonText}>Expense</Text>
        </TouchableOpacity>
      </View>

      {/* Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      {/* Categories */}
      <Text style={styles.label}>Category:</Text>
      <View style={styles.chipContainer}>
        {CATEGORIES.map((item) => (
          <CategoryChip
            key={item}
            label={item}
            selected={category === item}
            onSelect={setCategory}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};


// 🔹 Transaction Item
const TransactionItem = ({ item, onDelete }) => (
  <View style={styles.itemRow}>
    <View style={styles.itemInfo}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemCategory}>{item.category}</Text>
    </View>

    <View style={styles.itemRight}>
      <Text style={styles.itemAmount}>
        {item.type === 'income' ? '+' : '-'}₹{item.amount.toFixed(2)}
      </Text>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(item.id)}
      >
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </View>
  </View>
);


// 🔹 Main Screen
export default function HomeScreen() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (tx) => {
    setTransactions((prev) => [tx, ...prev]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((tx) => tx.id !== id));
  };

  const income = transactions
    .filter((tx) => tx.type === 'income')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const expense = transactions
    .filter((tx) => tx.type === 'expense')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const balance = income - expense;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Expense Manager</Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TransactionItem item={item} onDelete={deleteTransaction} />
        )}
        ListHeaderComponent={
          <>
            <SummaryCard
              income={income}
              expense={expense}
              balance={balance}
            />
            <AddForm onAddTransaction={addTransaction} />
            <Text style={styles.sectionHeader}>Recent Transactions</Text>
          </>
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>No transactions yet</Text>
        }
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}


// 🔹 Styles (same as yours)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    paddingTop: StatusBar.currentHeight || 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  summaryTitle: { fontSize: 14, color: '#666' },
  balanceText: { fontSize: 28, fontWeight: 'bold', marginVertical: 6 },
  summaryRow: { flexDirection: 'row', marginTop: 10 },
  summaryItem: { flex: 1, alignItems: 'center' },
  divider: { width: 1, backgroundColor: '#ccc' },
  summaryLabel: { fontSize: 12, color: '#888' },
  incomeText: { color: '#2e7d32' },
  expenseText: { color: '#c62828' },

  formCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  formTitle: { fontSize: 16, fontWeight: 'bold' },

  typeContainer: { flexDirection: 'row', marginBottom: 12 },
  typeButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    margin: 4,
  },
  incomeActive: { backgroundColor: '#2e7d32' },
  expenseActive: { backgroundColor: '#c62828' },

  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },

  label: { fontSize: 13, marginBottom: 6 },
  chipContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  chip: {
    backgroundColor: '#ddd',
    padding: 8,
    borderRadius: 16,
    margin: 4,
  },
  selectedChip: { backgroundColor: '#1976d2' },
  chipText: { fontSize: 12 },
  selectedChipText: { color: '#fff' },

  addButton: {
    backgroundColor: '#1976d2',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  addButtonText: { color: '#fff', fontWeight: 'bold' },

  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },

  itemRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  itemInfo: { flex: 1 },
  itemTitle: { fontSize: 15 },
  itemCategory: { fontSize: 12, color: '#777' },
  itemRight: { flexDirection: 'row', alignItems: 'center' },
  itemAmount: { marginRight: 10 },

  deleteButton: {
    backgroundColor: '#ffebee',
    padding: 6,
    borderRadius: 12,
  },
  deleteText: { color: '#c62828' },

  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
});