import { useState } from 'react';
import Header from './components/Header';
import Logo from './assets/investment-calculator-logo.png';
import InputGroup from './components/InputGroup';
import Results from './components/Results';

function App() {
  const [ userInput, setUserInput ] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: ''
  });

  function handleInput(ev, field) {
    setUserInput(prev => {
      return {
        ...prev,
        [field]: Number(ev.target.value)
      };
    });
  }

  return (<>
    <Header title="Investment Calculator" Logo={Logo} />

    <div id="user-input">
      <InputGroup label="Initial Investment" field="initialInvestment" handler={handleInput} userInput={userInput} />
      <InputGroup label="Annual Investment" field="annualInvestment" handler={handleInput} userInput={userInput} />
      <InputGroup label="Expected Return" field="expectedReturn" handler={handleInput} userInput={userInput} />
      <InputGroup label="Duration" field="duration" handler={handleInput} userInput={userInput} />
    </div>

    <Results userInput={userInput} />
  </>);
}

export default App
