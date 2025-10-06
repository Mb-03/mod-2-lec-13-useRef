import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />

      <select name="" id="" value={language} onChange={handleLanguage}>
        <option value="">Select Langauge</option>
        <option value="en">English</option>
        <option value="geo">Georgian</option>
        <option value="it">Italian</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default App;
