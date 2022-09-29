import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';




export const Loader = () => {
    return (
        <>
            <div className='backdrop-blur-xl bg-white/30 fixed flex inset-0 items-center justify-center'>
                <button type="button" className="items-center bg-indigo-500 flex p-4 text-white" disabled>
                    <FontAwesomeIcon icon="spinner" className="animate-spin mr-2" />
                    Processing...
                </button>
            </div>
        </>
    );
};
