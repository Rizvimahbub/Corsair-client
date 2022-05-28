import React from 'react';

const Blogs = () => {
    return (
        <div className='p-20'>
            <div>
                <h1 className='text-5xl font-bold text-blue-500'>How will you improve the performance of a React Application?</h1>
                <h1>1. Using immutable data structures</h1>
                <h1>2. Function components and react.pureComponent</h1>
                <h1>3. Multiple chunk files</h1>
                <h1>4. Using production mode flag in webpack</h1>
            </div>
            <div>
                <h1 className='text-5xl font-bold text-blue-500'>What are the different ways to manage a state in a React application?</h1>
                <h1>1. Local state</h1>
                <h1>2. Global state</h1>
                <h1>3. Server state</h1>
                <h1>4. URL state</h1>
            </div>
            <div>
                <h1 className='text-5xl font-bold text-blue-500'>How does prototypical inheritance work?</h1>
                <h1>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</h1>
            </div>
            <div>
                <h1 className='text-5xl font-bold text-blue-500'>Why we do not set the state directly in React?</h1>
                <h1>Because mutating state directly can lead to odd bugs, and components that are hard to optimize.</h1>
            </div>
            <div>
                <h1 className='text-5xl font-bold text-blue-500'>What is a unit test? Why should write unit tests?</h1>
                <h1>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. </h1>
                <h1>Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.</h1>
            </div>
        </div>

    );
};

export default Blogs;