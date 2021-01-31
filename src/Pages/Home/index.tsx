import React, { useState, useEffect, useContext } from "react";
import Categories from "../../components/categories/Categories";
import Quotes from "../../components/quotes";
import styled from "styled-components";
import NavbarComponent from "../../components/NavBar";
import { CategoriesContext } from "../../state-management/CategoriesContext";



const Home = () => {
  const [category, setCategory] = useState("food");
  const { data, loading } = useContext(CategoriesContext)

  const onsetCategory = (index: number) => {
    setCategory(data.categories[index]);
  };

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <NavbarComponent />
        <HomeContainer>
          <CategoryWrapper>
            <h2> Select a category </h2>
            {!!data.categories &&
              data.categories.map(
                (category: string, i: number) =>
                  !!category && (
                    <Categories
                      category={category}
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
        </HomeContainer>
      </>
    );
  }
};

const HomeContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const QuotesWrapper = styled.div`
  flex: 1;
  justify-content: center;
  margin-right: 5%;
`;

const CategoryWrapper = styled.div`
  flex: 1;
  justify-content: center;
  margin-left: 5%;
`;

export default Home;
