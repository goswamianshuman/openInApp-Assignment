"use client";

import React from "react";
import UploadCard from "./_components/upload";
import UploadTable from "./_components/uploadTable";

type Props = {};

const Dashboard = (props: Props) => {
  const tableData = [
    {
      siNo: 1,
      links: "http://example.com",
      prefix: "ABC",
      addTags: "Tag1, Tag2",
      selectedTags: "Tag1",
    },
    {
      siNo: 2,
      links: "http://another-example.com",
      prefix: "XYZ",
      addTags: "Tag3, Tag4",
      selectedTags: "Tag4",
    },
    {
      siNo: 3,
      links: "http://another-example.com",
      prefix: "XYZ",
      addTags: "Tag3, Tag4",
      selectedTags: "Tag4",
    },
    // Add more rows as needed
  ];

  return (
    <div className="container mt-7">
      <h4 className="md:hidden font-nunito font-bold text-base text-sidebar">
        Upload CSV
      </h4>

      <UploadCard />

      <UploadTable tableData={tableData} />
    </div>
  );
};

export default Dashboard;
