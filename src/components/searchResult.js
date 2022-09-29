import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cards } from "./card";

export const SearchResults = (data, username) => {
    const userdata = data.data;
    console.log(userdata);
    return (
        <>
            {username !== null && username.length !== 0 ? (
                <>
                    {userdata.message == 'Not Found' ? (
                        <>
                            <div role="alert">
                                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 mt-3">
                                    Alert
                                </div>
                                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                    <p>No Data Found</p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-3" role="alert">
                                <div className="flex">
                                    <div className="py-1">
                                        <FontAwesomeIcon icon="check-circle" className="mr-3" />
                                    </div>
                                    <div>
                                        <p className="font-bold">{data.username} 's Gists</p>
                                        <p className="text-sm">{userdata.length} Gists found</p>
                                    </div>
                                </div>
                            </div>
                        </>)}

                    <ul className="description-list">
                        {userdata.length > 0 && userdata?.map((gist, index) => {
                            return <li className="p-4 shadow-md"><Cards key={gist.id} gistData={gist} /></li>;
                        })}
                    </ul>
                </>
            ) : (null)}

        </>
    );
};