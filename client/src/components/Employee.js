import React,{useState} from 'react';
import axios from 'axios';

function Employee() {

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
        <div className="employee">
            <h3>Add Employee</h3>
            <form className="form" onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                <input
                type='text'
                placeholder='Employee Name'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
                required
                />
                </div>
                <div className='form-group'>
                <input
                    type='email'
                    placeholder='Email Address'
                    name='email'
                    value={email}
                    onChange={(e) => onChange(e)}
                    required
                    />
                </div>
                <div className="form-group">
                <input
                type='text'
                placeholder='Role'
                name='role'
                value={role}
                onChange={(e) => onChange(e)}
                required
                />
                </div>
                <div className="form-group">
                <input
                type='text'
                placeholder='Organization'
                name='organization'
                value={organization}
                onChange={(e) => onChange(e)}
                required
                />
                </div>

                <input type='submit' className='btn btn-primary' value='Submit' />

            </form>

            </div>
    )
}

export default Employee
