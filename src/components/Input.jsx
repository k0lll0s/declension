import React from 'react';
import '../styles/App.css';

const Input = ({decWord, setDecWord, setSelectCase}) => {
  return (
      <input
        type="text"
        className="Input"
        value={decWord}
        onChange={e => {
          setDecWord(e.target.value);
          setSelectCase();
        }}
        placeholder="Введите существительное"/>
  );
};

export default Input;