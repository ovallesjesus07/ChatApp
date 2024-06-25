# Chat App using React Native Expo and Firebase
![Miniature](https://extensions.dev/assets/blogs/chatbot-with-gemini-firebase-extension/images/configure.png)

## How to clone

Clone the repo

```
git clone https://github.com/ovallesjesus07/ChatApp.git
```

cd into the just created project and install dependencies with yarn

```
cd ChatApp && yarn
```

Add your firebase backend config in the `firebase.js` file

```
const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.apiKey,
  authDomain: Constants.expoConfig.extra.authDomain,
  projectId: Constants.expoConfig.extra.projectId,
  storageBucket: Constants.expoConfig.extra.storageBucket,
  messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
  appId: Constants.expoConfig.extra.appId,
  databaseURL: Constants.expoConfig.extra.databaseURL,
  //   @deprecated is deprecated Constants.manifest
};
```

Run the project

```
expo start
```

Congratulations 🎉 Now you have a functional Chat App working locally

![Miniature](https://img.freepik.com/vector-gratis/ilustracion-concepto-bot-chat_114360-5522.jpg?size=338&ext=jpg&ga=GA1.1.1788068356.1716595200&semt=ais_user)

## Known issues

Expo SDK and libreries are always updating their versions and deprecating others. before installing the libreries run.

```
yarn add expo@latest
```

Next you can run:

```
    npx expo install --fix
```

Older versions of `react-native-gifted-chat` have a some issues. make sure you have the latest.

```
npx expo install react-native-gifted-chat@latest
```

Expo will show you what dependencies need to be updated. Install the dependencies expo suggest you. It is possible that there is cache and you have to run.

```
yarn start --reset-cache
```


## Tech Stack

- **[React Native](https://reactnative.dev/)**
- **[Expo](https://expo.dev/)**
- **[Firebase Authentication](https://firebase.google.com/products/auth)**
- **[react-native-gifted-chat](https://github.com/FaridSafi/react-native-gifted-chat)**
- **[Gemini API](https://ai.google.dev/gemini-api)**
