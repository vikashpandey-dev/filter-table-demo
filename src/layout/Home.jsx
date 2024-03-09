import React from "react";
import { tempUserData } from "../data";
import { homeContainer } from "../container/home.container";
import DataTable from "../components/DataTable";
import Filter from "../components/Filter";

const Home = () => {
  const {} = homeContainer(tempUserData);
  return (
    <div>
      <Filter data={tempUserData} />
      <DataTable data={tempUserData} />
    </div>
  );
};

export default Home;
