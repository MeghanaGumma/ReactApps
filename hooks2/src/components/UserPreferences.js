import React from "react";
import useLocalStorage from "./useLocalStorage";

function UserPreferences() {
  const [language, setLanguage] = useLocalStorage("language", "English");

  return (
    <div className="preferences">
      <h2>Preferred Language: {language}</h2>
      <button onClick={() => setLanguage("English")}>English</button>
      <button onClick={() => setLanguage("Hindi")}>Hindi</button>
    </div>
  );
}

export default UserPreferences;
