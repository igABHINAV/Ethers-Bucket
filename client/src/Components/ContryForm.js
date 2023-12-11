import React, { useState } from "react";

const ContryForm = () => {
  const formStyle = {
    background: "rgba(255, 255, 255, 0.5)", // Adjust the alpha value for transparency
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: Add a subtle shadow
  };

  const [address, setaddress] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [status , setst] = useState(false);
  const handlesubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address, title, desc }),
      });
      let data = await(response.json());
      if(data.success) setst(true);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "800px",
        backgroundSize: "cover",
        backgroundImage:
          "url('https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form style={formStyle}>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Title"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                  placeholder="Enter your address"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Description" className="form-label">
                  Description
                </label>
                <textarea
                  type="text"
                  value={desc}
                  onChange={(e) => setdesc(e.target.value)}
                  className="form-control"
                  id="Description"
                  placeholder="Enter your address"
                />
              </div>

              <button
                type="button "
                onClick={handlesubmit}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
            {status && <div className="text-success">Form submitted successfully</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContryForm;
