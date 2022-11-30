import { useState } from "react";

function CreateCourseTitle({ visible, handle }) {
  const [length, setLength] = useState(60);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const handleCreateCourse = () => {
    if (value.length === 0 || !/^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9 ]+$/.test(value)) {
      setError(true);
    } else {
      console.log("enviado");
    }
  };
  return (
    <div
      className={`${"main-container-create-course"} ${
        visible ? "main-container-create-course-visible" : null
      }`}
    >
      <div
        onClick={() => {
          setValue("");
          handle();
        }}
        className="main-container-opacity-create-course-title"
      ></div>
      <div className="container-create-course-title">
        <h2 className="title-create-course-title">
          How about a working title?
        </h2>
        <p className="info-create-course-title">
          It's ok if you can't think of a good title now. You can change it
          later.
        </p>
        <label className="container-input-create-course-title" htmlFor="title">
          <input
            value={value}
            maxLength={60}
            onChange={(e) => {
              if (length !== 0) {
                setValue(e.target.value);
              }
              if (/^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9 ]+$/.test(e.target.value)) {
                setError(false);
              } else {
                setError(true);
              }
            }}
            id="title"
            type="text"
            placeholder="e.g Learn Photoshop CS6 from Scratch"
          />
          <span>{length - value.length}</span>
        </label>
        {error ? (
          <p className="error-create-course-title">
            Only letters and numbers, minimum length 1
          </p>
        ) : null}
        <button
          onClick={handleCreateCourse}
          className="btn-create-course-title"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
export default CreateCourseTitle;
