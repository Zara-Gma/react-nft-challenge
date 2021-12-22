import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import CollectionCard from "./components/CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0xF17b4Bb4F49b7Ec68f6428568055Ae953E5F6f65"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      {/* <Main /> */}
      <CollectionCard />
      <punkList punkListData={punkListData} />
    </div>
  );
}

export default App;
