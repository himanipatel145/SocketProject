import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth.reducer';

const createRootReducer = () => {

    const authPersistConfig = {
        key: 'auth',
        storage: storage
    }

    return combineReducers(
        {
            auth: persistReducer(authPersistConfig, authReducer),
        }
    )
};

export default createRootReducer;