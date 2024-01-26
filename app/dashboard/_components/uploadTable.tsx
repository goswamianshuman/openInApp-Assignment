"use client";

import Link from "next/link";
import React, { useState } from "react";
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

  const [selectedTagsByRow, setSelectedTagsByRow] = useState<{
    [key: string]: string[];
  }>({});

  const handleTagSelect = (tag: string, rowKey: string) => {
    // Check if the tag is already selected
    if (
      !selectedTagsByRow[rowKey] ||
      !selectedTagsByRow[rowKey].includes(tag)
    ) {
      // Update the state with the selected tag for the specific row
      setSelectedTagsByRow((prevTags) => ({
        ...prevTags,
        [rowKey]: [...(prevTags[rowKey] || []), tag],
      }));
    }
  };

  const handleTagRemove = (tag: string, rowKey: string) => {
    // Remove the tag from the selected tags for the specific row
    setSelectedTagsByRow((prevTags) => ({
      ...prevTags,
      [rowKey]: (prevTags[rowKey] || []).filter((t) => t !== tag),
    }));
  };

  console.log();

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
                  <Popover
                    onSelect={(tag) =>
                      handleTagSelect(tag, row.siNo.toString())
                    }
                    data={row.addTags}
                  />
                </div>
              </td>
              <td>
                <div
                  className={`max-w-[94%] mr-auto ${
                    selectedTagsByRow[row.siNo.toString()]
                      ? "py-3"
                      : "py-[26px]"
                  } rounded-tr-lg rounded-br-lg flex items-center gap-x-2`}
                >
                  {selectedTagsByRow[row.siNo.toString()] &&
                    selectedTagsByRow[row.siNo.toString()].map((tag) => (
                      <Tag
                        onRemove={() =>
                          handleTagRemove(tag, row.siNo.toString())
                        }
                        key={tag}
                        label={tag}
                      />
                    ))}
                  {selectedTagsByRow[row.siNo.toString()]?.length === 0 && (
                    <div className="py-[14px]" />
                  )}
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
