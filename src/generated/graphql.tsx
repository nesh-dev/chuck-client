import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Scalars['String']>;
  joke: C;
};


export type QueryJokeArgs = {
  category: Scalars['String'];
};

export type C = {
  __typename?: 'c';
  created_at: Scalars['String'];
  categories: Array<Scalars['String']>;
  icon_url: Scalars['String'];
  id: Scalars['String'];
  updated_at: Scalars['String'];
  url: Scalars['String'];
  value: Scalars['String'];
};

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'categories'>
);

export type JokeQueryVariables = Exact<{
  category: Scalars['String'];
}>;


export type JokeQuery = (
  { __typename?: 'Query' }
  & { joke: (
    { __typename?: 'c' }
    & Pick<C, 'categories' | 'icon_url' | 'id' | 'value' | 'url' | 'updated_at'>
  ) }
);


export const CategoriesDocument = gql`
    query Categories {
  categories
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        return ApolloReactHooks.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, baseOptions);
      }
export function useCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, baseOptions);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = ApolloReactCommon.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const JokeDocument = gql`
    query Joke($category: String!) {
  joke(category: $category) {
    categories
    icon_url
    id
    value
    url
    updated_at
  }
}
    `;

/**
 * __useJokeQuery__
 *
 * To run a query within a React component, call `useJokeQuery` and pass it any options that fit your needs.
 * When your component renders, `useJokeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJokeQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useJokeQuery(baseOptions: ApolloReactHooks.QueryHookOptions<JokeQuery, JokeQueryVariables>) {
        return ApolloReactHooks.useQuery<JokeQuery, JokeQueryVariables>(JokeDocument, baseOptions);
      }
export function useJokeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JokeQuery, JokeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JokeQuery, JokeQueryVariables>(JokeDocument, baseOptions);
        }
export type JokeQueryHookResult = ReturnType<typeof useJokeQuery>;
export type JokeLazyQueryHookResult = ReturnType<typeof useJokeLazyQuery>;
export type JokeQueryResult = ApolloReactCommon.QueryResult<JokeQuery, JokeQueryVariables>;