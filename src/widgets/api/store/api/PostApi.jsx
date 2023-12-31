import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const postAPI = createApi({
            reducerPath: 'postAPI',
            baseQuery: fetchBaseQuery({
                baseUrl: 'https://jsonplaceholder.typicode.com'
            }),
            endpoints: (build) => ({
                getPosts: build.query({
                    query: ({limit, start}) => ({
                        url: `/posts`,
                        params: {
                            _limit: limit,
                            _start: start
                        }
                    }),
                    merge: (currentCache, newItems) => {
                        currentCache.push(...newItems)
                    },
                }),
                getPost: build.query({
                    query: ({id}) => ({
                        url: `/posts/${id}`,
                    }),
                }),
            }),
        }
    )
;

export const {useGetPostsQuery, useGetPostQuery} = postAPI

