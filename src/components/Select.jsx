import React from 'react';

const Select = ({selectCase, setSelectCase, declensionWord}) => {
  const cases = [
    {title: 'Именительный', value: 'И'},
    {title: 'Родительный', value: 'Р'},
    {title: 'Дательный', value: 'Д'},
    {title: 'Винительный', value: 'В'},
    {title: 'Творительный', value: 'Т'},
    {title: 'Предложный', value: 'П'}
  ];

  return (
    <select className="Input"
            defaultValue="default"
            value={selectCase}
            onChange={event => {
              setSelectCase(event.target.value);
              declensionWord(selectCase);
            }}>
      <option value="default" disabled>Выберите падеж</option>
      {cases.map(obj =>
        <option key={obj.title} value={obj.value}>{obj.title}</option>
      )}
    </select>
  );
};

export default Select;