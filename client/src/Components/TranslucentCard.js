import React, { useState } from "react";

const TranslucentCard = (props) => {
  const [isCopied, setIsCopied] = useState(false);
  const cardStyle = {
    background: "rgba(255, 255, 255, 0.8)",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };
  const code = `${props.address}`;

  const handleCopyClick = () => {
    const textarea = document.createElement("textarea");
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    setIsCopied(true);

    // Reset the "Copied" message after a certain time
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };




  return (
    <div className="col-md-4 mb-3">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <code>{code}</code>
          <br/>
          <button onClick={handleCopyClick} className="btn btn-secondary">
            copy address
          </button>
          {isCopied && <div className="text-success mt-2">Copied!</div>}
          <p className="card-text">
            {props.desc}   </p>
        </div>
      </div>
    </div>
  );
};

export default TranslucentCard;
