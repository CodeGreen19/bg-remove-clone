"use client";

import React, { ChangeEvent, useRef, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";

const UploadBtn = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewSrc(URL.createObjectURL(file));

      try {
        let form = new FormData();
        form.append("file", file);
        const data = await axios.post("/api/upload", form);

        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  return (
    <div className="md:flex_center px-14 md:my-2 md:h-[250px] md:w-full md:flex-col md:rounded-2xl md:shadow-lg">
      <input
        type="file"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
      />
      <Button
        className="my-4 w-full rounded-[50px] bg-main p-[28px] text-2xl text-white shadow-sm shadow-[black] hover:bg-black"
        onClick={() => fileInputRef.current?.click()}
      >
        Upload Image
      </Button>

      <div className="hidden md:block">
        <h1 className="text-lg font-semibold">Or Drag a file,</h1>
        <span className="text-[0.8rem]">
          paste a image or <span className="underline">Url</span>
        </span>
      </div>
    </div>
  );
};

export default UploadBtn;
