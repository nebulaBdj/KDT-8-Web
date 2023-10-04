import { useState } from "react";
import MyContext from "./lang-context";
import Mytema from "./tema_context";
import LanguageSelector from "./LangSeletor";

function App() {
  const [language, setLang] = useState('ko');
  const [tema, setTema] = useState('light');
  
  return (
    <div>
      <Mytema.Provider value={{tema, setTema}}>
        <MyContext.Provider value={{language, setLang}}>
          <LanguageSelector />
        </MyContext.Provider>
      </Mytema.Provider>
    </div>
  );
}

export default App;
