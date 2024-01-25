"use client";

import { UploadDashboardButton } from "@/public/icons";
import React, { useState } from "react";
import Papa from "papaparse";
import Image from "next/image";

type tableData = {
  siNo: number;
  links: string;
  prefix: string;
  addTags: string;
  selectedTags: string;
}[];

const UploadCard = () => {
  const [tableData, setTableData] = useState<tableData>([]);

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
  };

  const handleFileInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
    }
  };

  const parseCsvFile = (file: File) => {
    Papa.parse(file, {
      complete: (result) => {
        // Assuming the CSV structure is like this: SI No., Links, Prefix, Add Tags, Selected Tags
        const headerRow: any = result.data[0];
        const dataRows = result.data.slice(1);

        const formattedData: any = dataRows.map((row: any) => {
          return {
            siNo: row[headerRow.indexOf("SI No.")],
            links: row[headerRow.indexOf("Links")],
            prefix: row[headerRow.indexOf("Prefix")],
            addTags: row[headerRow.indexOf("Add Tags")],
            selectedTags: row[headerRow.indexOf("Selected Tags")],
          };
        });

        setTableData(formattedData);
      },
      header: true, // Assumes the first row in the CSV is the header
    });
  };

  const handleInputClick = () => {
    const fileInput = document.querySelector(
      "input[type=file]"
    ) as HTMLInputElement | null;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div className="mt-5 bg-white p-4 max-w-[596px] mx-auto rounded-lg">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="flex items-center justify-center flex-col min-h-[258px] rounded-lg border border-dashed border-black/10"
      >
        <div className="relative h-8 w-8 mb-2">
          <Image
            className="object-center object-cover"
            src="/images/csv.svg"
            alt="csv"
            fill
          />
        </div>
        <input
          type="file"
          accept=".yaml, .yml"
          onChange={handleFileInputChange}
          style={{ display: "none" }}
          multiple
        />
        <p className="font-figtree md:hidden text-sm font-normal">
          Upload your excel sheet{" "}
          <span
            role="button"
            onClick={handleInputClick}
            className="text-primary"
          >
            here
          </span>
        </p>
        <p className="font-figtree hidden md:block text-sm font-normal">
          Drop your excel sheet here or{" "}
          <span
            role="button"
            onClick={handleInputClick}
            className="text-primary"
          >
            browse
          </span>
        </p>
      </div>

      <button className="bg-primary text-white mt-4 w-full flex items-center justify-center gap-x-3 font-figtree font-semibold text-sm">
        <UploadDashboardButton /> Upload
      </button>
    </div>
  );
};

export default UploadCard;
