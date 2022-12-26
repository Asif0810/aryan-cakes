import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cake from './cake';

const Cakes = () => {
    const [cakes, setcakes] = useState([])
    useEffect(() => {
        fetch('https://assignment-eleven-server-side.vercel.app/cakes')
            .then(res => res.json())
            .then(data => setcakes(data))
    }, [])
    return (
        <div>
            <h2 className='text-6xl text-center mt-20 font-bold'>Here My Populer Cakes !!</h2>
            <div className='grid mt-10 grid-cols-3 ml-10'>
                {
                    cakes.map(cake => <Cake key={cake._id} cake={cake}></Cake>)
                }
            </div>
            <div className='text-center mt-20'>
                <Link to={'/allcakes'}><button className="btn btn-wide btn-secondary">see all</button></Link>
            </div>
        </div>
    );
};

export default Cakes; <h2>cakes</h2>