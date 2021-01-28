import React, { useState } from "react";
import Categories from "../../components/categories/Categories";
import Quotes from "../../components/quotes";
import { CATEGORIES } from "../../components/categories/query";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

const Homecontainer = styled.div`
  display: flex;
`;

const QuotesWrapper = styled.div`
  flex: 1;
`; 

const CategoryWrapper = styled.div`

  flex: 1; 
  justify-content: center;

`; 



const Home = () => {
  const { loading, error, data } = useQuery(CATEGORIES);
  const [category, setCategory] = useState("food");

  const onsetCategory = (index: number) => {
    setCategory(data.categories[index]);
  };

  if (loading) {
    return <div>Loading...</div>;
  } else if (error || !data) {
    return <div>ERROR</div>;
  } else {
    return (
      <>
        <Homecontainer>
          <CategoryWrapper>
            <h2> Select a category </h2>
            {!!data.categories &&
              data.categories.map(
                (category: any, i: any) =>
                  !!category && (
                    <Categories
                      category={category}
                      data={data}
                      onSelect={onsetCategory}
                      index={i}
                      key={i}
                    />
                  )
              )}
          </CategoryWrapper>

          <QuotesWrapper>
            <Quotes category={category} />
          </QuotesWrapper>
        </Homecontainer>
      </>
    );
  }
};

export default Home;