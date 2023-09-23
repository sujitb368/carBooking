import React from "react";

function SignUp() {
  return (
    <>
      <div className="container p-5">
        <form
          className="row g-3 shadow p-2 needs-validation col-md-8 m-auto"
          noValidate
        >
          <h1 className="text-center">Enter Your Detsils</h1>
          <hr className="my-1" />
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              placeholder="Enter your First name"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              placeholder="Enter your Last name"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="validationCustom01"
              placeholder="Enter your Email"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom02" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="validationCustom02"
              placeholder="Enter your Password"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom02" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="validationCustom02"
              placeholder="Enter your Mobile number"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom02" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              placeholder="Enter your State"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
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
          <div className="col-md-6">
            <label htmlFor="validationCustom02" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              placeholder="Enter your City"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationCustom02" className="form-label">
              Address
            </label>
            <textarea
              type="text"
              className="form-control"
              id="validationCustom02"
              placeholder="Enter your Address"
              required
            ></textarea>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
          <div className="col-md-12 row">
            <div className="col-md-6">
              <input
                className=""
                type="radio"
                if="driver"
                checked
                name="userType"
              />
              <label className="" for="driver">
                Driver
              </label>
            </div>
            <div className="col-md-6">
              <input className="" type="radio" if="driver" name="userType" />
              <label className="" for="driver">
                Car Owner
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
