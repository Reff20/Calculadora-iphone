import React, { /*useState*/ } from "react";
import {
  Background,
  ButtonsRight,
  ButtonsUp,
  CalcAll,
  Display,
  DivButtons,
  Numbers,
  Result,
  Text,
} from "./Calculator.styled";

const Calculator = () => {

  return (
    <>
      <Background>
        <CalcAll>
          <Display>
            <Result>123</Result>
          </Display>
          <DivButtons>
            <ButtonsUp grid={{ colS: 1, colE: 2, rowS: 1, rowE: 2 }}>
              <Text color="black">AC</Text>
            </ButtonsUp>
            <ButtonsUp grid={{ colS: 2, colE: 3, rowS: 1, rowE: 2 }}>
              <Text color="black">+/-</Text>
            </ButtonsUp>
            <ButtonsUp grid={{ colS: 3, colE: 4, rowS: 1, rowE: 2 }}>
              <Text color="black">%</Text>
            </ButtonsUp>
            <ButtonsRight grid={{ colS: 4, colE: 5, rowS: 1, rowE: 2 }}>
              <Text color="white">÷</Text>
            </ButtonsRight>

            <Numbers grid={{ colS: 1, colE: 2, rowS: 2, rowE: 3 }}>
              <Text color="white">7</Text>
            </Numbers>
            <Numbers grid={{ colS: 2, colE: 3, rowS: 2, rowE: 3 }}>
              <Text color="white">8</Text>
            </Numbers>
            <Numbers grid={{ colS: 3, colE: 4, rowS: 2, rowE: 3 }}>
              <Text color="white">9</Text>
            </Numbers>
            <ButtonsRight grid={{ colS: 4, colE: 5, rowS: 2, rowE: 3 }}>
              <Text color="white">x</Text>
            </ButtonsRight>

            <Numbers grid={{ colS: 1, colE: 2, rowS: 3, rowE: 4 }}>
              <Text color="white">4</Text>
            </Numbers>
            <Numbers grid={{ colS: 2, colE: 3, rowS: 3, rowE: 4 }}>
              <Text color="white">5</Text>
            </Numbers>
            <Numbers grid={{ colS: 3, colE: 4, rowS: 3, rowE: 4 }}>
              <Text color="white">6</Text>
            </Numbers>
            <ButtonsRight grid={{ colS: 4, colE: 5, rowS: 3, rowE: 4 }}>
              <Text color="white">-</Text>
            </ButtonsRight>

            <Numbers grid={{ colS: 1, colE: 2, rowS: 4, rowE: 5 }}>
              <Text color="white">1</Text>
            </Numbers>
            <Numbers grid={{ colS: 2, colE: 3, rowS: 4, rowE: 5 }}>
              <Text color="white">2</Text>
            </Numbers>
            <Numbers grid={{ colS: 3, colE: 4, rowS: 4, rowE: 5 }}>
              <Text color="white">3</Text>
            </Numbers>
            <ButtonsRight grid={{ colS: 4, colE: 5, rowS: 4, rowE: 5 }}>
              <Text color="white">+</Text>
            </ButtonsRight>

            <Numbers grid={{ colS: 1, colE: 3, rowS: 5, rowE: 6 }}>
              <Text color="white">0</Text>
            </Numbers>
            <Numbers grid={{ colS: 3, colE: 4, rowS: 5, rowE: 6 }}>
              <Text color="white">,</Text>
            </Numbers>

            <ButtonsRight grid={{ colS: 4, colE: 5, rowS: 5, rowE: 6 }}>
              <Text color="white">=</Text>
            </ButtonsRight>
          </DivButtons>
        </CalcAll>
      </Background>
    </>
  );
};

export default Calculator;
