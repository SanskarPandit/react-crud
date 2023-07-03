import { useEffect, useState } from "react";
import "./ContactListing.css";
import { Link, useNavigate } from "react-router-dom";
function ContactListing() {
  const navigate = useNavigate();
  const LoadEdit = (id) => {
    navigate("/edit/" + id);
  };

  const DeleteData = (_id) => {
    if (window.confirm("Do u really want to remove?")) {
      fetch("https://average-fish-sundress.cyclic.app/removeContact/" + _id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Data Deleted Successfully");
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    }
    console.log(id);
  };
  let API = "https://average-fish-sundress.cyclic.app/allContacts";
  const [user, setuser] = useState(null);
  const fetchApi = async (url: any) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setuser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi(API);
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", fontFamily: "Ysabeau Infant" }}>
        Contact Management in REACT
      </h1>
      <div className="card mt-5">
        <div className="card-title text-center">
          <h2 style={{ fontFamily: "Ysabeau SC" }}>All Contacts</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link
              className="btn btn-success"
              to={"/create"}
              style={{ marginBottom: "2%" }}
            >
              Add New(+)
            </Link>
          </div>
          <table className="table table-primary table-hover">
            <thead>
              <tr>
                <th scope="col"> Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone No</th>

                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {user &&
                user.map((item) => (
                  <tr key={item._id}>
                    {/* <td>{item.id}</td> */}
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.phoneNumber}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => {
                          LoadEdit(item._id);
                        }}
                      >
                        Edit
                      </button>
                    </td>

                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          DeleteData(item._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default ContactListing;
