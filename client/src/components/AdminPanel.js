import React,{Fragment,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AdminPanel = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role:"",
        organization:""
      });
    
      const { name,email,role,organization } = formData;      

      const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

      const onSubmit = async (e) => {
        e.preventDefault();

        const newEmployee = {
            name,email,role,organization
        };

        try {
            const config = {
                headers:{
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(newEmployee);

            const res = await axios.post('/employee/add', body, config);
 
            alert("Form Submitted");

        } catch (error) {
            console.error(error.response.data);
        }
        
      };

    return (
        <Fragment>

        <div>   

        <div>
            <h2>Employee</h2><br/>
            <Link to='/employee' className="btn btn-primary">Add Employee</Link>
            {/* <Link to='/employee' className="btn btn-danger">Delete Employee</Link> */}
        </div>
        <br />
         <div>
            <h2>Role</h2><br/>
            <Link to='/role' className="btn btn-primary">Add Role</Link>
        </div>
        <br />
        <div>
            <h2>Organization</h2><br/>
            <Link to='/organization' className="btn btn-primary">Add Organization</Link>
        </div> 
        <br />

        </div>
        </Fragment>
    )
}

export default AdminPanel;
