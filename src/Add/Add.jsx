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

    const[editClick,setEditClick] = useState(false);

    const[editIndex,SetEditindex]=useState("");

    const handleEdit =(index)=>{
    const inputData = allData[index];
    console.log('temp',inputData) 
    setAddData({
        firstName:inputData.firstName,
        lastName:inputData.lastName,
        Email:inputData.Email,
        Teacher:inputData.Teacher
    })
    setEditClick(true);
    SetEditindex(index)

        }

    const handleSubmit = (e) => {
        e.preventDefault();
if(editClick){
const temp = allData;
Object.assign(temp[editIndex],addData);
setAllData([...temp])
}else{

    setAllData([...allData, addData]); 
    setAddData({  
        firstName: '',
        lastName: '',
        Email: '',
        Teacher: '',
    });
}

    };

    const handleChange = (e) => {
        setAddData({ ...addData, [e.target.name]: e.target.value });
    };
    

    const handleDelete = (index) => {
        console.log('Deleting item at index:', index);
        const filteredData = allData.filter((_, i) => i !== index);
        console.log('Filtered data:', filteredData);
        setAllData(filteredData);
    };
    

    
    


    return (
        <>
            <div className='text-center'>
                <h2 className='head'>Student Data</h2>
            </div>
            <div className='container'>
                <form action='post' onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='mt-4'>
                                <label htmlFor='' className='fw-bold name'>
                                    {' '}
                                    First Name :
                                </label>
                                <br />
                                <input
                                    type='text'
                                    name='firstName'
                                    value={addData.firstName}
                                    onChange={handleChange}
                                    className='form w-75'
                                    
                                    
                                />
                            </div>
                            <div className='mt-4'>
                                <label htmlFor='' className='fw-bold name'>
                                    
                                    Last Name :
                                </label>
                                <br />
                                <input
                                    type='text'
                                    name='lastName'
                                    value={addData.lastName}
                                    onChange={handleChange}
                                    className='form w-75'
                                   
                                />
                            </div>
                            <div className='mt-4'>
                                <label htmlFor='' className='fw-bold name'>
                                    {' '}
                                    Email :
                                </label>
                                <br />
                                <input
                                    type='text'
                                    name='Email'
                                    value={addData.Email}
                                    onChange={handleChange}
                                    className='form w-75'
                                />
                            </div>
                            <div className='mt-4'>
                                <label htmlFor='' className='fw-bold name'>
                                    Teacher :
                                </label>
                                <br />
                                <input
                                    type='text'
                                    name='Teacher'
                                    value={addData.Teacher}
                                    onChange={handleChange}
                                    className='form w-75'
                                />
                            </div>
                            <div className='mt-4 '>
                                <button type='submit' className='btn btn-outline-success'>
                                    {editClick?"Update":"Add"}
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
                                <th scope="col">Status</th>

                                </tr>
                            </thead>
                            <tbody>
                            {allData.map((data,index,i)=>(

                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>{data.Email}</td>
                                    <td>{data.Teacher}</td>
                                    <td>
                                        <button onClick={()=>handleEdit(index)} type="button" className='me-2 ps-2 pe-2 edit border border-warning-subtle'><i className="bi bi-pencil-fill"></i></button>
                                        <button type="button" onClick={()=>handleDelete(index)}  className=' ps-2 pe-2 dlt border border-warning-subtle'><i className="bi bi-trash-fill"></i></button>
                                    </td>

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
