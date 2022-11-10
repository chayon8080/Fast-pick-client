import React, { useEffect, useState } from 'react';

const DetailsHolder = () => {
    const [myreviews, setMyreviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/userReviews')
            .then(res => res.json())
            .then(data => setMyreviews(data))
    }, [])
    return (
        <div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                {
                    myreviews.map(e => <p>{e.Review}</p>)
                }
            </div>
        </div>
    );
};

export default DetailsHolder;
