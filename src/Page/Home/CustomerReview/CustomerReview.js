import React from 'react';
import disc1 from '../../../Asset/customer/5.jpg'
import disc2 from '../../../Asset/customer/10.jpg'
import disc3 from '../../../Asset/customer/20.jpg'
const CustomerReview = () => {
    return (
        <div>
            <p className="text-2xl font-bold text-indigo-600 italic">Grab Discount</p>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={disc1} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        5% Discount
                        <div className="badge badge-secondary">5-</div>
                    </h2>
                    <p>Get 5% discount by being silver member.</p>
                    <button className="btn btn-active">Get Silver card</button>
                    <div className="card-actions justify-end">
                    </div>
                </div>
                <figure><img src={disc2} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        10% Discount
                        <div className="badge badge-secondary">10-</div>
                    </h2>
                    <p> Get 10% discount by being golden member.</p>
                    <button className="btn btn-warning">Get Golden Card</button>
                    <div className="card-actions justify-end">
                    </div>
                </div>
                <figure><img src={disc3} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        20% Discount
                        <div className="badge badge-secondary">20-</div>
                    </h2>
                    <p>Get 20% discount by being platinum member.</p>
                    <button className="btn btn-info">Get Platinum Card</button>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CustomerReview;