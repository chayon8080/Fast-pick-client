import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import disc1 from '../../../Asset/customer/5.jpg'
import disc2 from '../../../Asset/customer/10.jpg'
import disc3 from '../../../Asset/customer/20.jpg'
const CustomerReview = () => {
    return (
        <CardGroup className='m-5'>
            <h1 className='font-bold text-violet-300 italic mr-5 '>Get Discount By Be A Member</h1>
            <Card>
                <Card.Img variant="top" className='h-40 w-40 shadow-2xl' src={disc1} />
                <Card.Body>
                    <Card.Title className='font-semibold italic text-gray-500'>5% Discount</Card.Title>
                    <Card.Text>
                        Get 5% discount by being silver member.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button className="btn btn-active">Get Silver card</button>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" className='h-40 w-full shadow-2xl' src={disc2} />
                <Card.Body>
                    <Card.Title className='font-semibold italic text-amber-400'>10$ Discount</Card.Title>
                    <Card.Text>
                        Get 10% discount by being golden member.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button className="btn btn-warning">Get Golden Card</button>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" className='h-40 w-full shadow-2xl' src={disc3} />
                <Card.Body>
                    <Card.Title className='font-semibold italic text-indigo-400'>20% Discount</Card.Title>
                    <Card.Text>
                        Get 20% discount by being platinum member.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button className="btn btn-info">Get Platinum Card</button>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}
export default CustomerReview;