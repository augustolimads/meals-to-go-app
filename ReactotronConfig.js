import Reactotron from 'reactotron-react-native';

// eslint-disable-next-line no-undef
if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.191' })
    .useReactNative()

    .connect();

  tron.clear();
  console.tron = tron;
}
