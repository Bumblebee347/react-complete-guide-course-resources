import Header from "./Header";
import CoreConcept from "./CoreConcept";
import componentsImg from "./assets/components.png";

function App() {
    return (
        <div>
            <Header/>
            <main>
                <section id = "core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept
                            title="Components"
                            description = "The core UI building block"
                            image={componentsImg}
                        />
                        <CoreConcept />
                        <CoreConcept />
                        <CoreConcept />
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
