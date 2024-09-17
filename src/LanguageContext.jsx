// src/LanguageContext.jsx
import React, { createContext, useState } from 'react';

// Création du contexte pour la langue
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('fr'); // Français par défaut

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'fr' ? 'en' : 'fr'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
