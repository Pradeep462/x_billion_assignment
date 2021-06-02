import React from 'react';
import './FilterSection.css';


const FilterSection = ({message}) => {
    return (
        <div>

            <div className="selectbox" >
            {/*  */}
            <select>
                     <option>{`Select ${message}`}</option>
                     <option>item 2</option>
                     <option>item 3</option>
             </select>
           </div>
           <h6 className="heading">{`Please select your ${message}`}</h6>
        </div>
    );
};

export default FilterSection;
