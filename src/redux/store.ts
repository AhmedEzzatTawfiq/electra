import { configureStore } from '@reduxjs/toolkit';
import shopperReducer from './shopperSlice';
import { 
  persistStore, 
  persistReducer ,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  WebStorage,

} from 'redux-persist'
// import storage from 'redux-persist/lib/storage' //  I created my own storage
import createWebStorage from 'redux-persist/es/storage/createWebStorage';



export function createPersistStorage(): WebStorage {
  const isServer = typeof window === 'undefined';

  //we will create a dummy server
  if(isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      }
    }
  }
  return createWebStorage("local");
}

const storage = typeof window !== "undefined" ? createWebStorage("local") : createPersistStorage();


const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, shopperReducer)

export const store = configureStore({
  reducer: {
    shopper: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
    }
  })
});

export const persistor = persistStore(store);

