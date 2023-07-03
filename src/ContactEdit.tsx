import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ContactEdit = () => {
  const { userId } = useParams();
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const API = "https://average-fish-sundress.cyclic.app/updateContact";
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://average-fish-sundress.cyclic.app/contact/${userId}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setFirstName(resp.firstName);
        setLastName(resp.lastName);
        setPhoneNumber(resp.phoneNumber);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleSubmit = (e: any) => {
    const userData = { id, firstName, lastName, phoneNumber };
    e.preventDefault();
    fetch(API, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData),
    }).then((res) => {
      alert("Data Saved Successfully");
      navigate("/");
    });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card mt-5   ">
              <div className="card-title text-center">
                <h2 style={{ fontFamily: "Ysabeau SC" }}>Edit Contact</h2>
              </div>
              <div className="card-body">
                <input disabled hidden value={id} />
                <div className="row g-3">
                  <div className="col">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Good name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter Your 10 digits Number"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-info "
                  style={{ marginTop: "4%", marginLeft: "40%", color: "white" }}
                >
                  Submit
                </button>
                <Link
                  to="/"
                  className="btn btn-danger "
                  style={{ marginTop: "4%", marginLeft: "2%" }}
                >
                  {" "}
                  Back
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactEdit;
