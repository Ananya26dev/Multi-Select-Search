import React, { useState } from "react";
import Select from "react-select";
import "./App.css";

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const option = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "grape", label: "Grape" },
    { value: "orange", label: "Orange" },
  ];
  const handleChange = (selectedValue) => {
    setSelectedOptions(selectedValue);
  };
  return (
    <>
      <div>
        <h2>Select Fruits:</h2>
        <Select
          isMulti
          options={option}
          value={selectedOptions}
          onChange={handleChange}
          placeholder="Search and select fruits..."
        />
      </div>
      {selectedOptions.length > 0 && (
        <div className="display-box">
          <h3>Selected Fruits are:</h3>
          <ul>
            {selectedOptions.map((option) => (
              <li key={option.value}>{option.label}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default App;
