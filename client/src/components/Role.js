import React,{useState} from 'react';
import axios from 'axios';

function Role() {

    const [formData, setFormData] = useState({
        name: "",
        description:""
      });
    
      const { name,description } = formData;      

      const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

      const onSubmit = async (e) => {
        e.preventDefault();

        const newRole = {
            name,description
        };

        try {
            const config = {
                headers:{
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(newRole);

            const res = await axios.post('/role/add', body, config);
 
            alert("Role Added");

        } catch (error) {
            console.error(error.response.data);
        }
        
      };


    return (
        <div>
            <h3>Add Role</h3><br/>
            <form className="form" onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                <input
                type='text'
                placeholder='Role Name'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
                required
                />
                </div>

                <div className="form-group">
                <input
                type='text'
                placeholder='Description'
                name='description'
                value={description}
                onChange={(e) => onChange(e)}
                required
                />
                </div>

                <input type='submit' className='btn btn-primary' value='Submit' />

            </form>
        </div>


    )
}

export default Role
