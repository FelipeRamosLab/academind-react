import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { EXAMPLES } from './data';

function App() {
  const [ selected, setSelected ] = useState('Please click a button!');

  let tabContent = <p>{selected}</p>;

  if (EXAMPLES[selected]) {
    tabContent = (<>
      <h3>{EXAMPLES[selected].title}</h3>
      <p>{EXAMPLES[selected].description}</p>

      <pre>
        <code>{EXAMPLES[selected].code}</code>
      </pre>
    </>);
  }

  function handleSelect(selectedButton) {
    setSelected(selectedButton);
    console.log(selected);
  }
  
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            {CORE_CONCEPTS.map(concept => <CoreConcept key={concept.title} {...concept} />)}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>

          <menu>
            <TabButton isSelected={selected === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selected === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selected === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selected === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

          <div id="tab-content">
            {tabContent}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
