import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {HYDRATE} from 'next-redux-wrapper'

export interface IPromotedProducts {
  title:string;
  description:string;
  imageUrl:string;
}
export interface IHomeApi {
 data:{
  promotedProducts:Array<IPromotedProducts>
 } 
}


export const HomeApi = createApi({
  reducerPath:'HomeApi',
  baseQuery:fetchBaseQuery({ baseUrl:'/api'}),
  extractRehydrationInfo(action,{ reducerPath }){
    if ( action.type == HYDRATE ){
      return action.payload[reducerPath]
    }
  },
  endpoints:(builder)=>({
    getHomeApi: builder.query<IHomeApi,void>({
      query:()=>'/home'
    })
  })
})


// Export hooks for usage in functional components
export const {
  useGetHomeApiQuery,
  util: { getRunningQueriesThunk },
} = HomeApi;

// export endpoints for use in SSR
export const { getHomeApi } = HomeApi.endpoints;
