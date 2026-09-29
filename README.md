# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.



# 💰 Expense Manager App (React Native)

## 📌 Overview
This is a simple cross-platform mobile application developed using React Native. The app allows users to manage their daily expenses and income efficiently by adding, viewing, and deleting transactions.

---

## 🎯 Features
- Add income and expense transactions
- Categorize transactions (Food, Travel, Shopping, etc.)
- View total income, total expense, and balance
- Delete transactions
- Real-time calculation of balance
- Clean and responsive UI

---

## 🛠️ Technologies Used
- React Native
- Expo
- JavaScript (ES6)
- React Hooks (`useState`)

---

## 📱 Screens
1. Summary Card (Balance, Income, Expense)
2. Add Transaction Form
3. Transaction List

---

## ⚙️ Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/expense-manager-react-native.git
```

2. Navigate to project folder:
```bash
cd expense-manager-react-native
```

3. Install dependencies:
```bash
npm install
```

4. Start the app:
```bash
npx expo start
```

5. Run on:
- Android Emulator  
- iOS Simulator  
- Expo Go App (Scan QR)

---

## 📊 How It Works
- Users enter transaction details (title, amount, type, category)
- Transactions are stored in state using `useState`
- Income and expense are calculated using `filter()` and `reduce()`
- Balance is dynamically updated
- Transactions can be deleted anytime

---

## 📚 Learning Outcomes
- Understanding of cross-platform development
- Hands-on experience with React Native components
- State management using React Hooks
- UI design and user interaction handling

---

## 🧑‍💻 Author
Vithika Abhijit Surve  
TY BTech Computer Engineering  

---

## 📌 Conclusion
This project demonstrates how React Native can be used to build efficient cross-platform applications using a single codebase with real-time data handling and user interaction.