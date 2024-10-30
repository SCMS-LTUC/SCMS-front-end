/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// JavaScript source code
import React from 'react';

function StudentsList({ students }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Students List</h3>
            <ul>
                {students.map((student) => (
                    <li key={student.id} className="text-gray-800 mb-1">
                        {student.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentsList;
