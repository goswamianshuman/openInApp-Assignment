"use client";

import React, { useEffect, useState } from "react";

type Props = {
  data: string;
  onSelect: (tag: string) => void;
};

const Popover = ({ data, onSelect }: Props) => {
  const [active, setActive] = useState(false);
  const [tags, setTags] = useState([]);

  function stringToArray(inputString: string) {
    const trimmedString = inputString.trim();

    if (trimmedString) {
      const arrayResult = trimmedString.split(",").map((tag) => tag.trim());

      return arrayResult;
    }
    return [];
  }

  useEffect(() => {
    const newData = stringToArray(data);
    setTags(newData as []);
  }, [data]);

  return (
    <div className="w-[150px] h-[32px] relative rounded-lg border-[1.5px]">
      <div className="h-full w-full px-4 flex items-center justify-center gap-x-4">
        <p className="font-figtree font-normal text-sm text-black">
          Select Tags
        </p>
        <img
          role="button"
          onClick={() => setActive(!active)}
          src="/images/arrow-down.svg"
          alt="cross"
          className={`${
            active && "rotate-180 transition-all ease-linear duration-200"
          }`}
        />
      </div>

      {active && (
        <div
          className={`absolute z-[99999] bg-white w-[150px] p-2 max-h-[205px] shadow-md shadow-black/5 rounded-lg border-[1.5px] mt-2 overflow-y-auto hideScrollbar`}
        >
          {tags?.map((data, i) => (
            <div
              key={i}
              role="button"
              onClick={() => onSelect(data)}
              className="py-2 px-2 rounded-lg text-black hover:bg-[#F5F5F5] active:bg-[#F5F5F5] transition-all ease-linear duration-200 flex items-center font-figtree font-normal text-sm"
            >
              {data}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Popover;
