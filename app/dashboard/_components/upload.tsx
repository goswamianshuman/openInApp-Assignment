"use client";

import { UploadDashboardButton } from "@/public/icons";
import React, { useState } from "react";
import Papa from "papaparse";
import Image from "next/image";
import Loader from "./loader";

type Props = {
  tableData?: [];
  setTableData: React.Dispatch<any>;
};

const UploadCard = ({ tableData, setTableData }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFile(droppedFiles[0]);
  };

  const handleFileInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFile(selectedFiles[0]);
    }
  };

  const handleInputClick = () => {
    const fileInput = document.querySelector(
      "input[type=file]"
    ) as HTMLInputElement | null;
    if (fileInput) {
      fileInput.click();
    }
  };

  const parseCsvFile = (file: File) => {
    Papa.parse(file, {
      complete: (result) => {
        console.log(result);
        const formattedData = result.data.map((row: any) => {
          return {
            siNo: row.id,
            links: row.links,
            prefix: row.prefix,
            addTags: row["select tags"],
            selectedTags: row["selected tags"],
            // Add more properties as needed
          };
        });

        setTableData(formattedData);
      },
      header: true,
    });
  };

  const handleConversion = () => {
    setIsLoading(true);
    setTimeout(() => {
      parseCsvFile(file as File);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="mt-5 bg-white p-4 max-w-[596px] mx-auto rounded-lg">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className={`flex items-center justify-center flex-col min-h-[258px] rounded-lg border border-dashed ${
          file ? "border-primary" : "border-black/10"
        }`}
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
          accept=".csv"
          onChange={handleFileInputChange}
          style={{ display: "none" }}
          multiple
        />
        {file ? (
          <>
            <p className="font-figtree text-sm font-normal text-[#999CA0]">
              {file?.name}
            </p>
            <p
              role="button"
              onClick={() => {
                setFile(null);
                setTableData([]);
              }}
              className="font-figtree text-sm font-normal text-[#D33030]"
            >
              Remove
            </p>
          </>
        ) : (
          <>
            <p className="font-figtree md:hidden text-sm font-normal text-[#999CA0]">
              Upload your excel sheet{" "}
              <span
                role="button"
                onClick={handleInputClick}
                className="text-primary"
              >
                here
              </span>
            </p>
            <p className="font-figtree hidden md:block text-sm font-normal text-[#999CA0]">
              Drop your excel sheet here or{" "}
              <span
                role="button"
                onClick={handleInputClick}
                className="text-primary"
              >
                browse
              </span>
            </p>
          </>
        )}
      </div>

      <button
        onClick={handleConversion}
        disabled={!file}
        className={` ${
          tableData?.length !== 0 ? "bg-primary/50" : "bg-primary"
        } disabled:cursor-not-allowed text-white mt-4 w-full flex items-center justify-center gap-x-3 font-figtree font-semibold text-sm`}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <UploadDashboardButton /> Upload
          </>
        )}
      </button>
    </div>
  );
};

export default UploadCard;
