import React, {useState,useEffect} from 'react'
import axios from 'axios';

const Listusers = ()=> {

    const [empData, setEmpData] = useState([]);

    useEffect(()=>{
        loadData();
    },[]);

    const loadData = async () =>{
        try {
            
            const res = await axios.get("http://localhost:5000/employee/show");

            setEmpData(res.data);

        } catch (error) {
            console.error(error.response.data);
        }
    }

    const deleteEmp = async (id) =>{
        // console.log(id);

        try {
            
            const res = await axios.delete("/employee/"+id);

            alert("Employee Deleted");

        } catch (error) {
            console.error(error.response.data);
        }

    }


        return (
            <div className="listusers">
                <h1>Employees</h1>
                <br />
                <table id="employeetable">
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Organization</th>
                    <th>Remove User</th>
                    </tr>
                    </thead>
                    <tbody>

                    {empData.map((value,index)=>{
                        return(
                            <tr key={index}>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.role}</td>
                                <td>{value.organization}</td>
                                <td className="text-center deletebtn" onClick={()=> deleteEmp(value._id)}>X</td>
                            </tr>
                        )
                    })}

                    </tbody>

                </table>

            </div>
        )
    
}

export default Listusers;