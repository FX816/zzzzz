import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const lang = localStorage.getItem("language");

  useEffect(() => {
    if (!lang) {
      localStorage.setItem("language", "ru");
    }
  }, []);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    localStorage.setItem("language", selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="relative max-w-[120px] text-neutral-950 text-secondary">
      <select
        defaultValue={localStorage.getItem("language")}
        onChange={handleLanguageChange}
        className="text-cyan cursor-pointer border border-cyan focus:outline-none rounded-sm">
        <option value="uz">UZ</option>
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;