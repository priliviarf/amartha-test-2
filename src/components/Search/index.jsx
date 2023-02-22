import { useState } from "react";
import "./style.scss";

/**
 *
 * @typedef SearchProps
 * @property {() => void} onSubmit
 *
 * @param {SearchProps} props
 * @returns
 */
function Search({ onSubmit }) {
  const initialValue = {
    q: "",
    type: "",
    status: "",
  };
  const [formValue, setFormValue] = useState(initialValue);

  const types = [
    { label: "All Type", value: "all" },
    { label: "TV", value: "tv" },
    { label: "Movie", value: "movie" },
    { label: "Original Video Animation", value: "ova" },
    { label: "Special", value: "special" },
    { label: "Originial Net Animation", value: "ona" },
    { label: "Music", value: "music" },
  ];

  const status = [
    { label: "All Status", value: "all" },
    { label: "Airing", value: "airing" },
    { label: "Complete", value: "complete" },
    { label: "Upcoming", value: "upcoming" },
  ];

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="fields">
        <input name="q" placeholder="Title" onChange={handleChange} />

        <select name="type" onChange={handleChange}>
          {types.map(({ value, label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>

        <select name="status" onChange={handleChange}>
          {status.map(({ value, label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="buttons">
        <button type="submit">Search</button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );

  function handleReset() {
    setFormValue(initialValue);
    onSubmit({});
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValue((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let submittedValue = { ...formValue };

    // removed null/undefined value
    Object.keys(submittedValue).forEach((key) =>
      submittedValue[key] === "all" ||
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
