import React, { useState } from 'react';
import './App.css'; // Importa il file CSS

const languages = [
  { name: "HTML", description: "HTML è il linguaggio di markup per la creazione di pagine web." },
  { name: "CSS", description: "CSS è il linguaggio per la stilizzazione delle pagine web." },
  { name: "JavaScript", description: "JavaScript è un linguaggio di programmazione per la creazione di interazioni dinamiche sulle pagine web." },
  { name: "React", description: "React è una libreria JavaScript per la creazione di interfacce utente." },

];

const LanguageButtons = ({ languages, setSelectedLanguage, selectedLanguage }) => {
  return (
    <div>
      {languages.map((language, index) => (
        <button
          key={index}
          onClick={() => setSelectedLanguage(language)}
          className={`button ${language === selectedLanguage ? 'selected' : ''}`} // Aggiungi la classe 'selected' se il bottone è selezionato
        >
          {language.name}
        </button>
      ))}
    </div>
  );
};

const LanguageCard = ({ language }) => {
  return (
    <div className="card">
      {language ? (
        <div>
          <h2>{language.name}</h2>
          <p>{language.description}</p>
        </div>
      ) : (
        <p>Nessun linguaggio selezionato</p>
      )}
    </div>
  );
};

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className="container">
      <h1>Learn Web development</h1>
      <LanguageButtons languages={languages} setSelectedLanguage={setSelectedLanguage} selectedLanguage={selectedLanguage} />
      <LanguageCard language={selectedLanguage} />
    </div>
  );
};

export default App;
