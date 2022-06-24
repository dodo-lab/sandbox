import React from 'react';
import {useQuery} from 'react-query';
import {fetchError} from 'utils/user';
import {UserNames} from './UserNames';

export const UserNamesWithReactQueryError: React.FC = () => {
  const {data} = useQuery('suspense_react_query_error', () => fetchError(1000), {
    suspense: true,
    cacheTime: 0,
    retry: 0,
    // コンポーネント側でエラーハンドリングしたい場合、'useErrorBoundary: false'を指定.
    // useErrorBoundary: false,
  });

  return <UserNames userNames={data ?? []} />;
};
