import { motion } from "framer-motion";

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
import { ExplainProductParagraph } from "./pieces/ExplainProductParagraph";
import { NatureImg } from "./pieces/NatureImg";
import { CoffeImg } from "./pieces/CoffeImg";
import { Text } from "./pieces/Text";

import STAR from "../assets/img/star.png";
import NATURE from "../assets/img/nature.jpg";
import COFFEE from "../assets/img/coffee.jpg";

const navAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      ease: "easeInOut",
      delayChildren: 3,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    y: "-20px",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};
const typingContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.3,
      ease: "easeInOut",
    },
  },
};

const typingText = {
  hidden: {
    opacity: 0,
    y: "-20px",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const explainProduct = {
  hidden: {
    opacity: 0,
    y: "-20px",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      delay: 1,
      duration: 0.8,
    },
  },
};

const buttonProduct = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const startAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      ease: "easeInOut",
      delayChildren: 3,
    },
  },
};

const startItem = {
  hidden: {
    opacity: 0,
    x: "-100px",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.4,
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

const imgProduct1 = {
  hidden: {
    opacity: 0,
    y: "400px",
    width: "80px",
  },
  show: {
    opacity: 1,
    y: 0,
    width: "250px",
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 2,
    },
  },
};

const imgProduct2 = {
  hidden: {
    opacity: 0,
    y: "400px",
    x: "50px",
    width: "80px",
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    width: "250px",
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 2.2,
    },
  },
};

function Body() {
  return (
    <Container>
      <Nav>
        <Ul variants={navAnimation} initial="hidden" animate="show">
          <motion.li variants={navItem}>
            <Anchor href="#">Home</Anchor>
          </motion.li>
          <motion.li variants={navItem}>
            <Anchor href="#">Product</Anchor>
          </motion.li>
          <motion.li variants={navItem}>
            <Anchor href="#">About</Anchor>
          </motion.li>
          <motion.li variants={navItem}>
            <Anchor href="#">Contact</Anchor>
          </motion.li>
        </Ul>
      </Nav>
      <Section>
        <Left>
          <Text variants={typingContainer} initial="hidden" animate="show">
            {Array.from(" Coffee Nature").map((word, i) => (
              <motion.span key={i} variants={typingText}>
                {word}
              </motion.span>
            ))}
          </Text>
          <ExplainProduct>
            <ExplainProductParagraph
              variants={explainProduct}
              initial="hidden"
              animate="show"
            >
              Coffee Nature is a brand product that provides the best quality of
              coffee in the world. We dedicate the best quality of coffee in the
              world. For Coffee lover we will serve you
            </ExplainProductParagraph>
          </ExplainProduct>
          <Button>
            <BtnOrder variants={buttonProduct} initial="hidden" animate="show">
              Order now
            </BtnOrder>
          </Button>
          <StarSquare variants={startAnimation} initial="hidden" animate="show">
            <StartSquareImg src={STAR} alt="star" variants={startItem} />
            <StartSquareImg src={STAR} alt="star" variants={startItem} />
            <StartSquareImg src={STAR} alt="star" variants={startItem} />
          </StarSquare>
        </Left>
        <Right>
          <NatureImg
            src={NATURE}
            alt="nature"
            initial="hidden"
            animate="show"
            variants={imgProduct1}
          />
          <CoffeImg
            src={COFFEE}
            alt="coffee"
            initial="hidden"
            animate="show"
            variants={imgProduct2}
          />
        </Right>
      </Section>
    </Container>
  );
}

export default Body;
