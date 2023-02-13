import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/iceCream/icecreamSlice'
import userReducer from '../features/user/userSlice'
// const reduxLogger = require('redux-logger')

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // lo faccio perchè per default la funzione configureStore aggiunge alcuni middleware a redux store automaticamente
})

export default store