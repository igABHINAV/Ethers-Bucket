import { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import abi from "./contract/PaymentGateway.json";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Components/Cards";
import ContryForm from "./Components/ContryForm";
import NavBar from "./Components/NavBar";
import Pay from "./Components/Pay";
import { ethers } from "ethers"; // Use import instead of require

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
    connectedAddress: null
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x4E3c25d92e9e949D04df942010F87FC5036De126";
      const contractabi = abi.abi;

      try {
        // Check if window.ethereum is defined before using it
        if (window.ethereum) {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const provider = new Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const connectedAddress = await signer.getAddress();
          const contract = new ethers.Contract(
            contractAddress,
            contractabi,
            signer
          );

          setState({ provider, signer, contract, connectedAddress });
        }
      } catch (error) {
        console.error(error);
      }
    };

    connectWallet();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Pay provider ={state.provider} signer = {state.signer} contract = {state.contract} address = {state.connectedAddress}/>} />
          <Route path="/funding" element={<Cards />} />
          <Route path="/form" element={<ContryForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
