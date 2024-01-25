"use client";

import Link from "next/link";
import React from "react";
import Tag from "./tag";
import Popover from "./popover";

type Props = {
  tableData?: {
    siNo: number;
    links: string;
    prefix: string;
    addTags: string;
    selectedTags: string;
  }[];
};

const UploadTable = (props: Props) => {
  const { tableData } = props;

  return (
    <div className="overflow-x-auto hideScrollbar">
      <table className="mt-7">
        <thead>
          <tr>
            <th className="w-24">SI No.</th>
            <th className="md:min-w-60">Links</th>
            <th className="min-w-24">Prefix</th>
            <th className="min-w-40">Add Tags</th>
            <th className="min-w-60">Selected Tags</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row) => (
            <tr key={row.siNo}>
              <td>
                <div className="max-w-[80%] ml-auto rounded-tl-lg rounded-bl-lg">
                  {row.siNo}
                </div>
              </td>
              <td>
                <div>
                  <Link
                    href={row.links}
                    className="text-primary underline underline-offset-2"
                    target="_blank"
                  >
                    {row.links}
                  </Link>
                </div>
              </td>
              <td>
                <div>{row.prefix}</div>
              </td>
              <td>
                <div className="py-[10px]">
                  <Popover data={row.addTags} />
                </div>
              </td>
              <td>
                <div className="max-w-[94%] mr-auto py-3 rounded-tr-lg rounded-br-lg">
                  <Tag label={row.selectedTags} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UploadTable;
