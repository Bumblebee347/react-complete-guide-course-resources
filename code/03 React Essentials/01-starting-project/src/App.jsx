import {useState} from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data.js";
import TabButton  from "./components/TabButton";
import { EXAMPLES } from "./data.js";

function App() {
    const [selected, setSelected] = useState();

    function handleSelect(selectedButton) {
        console.log(`You clicked the ${selectedButton} button!`);
        setSelected(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selected) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selected].title}</h3>
                <p>{EXAMPLES[selected].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selected].code}
                    </code>
                </pre>
            </div>)
    }

    return (
        <div>
            <Header/>
            <main>
                <section id = "core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept {...conceptItem} key={conceptItem.title} />)}
                    </ul>
                </section>
                <section id = "examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selected === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton isSelected={selected === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selected === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton isSelected={selected === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
