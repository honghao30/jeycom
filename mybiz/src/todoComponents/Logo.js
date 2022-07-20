import styled from "styled-components";
const Title = styled.h1`
    text-align: center;
    font-size: 36px;
  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`;

const Logo = (props) => {
    return(
        <Title>{props.children}</Title>
    );
};

export default Logo;