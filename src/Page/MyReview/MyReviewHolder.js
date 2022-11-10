import React from 'react';
import { FaBitbucket, FaEdit } from 'react-icons/fa';

const MyReviewHolder = ({ myreview, handleDelete, handleStatusUpdate }) => {
    const { _id, customer, serviceName, Review, service, status } = myreview
    return (
        <tr>
            <td><button onClick={() => handleStatusUpdate(_id)}
                className="btn btn-ghost btn-xs">{status ? status : <FaEdit></FaEdit>}</button></td>
            <td>{serviceName}</td>
            <td>{customer}</td>
            <td>{Review}</td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-ghost'><FaBitbucket></FaBitbucket></button></td>
        </tr>
    );
};

export default MyReviewHolder;