import React from 'react';

const OwnReview = ({ r, deleteHandler }) => {
    const { _id, address, cakeName, description, rating, userName, user_image } = r;
 
    return (
        <div>
            <tr>

                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={user_image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{userName}</div>

                        </div>
                    </div>
                </td>
                <td>
                    cake name : {cakeName}
                    <br />

                </td>
                <td>rating:{rating} star</td>
                <td>address: {address}</td>
                <td>comment: {description}</td>
                <td><button onClick={() => deleteHandler(_id)} className='btn btn-secondary'>delete</button></td>
            </tr>
        </div>
    );
};

export default OwnReview;