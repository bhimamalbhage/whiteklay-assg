import React, {useState,useEffect} from 'react'
import axios from 'axios';

const Listorg = ()=> {

    const [orgData, setOrgData] = useState([]);

    useEffect(()=>{
        loadData();
    },[]);

    const loadData = async () =>{
        try {
            
            const res = await axios.get("/organization/show");

            // console.log(res.data);

            setOrgData(res.data);

        } catch (error) {
            console.error(error.response.data);
        }
    }

    const deleteOrg = async (id) =>{
        // console.log(id);

        try {
            
            const res = await axios.delete("/organization/"+id);

            alert("Organization Deleted");

        } catch (error) {
            console.error(error.response.data);
        }

    }


        return (
            <div className="listusers">
                <h1>Organization</h1>
                <br />
                <table id="employeetable">
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Size of Org Unit</th>
                    <th>Description</th>
                    <th>Remove Org</th>
                    </tr>
                    </thead>
                    <tbody>

                    {orgData.map((value,index)=>{
                        return(
                            <tr key={index}>
                                <td>{value.name}</td>
                                <td>{value.size}</td>
                                <td>{value.description}</td>
                                <td className="text-center deletebtn" onClick={()=> deleteOrg(value._id)}>X</td>
                            </tr>
                        )
                    })}

                    </tbody>

                </table>

            </div>
        )
    
}

export default Listorg;