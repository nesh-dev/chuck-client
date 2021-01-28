import * as React from "react";
import "./styles.css";
import styled from "styled-components";


interface Props {
  category: string;
  data: string;
  key: number;
  onSelect: Function;
  index: number;
}

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: 200px;
  margin: 5px;
`;


const CategoryButton: React.FC<Props> = ({
  data,
  category,
  index,
  onSelect,
}) => {
  const handleChange = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    event.preventDefault();
    onSelect(index);
  };

  return (
    <div>
       <Button onClick={(e) => handleChange(e, index)}>{category} </Button>
    </div>
  );
};

export default CategoryButton;
