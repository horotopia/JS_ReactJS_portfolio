import React, { useState } from 'react';

const languages = [
  {
    code: 'français',
    flag: '/path/to/french-flag.jpg',
    name: 'Français',
  },
  {
    code: 'english',
    flag: '/path/to/english-flag.jpg',
    name: 'English',
  },
  {
    code: 'español',
    flag: '/path/to/spanish-flag.jpg',
    name: 'Español',
  },
];

function LanguageSelector() {
  const [language, setLanguage] = useState('français');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    setMenuOpen(false);
  };

  return (
    <div>
      <button onClick={() => setMenuOpen(!menuOpen)}>
        <img src="/path/to/flag.jpg" alt="Drapeau" />
        {language}
      </button>
      {menuOpen && (
        <ul>
          {languages.map((lang) => (
            <li key={lang.code}>
              <button value={lang.code} onClick={handleLanguageChange}>
                <img src={lang.flag} alt={`Drapeau ${lang.name}`} />
                {lang.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
