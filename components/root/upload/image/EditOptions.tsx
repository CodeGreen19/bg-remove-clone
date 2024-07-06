import { Button } from "@/components/ui/button";
import React from "react";
import { FaDownload } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import AddBackgroundBox from "./AddBackgroundBox";

const EditOptions = () => {
  return (
    <div className="flex_center w-full">
      <AddBackgroundBox>
        <div className="flex_center m-auto gap-2 rounded-[50px] border bg-slate-50 p-4 hover:bg-slate-100 sm:w-[400px]">
          <IoMdAdd />
          Add Backgrund
        </div>
      </AddBackgroundBox>
    </div>
  );
};

export default EditOptions;
