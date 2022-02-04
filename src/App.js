import React, {useMemo, useState} from "react";
import axios from "axios";
import {XMLParser} from "fast-xml-parser";
import Form from "./components/Form";
import './styles/App.css';

function App() {
  const [decWord, setDecWord] = useState('');
  const [selectCase, setSelectCase] = useState(null);
  const [result, setResult] = useState('')

  const declensionWord = async () => {
    if (!decWord) return;
    const {data} = await axios.get(`https://ws3.morpher.ru/russian/declension?s=${decWord}`)
    const parser = new XMLParser();
    const parsedData = parser.parse(data).xml;
    for (let key in parsedData) {
      if (key === selectCase) setResult(parsedData[key]);
    }
    if (selectCase === 'И') setResult(decWord);
  }

  useMemo(() => {
    if (!decWord) {
      setSelectCase(null);
    }
    if (selectCase) {
      declensionWord();
    }
  }, [decWord, selectCase])

  return (
    <div className="App">
      <h1 className="Title">Склонение существительных и прилагательных</h1>
      <Form decWord={decWord}
            setDecWord={setDecWord}
            selectCase={selectCase}
            declensionWord={declensionWord}
            setSelectCase={setSelectCase}/>
      {result
        ? <div className="Result">{result}</div>
        : ''
      }
    </div>
  );
}

export default App;
