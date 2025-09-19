import React from 'react';

const MapOperator = () => {
    const cityList = ['Santo Domingo','La vega','Santiago','Bonao'];
    const tableheaders = [{name:'Name',age:'Age',matricula:'Matricula'}];
    const studetobj = [{name:'Joel',age:32,matricula:1234},
        {name:'Pedro',age:35,matricula:5648},
        {name:'Maria',age:37,matricula:1254},
        {name:'Ana',age:34,matricula:1694},

    ]
    return (
        <div>
            <div class="row justify-content-center">
                <div class="col-6">
                    <h3>Looping through Array objects with Map Operator</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                  <ul className='text-white'>
                    {
                        cityList.map((city) => {
                           return <li>{city}</li>
                        })
                    }
                  </ul>
                </div>
                <div class="col-3">
                 <select className='form-select'>
                     {
                        cityList.map((city) => {
                         return <option value="">{city}</option>
                        })
                     }
                 </select>
                </div>
                <div class="col-3">
                  <table className='table table-bordered table-primary'>
                    <thead className=''>
                      {
                        tableheaders.map((theader) => {
                            return(<tr>
                                 <th>Index</th>
                                <th>{theader.name}</th>
                                <th>{theader.age}</th>
                                <th>{theader.matricula}</th>
                            </tr>)
                        })
                      }
                    </thead>
                    <tbody>              
                                                {
                                studetobj.map((student, index) => {
                                   return (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{student.name}</td>
                                        <td>{student.age}</td>
                                        <td>{student.matricula}</td>
                                    </tr>
                                   )                        
                                })
                            }
                     
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    );
};

export default MapOperator;