const Gender = () => {
  return (
    <div className="flex justify-between">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text mx-1">Male</span>
          <input type="checkbox" className="checkbox border-slate-900 mt-2" />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text mx-1">Female</span>
          <input type="checkbox" className="checkbox border-slate-900 mt-2" />
        </label>
      </div>
    </div>
  );
};

export default Gender;
