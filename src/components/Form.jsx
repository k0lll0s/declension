import React from 'react';
import Input from "./Input";
import Select from "./Select";

const Form = ({decWord, setDecWord, selectCase, setSelectCase, declensionWord}) => {
  return (
    <form className="Form">
      <Input decWord={decWord} setDecWord={setDecWord} setSelectCase={setSelectCase}/>
      {decWord
        ? <Select selectCase={selectCase} setSelectCase={setSelectCase} declensionWord={declensionWord}/>
        : ''
      }
    </form>
  );
};

export default Form;