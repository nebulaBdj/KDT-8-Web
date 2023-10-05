import { useState } from "react";
import MyContext from "./lang-context";
import Mytema from "./tema_context";
import LanguageSelector from "./LangSeletor";
import MyCart from "./Cart_context";

import { CartProvider } from "./Cart_context";
import Productlist from "./Productlist";
import Cart from "./Cart";

function App() {
  const [language, setLang] = useState('ko');
  const [tema, setTema] = useState('light');
  const [cart, setCart] = useState([]);
  
  return (
    <div>
      {/* <Mytema.Provider value={{tema, setTema}}>
        <MyContext.Provider value={{language, setLang}}>
          <LanguageSelector />
        </MyContext.Provider>
      </Mytema.Provider> */}
      <CartProvider>
        <Productlist />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
