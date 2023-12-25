import React, { useState } from 'react';
import './Add.css';
import Images from '../Images/person-having-a-meeting-from-home.png';

const Add = () => {
    const [addData, setAddData] = useState({
        firstName: '',
        lastName: '',
        Email: '',
        Teacher: '',
    });

    const [allData, setAllData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setAllData([...allData, addData]); 
        setAddData({  
            firstName: '',
            lastName: '',
            Email: '',
            Teacher: '',
        });
    };

    const handleChange = (e) => {
        setAddData({ ...addData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className='text-center'>
                <h2 className='head'>Add Student</h2>
            </div>
            <div className='container'>
                <form action='post' onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='mt-4'>
                                <label htmlFor='' className='fw-bold name'>
                                    {' '}
                                    First Name
                                </label>
                                <input
                                    type='text'
                                    name='firstName'
                                    value={addData.firstName}
                                    onChange={handleChange}
                                    className='form-control w-75'
                                />
                            </div>
                            <div className='mt-4'>
                                <label htmlFor='' className='fw-bold name'>
                                    {' '}
                                    Last Name
                                </label>
                                <input
                                    type='text'
                                    name='lastName'
                                    value={addData.lastName}
                                    onChange={handleChange}
                                    className='form-control w-75'
                                />
                            </div>
                            <div className='mt-4'>
                                <label htmlFor='' className='fw-bold name'>
                                    {' '}
                                    Email
                                </label>
                                <input
                                    type='text'
                                    name='Email'
                                    value={addData.Email}
                                    onChange={handleChange}
                                    className='form-control w-75'
                                />
                            </div>
                            <div className='mt-4'>
                                <label htmlFor='' className='fw-bold name'>
                                    Teacher
                                </label>
                                <input
                                    type='text'
                                    name='Teacher'
                                    value={addData.Teacher}
                                    onChange={handleChange}
                                    className='form-control w-75'
                                />
                            </div>
                            <div className='mt-4 '>
                                <button type='submit' className='btn btn-outline-success'>
                                    Add
                                </button>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img src={Images} alt='' />
                        </div>
                    </div>
                </form>

                <div className='mt-4'>
                    <h3>Added Data:</h3>
                  
                        <table className="table table-dark" >
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Teacher</th>
                                </tr>
                            </thead>
                            <tbody>
                            {allData.map((data,index)=>(

                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>{data.Email}</td>
                                    <td>{data.Teacher}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                
                </div>

                            
                
            </div>
        </>
    );
};

export default Add;
