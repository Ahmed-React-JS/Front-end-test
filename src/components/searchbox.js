import React, { useState } from "react";
import { Loader } from './loader'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllGistUrl } from "./config";
import { SearchResults } from "./searchResult";


export const SearchBar = () => {

    const [username, setUsername] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    

    const onSearch = async () => {
        setLoading(true);
        if (username && username !== "") {
            try {
                const URL = getAllGistUrl(username);
                const res = await fetch(URL);
                const data = await res.json();
                setData(data);
                setLoading(false);
                setError(false);
            } catch (e) {
                setLoading(false);
                setError(true);
            }
        } else if (username === "") {
            setLoading(false);
            setError(true);
        }
        setLoading(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch();

        }
    }


    return (
        <>
            <div className="bg-slate-500 h-screen p-4">
                <h1 className="text-white font-weight-600 mb-3 text-xl">Search By User</h1>
                <div className="flex w-full">
                    <input className="px-4 py-2 w-full" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Search For A User..." onKeyDown={handleKeyDown} />
                    <button className="bg-blue-500 text-white border-l flex items-center justify-center px-4" onClick={() => onSearch()}>
                        <FontAwesomeIcon icon="search" />
                    </button>
                </div>
                {loading ? <Loader></Loader> : null}

                {username !== "" && data && !error ? (
                    <SearchResults data={data} username={username} />
                ) : null}
            </div>
        </>
    );
};
