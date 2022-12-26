import React from 'react';

const OwnReview = (myreview) => {
    
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
                <td>rating: {rating} star</td>
                <td>address: {address}</td>
                <td>comment: {description}</td>
            </tr>
        </div>
    );
};

export default OwnReview;