import React, {useState,useEffect} from 'react'
import axios from 'axios';

const Listroles = ()=> {

    const [roleData, setRoleData] = useState([]);

    useEffect(()=>{
        loadData();
    },[]);

    const loadData = async () =>{
        try {
            
            const res = await axios.get("/role/show");

            // console.log(res.data);

            setRoleData(res.data);

        } catch (error) {
            console.error(error.response.data);
        }
    }

    const deleteRole = async (id) =>{
        // console.log(id);

        try {
            
            const res = await axios.delete("/role/"+id);

            alert("Role Deleted");

        } catch (error) {
            console.error(error.response.data);
        }

    }


        return (
            <div className="listusers">
                <h1>Role</h1>
                <br />
                <table id="employeetable">
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Remove Role</th>
                    </tr>
                    </thead>
                    <tbody>

                    {roleData.map((value,index)=>{
                        return(
                            <tr key={index}>
                                <td>{value.name}</td>
                                <td>{value.description}</td>
                                <td className="text-center deletebtn" onClick={()=> deleteRole(value._id)}>X</td>
                            </tr>
                        )
                    })}

                    </tbody>

                </table>

            </div>
        )
    
}

export default Listroles;