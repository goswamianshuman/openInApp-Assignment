"use client";

import React, { useState } from "react";
import UploadCard from "./_components/upload";
import UploadTable from "./_components/uploadTable";

type Props = {};

const Dashboard = (props: Props) => {
  const [tableData, setTableData] = useState<any>([]);

  return (
    <div className="container mt-7">
      <h4 className="md:hidden font-nunito font-bold text-base text-sidebar">
        Upload CSV
      </h4>

      <UploadCard tableData={tableData} setTableData={setTableData} />

      {tableData.length !== 0 && (
        <div className="my-10">
          <p className="text-base font-bold font-nunito md:text-2xl md:font-figtree md:font-semibold ">
            Uploads
          </p>
          <UploadTable tableData={tableData} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
