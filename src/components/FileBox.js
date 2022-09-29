import React from "react";

export const FileBox = (filelist) => {
  const files = filelist.filelist;
  return (
    <div className="border-2 p-4">
      <p className="text-md font-medium">Files:</p>
      <ol className="list-disc ml-4">
        {Object.values(files).map((file, index) => {
          return (
            <li key={index}>
              <a href={file.raw_url} className="text-blue-500" target="_blank" rel="noreferrer">
                {file.filename}
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
