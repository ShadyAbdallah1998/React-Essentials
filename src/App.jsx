import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";
function App() {
  const [data, setData] = useState(EXAMPLES.components);

  function handleSelect(selectedBtn) {
    setData(selectedBtn);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept {...conceptItem} key={conceptItem.title} />
            ))}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />

            <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={data === EXAMPLES.components}
              onSelect={() => handleSelect(EXAMPLES.components)}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={data === EXAMPLES.jsx}
              onSelect={() => handleSelect(EXAMPLES.jsx)}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={data === EXAMPLES.props}
              onSelect={() => handleSelect(EXAMPLES.props)}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={data === EXAMPLES.state}
              onSelect={() => handleSelect(EXAMPLES.state)}
            >
              State
            </TabButton>
          </menu>

          <div id="tab-content">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <pre>
              <code>{data.code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
