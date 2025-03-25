import { useState } from "react";

function App() {

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div>
      <h1>useState</h1>
    </div>
  );
}

const languages = [
  { name: "HTML", description: "Linguaggio di markup per il web." },
  { name: "CSS", description: "Foglio di stile per la presentazione delle pagine web." },
  { name: "JavaScript", description: "Linguaggio di programmazione per il web." },
];


export default App;