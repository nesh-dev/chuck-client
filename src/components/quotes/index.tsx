import * as React from 'react';
import { useJokeQuery } from '../../generated/graphql';
import Quote from './Quote';
import styled from 'styled-components';

interface Props {
  category: string;

}



const QuoteContainer: React.FC<Props> = ({ category }) => {
  const { data, error, loading } = useJokeQuery({ variables: { category: category } });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a category from the panel</div>;
  }

  else {
    return (
    <div>
      <Quote data={data} />
    </div>
    
    );

}
}

export default QuoteContainer;
