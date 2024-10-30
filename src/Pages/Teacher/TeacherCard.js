/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function TeacherCard({ name, course }) {
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600">Course: {course}</p>
        </div>
    );
}

export default TeacherCard;

