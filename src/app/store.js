import { configureStore } from '@reduxjs/toolkit'
import inventoryReducer from '../../util/slices/inventorySlice'

export default configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
})