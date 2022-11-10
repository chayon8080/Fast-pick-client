import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Details = () => {
    const service = useLoaderData();
    console.log(service)
    const { user } = useContext(AuthContext)
    const { _id, title, price, img, description } = service;

    const handleOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = user?.displayName || form.name.value;
        const email = user?.email || 'unregistered'
        const Review = form.review.value;

        const order = {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            Review
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review placed successfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }

    return (
        < div className='flex flex-col lg:flex-row'>
            <div className="card w-96 bg-base-100 shadow-xl lg:mr-20">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-4xl text-sky-700 italic">{title}</h2>
                    <p className='font-bold text-orange-300'>Price : ${price}</p>
                    <p>{description}</p>
                </div>
            </div>
            <div className="ms-5">
                <form onSubmit={handleOrder}>
                    <div>

                    </div>
                    <div>
                        <input name="name" type="text" placeholder="First Name" defaultValue={user?.displayName} className="input w-full input-bordered  bg-slate-400" />
                        <input name="email" type="text" placeholder="Email" defaultValue={user?.email} className="input w-full input-bordered  bg-slate-400" readOnly />
                    </div>
                    <textarea name='review' className="textarea textarea-bordered h-24 w-full" placeholder="Review"></textarea>
                    <input className='btn btn-secondary  bg-slate-400' type="submit" value="Post" />
                </form>
            </div>
        </div>
    );
};

export default Details;