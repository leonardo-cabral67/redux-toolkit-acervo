import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addLanguage,
  turnLanguageToFavorite,
  useLanguages,
} from "./redux/sliceLanguage";

function App() {
  const [newLanguage, setNewLanguage] = useState<string>("");

  const languages = useSelector(useLanguages);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Languages List</h1>
      <ul>
        {languages.map((item) => (
          <div key={`${item.name}${item.isFavorite}`}>
            <span style={{ color: item.isFavorite ? "green" : "red" }}>
              {item.name}
            </span>
            <button onClick={() => dispatch(turnLanguageToFavorite(item.name))}>
              {item.isFavorite ? "Desfavoritar" : "favoritar"}
            </button>
          </div>
        ))}
      </ul>

      <div>
        <h2>Add Lang</h2>
        <input
          type="text"
          value={newLanguage}
          onChange={(e) => setNewLanguage(e.target.value)}
        />
        <button onClick={() => dispatch(addLanguage(newLanguage))}>Add</button>
      </div>
    </div>
  );
}

export default App;
