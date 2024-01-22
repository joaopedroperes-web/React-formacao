
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from "./styles";
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrantNumber] = useState(0);
  const [fistNumber, setFistNumber] = useState('0');
  const [operation, setOperation] = useState('')

  const handleOnClear = () => {
    setCurrantNumber('0');
    setFistNumber('0');
    setOperation('')
  }

  const handleDeleteLastNumber = () => {
    setCurrantNumber((prev) => {
      let lastNumber = String(prev);
      lastNumber = lastNumber.slice(0, -1);
      return lastNumber === '' ? 0 : parseFloat(lastNumber);
    });
  }
  
  const handleAddNumber = (number) => {
    setCurrantNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  const handleSumNumbers = () => {
    if(fistNumber === '0'){
      setFistNumber(String(currentNumber));
      setCurrantNumber('0');
      setOperation('+')
    } else{
      const sum = Number(fistNumber) + Number(currentNumber);
      setCurrantNumber(String(sum));
      setOperation('')
      
    }
  }

  const handleSubNumbers = () => {
    if(fistNumber === '0'){
      setFistNumber(String(currentNumber));
      setCurrantNumber('0');
      setOperation('-')
    } else{
      const sum = Number(fistNumber) - Number(currentNumber);
      setCurrantNumber(String(sum));
      setOperation('')
      
    }
  }

  const handleMulNumbers = () => {
    if(fistNumber === '0'){
      setFistNumber(String(currentNumber));
      setCurrantNumber('0');
      setOperation('*')
    } else{
      const sum = Number(fistNumber) * Number(currentNumber);
      setCurrantNumber(String(sum));
      setOperation('')
      
    }
  }

  const handleDivNumbers = () => {
    if(fistNumber === '0'){
      setFistNumber(String(currentNumber));
      setCurrantNumber('0');
      setOperation('/')
    } else{
      const sum = Number(fistNumber) / Number(currentNumber);
      setCurrantNumber(String(sum));
      setOperation('')
      
    }
  }

  const handleEquals = () => {
    if(fistNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+': handleSumNumbers();
          break;
        case '-': handleSubNumbers();
          break;
        case '*': handleMulNumbers();
          break;
        case '/': handleDivNumbers();
          break;
          default:
          break;
        
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={handleMulNumbers}/>
          <Button label="/" onClick={handleDivNumbers}/>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="DEL" onClick={handleDeleteLastNumber}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleSubNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="" onClick={() => handleAddNumber('')}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="" onClick={() => handleAddNumber('')}/>
          <Button label="" onClick={() => handleAddNumber('')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
