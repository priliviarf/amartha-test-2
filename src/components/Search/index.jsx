import { useState } from "react";

function Search({ onSubmit }) {
  const initialValue = {
    search: "",
    type: "",
  };
  const [formValue, setFormValue] = useState(initialValue);

  return (
    <form onSubmit={handleSubmit}>
      <input name="search" onChange={handleChange} />

      <select name="type" onChange={handleChange}>
        <option value="1">One</option>
        <option value="2">Two</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValue((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let submittedValue = { ...formValue };

    // removed null/undefined value
    Object.keys(submittedValue).forEach((key) =>
      submittedValue[key] === undefined ||
      submittedValue[key] === "" ||
      submittedValue[key] === null
        ? delete submittedValue[key]
        : {}
    );

    onSubmit(submittedValue);
  }
}

export default Search;
