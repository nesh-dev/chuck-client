
import * as React from 'react';
import { useCategoriesQuery } from '../../generated/graphql';
import Categories from './Categories';

const CategoriesContainer = () => {
  const { data, error, loading } = useCategoriesQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  // return <Categories data={data} />;
};

export default CategoriesContainer;
