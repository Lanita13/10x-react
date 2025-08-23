import styled from "styled-components";
import Button from "./Button";

const HeroSection =styled.section`
  text-align: center;
  padding: 50px 20px;
  background: #e3f2fd;
  margin-bottom: 40px;
`
function Hero({title , subtitle , buttoText}){
    return(
        <HeroSection>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <Button>{buttoText}</Button>
        </HeroSection>

    );
}




export default Hero;

