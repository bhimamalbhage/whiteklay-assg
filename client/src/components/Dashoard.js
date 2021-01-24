import React,{useState} from 'react';

// import axios from 'axios';

const Dashboard = props => {

    const [formData, setFormData] = useState({
        name: "",
        address:"",
        contactno:"",
        email: "",
        loanamt:"",
        startdate:"",
        enddate:"",
        installments:"",

      });

      const { name,address,contactno, email,loanamt,startdate,enddate,installments } = formData;

      const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

      const onSubmit = async (e) => {
        e.preventDefault();

        const newLoan = {
            name,address,contactno,email,loanamt,startdate,enddate,installments
        };

        // try {
        //     const config = {
        //         headers:{
        //             'Content-Type': 'application/json'
        //         }
        //     }

        //     const body = JSON.stringify(newLoan);

        //     const res = await axios.put('/api/loan/addloan', body, config);

        //     alert("Form Submitted");

        // } catch (error) {
        //     console.error(error.response.data);
        // }
        
      };

    return (
        <div className="dashboard">
            <h2>Loan Application Form</h2>
            <form className="form" onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
            <input
                type='text'
                placeholder='Loan Applicant Name'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
                required
            />
            </div>
            <div className='form-group'>
                <input
                    type='text'
                    placeholder='Address'
                    name='address'
                    value={address}
                    onChange={(e) => onChange(e)}
                    required
                />
            </div>
            <div className='form-group'>
            <input
                type='number'
                placeholder='Contact Number'
                name='contactno'
                value={contactno}
                onChange={(e) => onChange(e)}
                required
                maxLength="10"
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
            <div className='form-group'>
            <input
                type='number'
                placeholder='Loan Amount'
                name='loanamt'
                value={loanamt}
                onChange={(e) => onChange(e)}
                required
            />
            </div>
            <div className='form-group'>
            <label style={{marginBottom:"5px"}}>Loan Start Date:</label>
            <input
                type='date'
                placeholder='Loan Start Date'
                name='startdate'
                value={startdate}
                onChange={(e) => onChange(e)}
                required
            />
            </div>
            <div className='form-group'>
            <label >Loan End Date:</label>
            <input
                type='date'
                placeholder='Loan Expiry Date'
                name='enddate'
                value={enddate}
                onChange={(e) => onChange(e)}
                required
            />
            </div>

            <div className='form-group'>
            <input
                type='number'
                placeholder='Monthly Installments'
                name='installments'
                value={installments}
                onChange={(e) => onChange(e)}
                required
            />
            </div>


            <input type='submit' className='btn btn-primary' value='Submit' />

            </form>
        </div>
    )
}


export default Dashboard;
