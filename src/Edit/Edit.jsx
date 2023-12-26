import React from 'react'

const Edit = (props) => {
  return (
    <>
          <div className='text-center'>
              <h2 className='head'>{props.title}</h2>
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
</div>
    </>
  )
}

export default Edit