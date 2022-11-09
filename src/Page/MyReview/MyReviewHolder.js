import React from 'react';

const MyReviewHolder = ({ myreview }) => {
    const { customer, Review } = myreview
    return (
        <tr>
            <th>*</th>
            <td>{customer}</td>
            <td>{Review}</td>
        </tr>
    );
};

export default MyReviewHolder;