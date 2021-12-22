import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PunkList from "./components/PunkList/PunkList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNFTs = async () => {
      const openSeadata = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xB9Fc0D0c7Fe1E5c9cd5EF459acc2ebe25a835FC1&order_direction=asc"
      );

      setPunkListData(openSeadata.data.assets);
    };
    return getMyNFTs();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
