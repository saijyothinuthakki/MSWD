import React from 'react';

const Filter = ({filtername, setFilterName}) => {
    return (
        <div>
            Search for name: <input value={filtername} 
                onChange={event => setFilterName(event.target.value)}
            />
        </div>
    );
};

export default Filter;