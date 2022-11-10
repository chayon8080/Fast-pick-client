import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewHolder from './MyReviewHolder';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [myreviews, setMyreviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/userReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyreviews(data))
    }, [user?.email])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this review');
        if (proceed) {
            fetch(`http://localhost:5000/userReviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myreviews.filter(odr => odr._id !== id);
                        setMyreviews(remaining);
                    }
                })
        }
    }
    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/userReviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = myreviews.filter(odr => odr._id !== id);
                    const approving = myreviews.find(odr => odr._id === id);
                    approving.status = 'updated'
                    const newreviews = [approving, ...remaining];
                    setMyreviews(newreviews);
                }
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Edit</th>
                        <th>service Name</th>
                        <th>Current User Name</th>
                        <th>Review</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myreviews.map(myreview => <MyReviewHolder key={myreview._id} myreview={myreview} handleDelete={handleDelete}
                            handleStatusUpdate={handleStatusUpdate}></MyReviewHolder>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReview;