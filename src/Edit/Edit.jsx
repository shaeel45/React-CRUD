import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../DataContext';

const Edit = () => {
    const { index } = useParams();
    const { data, updateData } = useData();
    const [editData, setEditData] = useState(data[index] || {}); // Initialize with existing data

    useEffect(() => {
        setEditData(data[index] || {});
    }, [data, index]);

    const handleChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateData(index, editData);
        // Add any additional logic for redirecting or notifying the user of successful update
    };

    return (
        <>
            <div className='text-center'>
                <h2 className='head'>Edit Student</h2>
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
                                    value={editData.firstName || ''}
                                    onChange={handleChange}
                                    className='form-control w-75'
                                />
                            </div>
                            <div className='mt-4'>
                                <label htmlFor='' className='fw-bold name'>

                                    Last Name
                                </label>
                                <input
                                    type='text'
                                    name='lastName'
                                    value={editData.lastName || ''}
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
                                    value={editData.Email || ''}
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
                                    value={editData.Teacher || ''}
                                    onChange={handleChange}
                                    className='form-control w-75'
                                />
                            </div>                            <div className='mt-4 '>
                                <button type='submit' className='btn btn-outline-success'>
                                    Save
                                </button>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            {/* ... Display any additional information or images related to the student */}
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Edit;
