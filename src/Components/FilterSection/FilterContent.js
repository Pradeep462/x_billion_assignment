import React from 'react';
import './FilterContent.css';
import FilterSection from './FilterSection.js';

const FilterComponent = () => {
    return (
        <div className="contentholder">
            <div className="filterholder">
                <FilterSection  message={"Query type"}/>
                <FilterSection  message={"Module"}/>
                <FilterSection  message={"Submodule Module"}/>
                <FilterSection  message={"Chapter"}/><br/>
                
           </div>
           
           <button className="applybtn">Apply</button> 
        </div>
    );
};

export default FilterComponent;