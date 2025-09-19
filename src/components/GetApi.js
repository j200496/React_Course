import axios from 'axios';
import React, { useState } from 'react';

const GetApi = () => {

    const [userlist,setuserList] = useState([]);
    const getUsers = async () => {
        const apiresponse = await axios.get("https://jsonplaceholder.typicode.com/users");
        debugger;
        setuserList(apiresponse.data);
    }
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-4">
                    <h3>Get Api</h3>
                </div>
                <div className="row">
                    <div className="col-6">
                      <ul>
                        {
                            userlist.map((users)=>{
                                return (<li>{users.name}</li>)
                            })
                        }
                      </ul>
                      <button className='btn btn-primary' onClick={getUsers}>Get List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetApi;