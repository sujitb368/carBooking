import React from "react";

function FormControl(props) {
  return (
    <>
      <div className="col-md-6">
        <label htmlFor="validationCustom02" className="form-label">
          Pin Code
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom02"
          placeholder="Enter your Pin Number"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
    </>
  );
}

export default FormControl;
