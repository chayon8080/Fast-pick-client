import React, { useState } from 'react';

const AddService = () => {
    const [service, setUser] = useState({})
    const handleAddUser = event => {
        event.preventDefault();
        console.log(service)
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(service),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('successfully added new service')
                    event.target.reset()
                }
            })
    }


    const handleInputBlur = event => {
        const value = event.target.value
        const filed = event.target.name
        const newUser = { ...service };
        newUser[filed] = value;
        setUser(newUser);
    }
    return (
        <div>
            <h2>Add new service</h2>
            <form onSubmit={handleAddUser} className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input onBlur={handleInputBlur} className="input input-ghost w-full  input-bordered" type="text" name='name' placeholder='name' required />
                <br />
                <input onBlur={handleInputBlur} className="input input-ghost w-full  input-bordered" type="text" name='img' placeholder='img link' required />
                <br />
                <input onBlur={handleInputBlur} className="input input-ghost w-full  input-bordered" type="text" name="price" placeholder='price' required />
                <br />
                <textarea onBlur={handleInputBlur} name="
description" className="textarea textarea-bordered h-24 w-full" type="text" placeholder="
description" required></textarea>
                <br />
                <button type="submit" className="btn btn-outline btn-error">Add service</button>
            </form>


        </div>
    );
};

export default AddService;