import React,{useState} from 'react';
import axios from 'axios';

function Organization() {

    const [formData, setFormData] = useState({
        name: "",
        size: "",
        description:""
      });
    
      const { name,size,description } = formData;      

      const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

      const onSubmit = async (e) => {
        e.preventDefault();

        const newOrg = {
            name,size,description
        };

        try {
            const config = {
                headers:{
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(newOrg);

            const res = await axios.post('/organization/add', body, config);
 
            alert("Organization Added");

        } catch (error) {
            console.error(error.response.data);
        }
        
      };


    return (
        <div>
            <h3>Add Organization</h3>
            <form className="form" onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                <input
                type='text'
                placeholder='Organization Name'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
                required
                />
                </div>
                <div className='form-group'>
                <input
                    type='number'
                    placeholder='Size of Org Unit'
                    name='size'
                    value={size}
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

export default Organization;
