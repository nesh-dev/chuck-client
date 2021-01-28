import * as React from 'react';
import { JokeQuery  } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: JokeQuery;
}


const Quote: React.FC<Props> = ({ data }) => {
  if (!data.joke) {
    return <div>No launch available</div>;
  }

  return (
    <div>
        <h1>{data.joke.value}</h1>
    </div>
  );
};

export default Quote;
