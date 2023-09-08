import { Container } from "./pieces/Container";
import { Nav } from "./pieces/Nav";
import { Ul } from "./pieces/Ul";
import { Anchor } from "./pieces/Anchor";
import { Section } from "./pieces/Section";
import { Left } from "./pieces/Left";
import { Right } from "./pieces/Right";
import { Button } from "./pieces/Button";
import { BtnOrder } from "./pieces/BtnOrder";
import { StarSquare } from "./pieces/StarSquare";
import { StartSquareImg } from "./pieces/StarSquareImg";
import { ExplainProduct } from "./pieces/ExplainProduct";
import { ExplainProductParagraph } from "./pieces/explainProductParagraph";
import { NatureImg } from "./pieces/NatureImg";
import { CoffeImg } from "./pieces/CoffeImg";
import { Text } from "./pieces/Text";

import STAR from "../assets/img/star.png";
import NATURE from "../assets/img/nature.jpg";
import COFFEE from "../assets/img/coffee.jpg";

function Body() {
  return (
    <Container>
      <Nav>
        <Ul>
          <li>
            <Anchor href="#">Home</Anchor>
          </li>
          <li>
            <Anchor href="#">Product</Anchor>
          </li>
          <li>
            <Anchor href="#">About</Anchor>
          </li>
          <li>
            <Anchor href="#">Contact</Anchor>
          </li>
        </Ul>
      </Nav>
      <Section>
        <Left>
          <Text>Coffee Nature</Text>
          <ExplainProduct>
            <ExplainProductParagraph>
              Coffee Nature is a brand product that provides the best quality of
              coffee in the world. We dedicate the best quality of coffee in the
              world. For Coffee lover we will serve you
            </ExplainProductParagraph>
          </ExplainProduct>
          <Button>
            <BtnOrder>Order now</BtnOrder>
          </Button>
          <StarSquare>
            <StartSquareImg src={STAR} alt="star" />
            <StartSquareImg src={STAR} alt="star" />
            <StartSquareImg src={STAR} alt="star" />
          </StarSquare>
        </Left>
        <Right>
          <NatureImg src={NATURE} alt="nature" />
          <CoffeImg src={COFFEE} alt="coffee" />
        </Right>
      </Section>
    </Container>
  );
}

export default Body;
