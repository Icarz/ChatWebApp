const Gender = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex justify-between">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text mx-1">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 mt-2"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text mx-1">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 mt-2"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default Gender;
