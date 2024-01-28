import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import songReducer from './reducers/CurrentSong';

const persistConfig = {
  key: 'root',
  storage,
};

const persistentReducers = persistReducer(persistConfig, songReducer);

const store = createStore(persistentReducers);

const persistor = persistStore(store);

export { store, persistor };

