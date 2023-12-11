import React, { useState } from "react";
import { ethers } from "ethers";
import Modal from "react-bootstrap/Modal";
import LoaderWithStyles from "./Loader";

const Pay = (props) => {
  const { contract, provider } = props;
  const [formData, setFormData] = useState({
    value: "",
    recipient: "",
  });
  const [loading, setloading] = useState(false);
  const [transactionmessage, settransmessage] = useState("lmao");

  const handleRecipientChange = (e) => {
    const recipientValue = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      recipient: recipientValue,
    }));
  };

  const handleValueChange = (e) => {
    const value = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      value: value,
    }));
  };

  const handleTransaction = async () => {
    setloading(true);
    if (!contract) {
      console.error("Contract not initialized");
      return;
    }

    const { value, recipient } = formData;
    try {
      const tx = await contract.Payment(recipient, {
        value: ethers.parseEther(value),
      });

      const txHash = tx.hash;

      let receipt = await provider.getTransactionReceipt(txHash);

      while (!receipt) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        receipt = await provider.getTransactionReceipt(txHash);
      }
      setloading(false);
      console.log(`Reciept : ${receipt}`);
      settransmessage("Transaction Successful :)");
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <section
        className="background-radial-gradient overflow-hidden"
        style={{
          minHeight: "800px",
        }}
      >
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  ",
          }}
        />
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                Ether-Bucket <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  Empowering Collaborative Finance and Seamless Transactions on
                  the Blockchain
                </span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                Ether-Bucket is an innovative application designed to
                revolutionize collaborative finance and streamline transactions
                within a secure blockchain ecosystem. With Ether-Bucket, users
                can create funding initiatives, fostering a community-driven
                approach to financial empowerment. Whether you're launching a
                project, seeking support for a cause, or engaging in
                collaborative ventures, Ether-Bucket provides a decentralized
                platform for transparent and efficient fundraising.
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              />
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              />
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3"
                        className="form-control"
                        value={formData.recipient}
                        onChange={handleRecipientChange}
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Sender's Address
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example4"
                        className="form-control"
                        value={formData.value}
                        onChange={handleValueChange}
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Amount
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example4"
                        className="form-control disabled"
                        value={props.address}
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        User Address
                      </label>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary btn-block mb-4"
                      onClick={() => {
                        handleShow();
                        handleTransaction();
                      }}
                    >
                      Pay {formData.value && <>{formData.value} ETH</>}
                    </button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header
                        closeButton
                        style={{
                          backgroundImage:
                            "url('https://images.pexels.com/photos/6258535/pexels-photo-6258535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                          backgroundSize: "cover",
                        }}
                      >
                        <Modal.Title style={{ color: "greenyellow" }}>
                          Transaction
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body
                        style={{
                          backgroundImage:
                            "url('https://images.pexels.com/photos/401107/pexels-photo-401107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                          backgroundSize: "cover",
                          color: "white",
                        }}
                      >
                        {!loading && transactionmessage}
                        {loading && <LoaderWithStyles />}
                      </Modal.Body>
                    </Modal>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pay;
