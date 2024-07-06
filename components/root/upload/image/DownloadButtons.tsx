import React from "react";
import { FaDownload } from "react-icons/fa";

const DownloadButtons = () => {
  return (
    <div className="my-5 flex items-center justify-start gap-1">
      <div className="flex_center gap-2 rounded-3xl border bg-sky-300 pr-5 hover:bg-sky-400">
        <div className="flex_center h-12 w-12 rounded-full border bg-green-400 text-white">
          <FaDownload />
        </div>
        Download
      </div>
      <div className="flex_center gap-2 rounded-3xl border bg-sky-400 pr-5 hover:bg-sky-500">
        <div className="flex_center h-12 w-12 rounded-full border bg-main text-white">
          <FaDownload />
        </div>
        <span className="text-sm">Download HD</span>
      </div>
    </div>
  );
};

export default DownloadButtons;
