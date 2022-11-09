import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewHolder from './MyReviewHolder';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [myreviews, setMyreviews] = useState([])
    console.log(myreviews);
    useEffect(() => {
        fetch(`http://localhost:5000/userReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyreviews(data))
    }, [user?.email])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Current User Name</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myreviews.map(myreview => <MyReviewHolder key={myreview._id} myreview={myreview}></MyReviewHolder>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReview;