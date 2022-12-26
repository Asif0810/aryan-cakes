import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>1. defference between sql and No sql ?</h2>
            <p>ans :SQL databases are table-based, while NoSQL databases are non-relational. This means that a SQL database contains structured data and can perform an analysis using a relational model. A NoSQL database contains unstructured data, which means it cannot be analyzed through predefined models.</p>
            <br />
            <h2>2. what is JWT ?</h2>
            <p>JWTs or JSON Web Tokens are most commonly used to identify an authenticated user. They are issued by an authentication server and are consumed by the client-server (to secure its APIs). Looking for a breakdown for JSON Web Tokens (JWTs)? You’re in the right place. We will cover: What is a JWT? How do they work (using an example)? What is a JWT</p>
            <br />
            <h2>3. what is difference between java script and node js ? </h2>
            <p>JavaScriptis an object-oriented programming language for web development. It is widely used for front-end development and some back-end development frameworks. JavaScript can be used on the server side with Node.js or on the client side in a web browser. You can use JavaScript to make your website interactive and user-friendly with dynamic web page</p>
            <br />
            <h2>4. how does note js handle multiple request ?</h2>
            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        </div>
    );
};

export default Blog;