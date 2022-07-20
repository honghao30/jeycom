import styled from "styled-components";
const Title = styled.h2`
    text-align: left;
    font-size: 26px;
    margin-bottom:15px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const CateTitle = (props) => {
    return(
        <Title>{props.children}</Title>
    );
};

export default CateTitle;