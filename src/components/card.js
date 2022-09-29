import React, { useState } from 'react';
import { getSingleGistUrl } from "./config";
import { FileBox } from './FileBox';
import { Forks } from './Forks';

export const Cards = (gistData) => {
  const unidata = gistData.gistData;
  const files = unidata.files;
  
  const fileArr = [];
  for (let file in files) {
    let language = files[file].language;
    //remove duplicate file types
    if (fileArr.indexOf(language) === -1) {
      fileArr.push(language);
    }
  }

  const noOfFiles = Object.keys(files).length;

  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const moreOpen = async (value) => {
    if (value !== "") {
      try {
        const URL = getSingleGistUrl(value);
        const res = await fetch(URL);
        const data = await res.json();
        setData(data);
        setShow(true);
      } catch (e) {
        setShow(false);
      }
    }
  };

  return (
    <div className="site-card-wrapper">
      <div className='flex justify-between'>
        <h1 className="text-xl font-bold">{unidata.description || "No Description"}</h1>
        <button className="bg-blue-600 hover:bg-black transition-all duration-400 text-white py-2 px-4" type="primary" onClick={() => moreOpen(`/${unidata.id}`)}>
          Show Forks
        </button>
      </div>

      <p className="text-md font-medium mb-3">
        {noOfFiles} {noOfFiles > 1 ? "Files" : "File"}
      </p>


    
        <div className="flex flex-wrap gap-3 mb-3">
          {fileArr.map((language, index) => {
            return (
              <a href="#" key={index} className="bg-slate-400 text-white shadow-md shadow-slate-200 py-2 px-3 text-sm font-medium inline-block">
                {language}
              </a>
            );
          })}
        </div>
        


      <FileBox filelist={files} />

      {/* <Forks forks={data} /> */}
      {show && data !== [] ? <Forks forks={data} /> : null}
    </div>
  );
};