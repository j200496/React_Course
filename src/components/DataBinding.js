import React from 'react';

const DataBinding = () => {
    const tutorialName = " React Tutorial";
    const courseNumber = 123;
    const isActive = true;
    const currentDate = new Date();
    
    const student = {
        name: 'Joel',
        city: 'Santo Domingo',
        province: 'Santo Domingo'
    };

    const provinceList = ['Santo Domingo','Santiago','La Vega'];

    return (
        <div>
            <h4>Data Binding</h4>
            <input type='text'value={tutorialName} />
           <table>
            <tr>
              <td>Tutorial Name - {tutorialName}</td>
                <td>Course number - {courseNumber}</td>
                 <td>Is Active - {isActive ? 'true': 'false'}</td>
                  <td>Current Date - {currentDate.toString()}</td>
            </tr>
            <tr>
                <td>
                    Student name-{student.name}, Student city-{student.city}
                </td>
            </tr>
            <tr>
                <td>
                   {provinceList.toString()}
                </td>
            </tr>
           </table>
        </div>
    );
};

export default DataBinding;