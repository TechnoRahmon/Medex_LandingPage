import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import { HomeApi } from '../features/HomeSlice'

export function makeStore() {
  return configureStore({
    reducer: { [HomeApi.reducerPath]: HomeApi.reducer },
    middleware:(gDM)=>gDM().concat(HomeApi.middleware)
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppStore = ReturnType<typeof makeStore>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
export default store
