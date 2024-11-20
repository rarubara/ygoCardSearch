import React, { useState } from 'react';

const ComboBoxLang = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <label htmlFor="language-select" className="font-bold text-white">Language:</label>
      <select
        id="language-select"
        value={selectedLanguage}
        onChange={handleChange}
        className="p-2 border rounded-md shadow-sm focus:outline-none"
      >
        <option value="spanish">Spanish</option>
        <option value="english">English</option>
        <option value="japanese">Japanese</option>
      </select>
    </div>
  );
};

export default ComboBoxLang;