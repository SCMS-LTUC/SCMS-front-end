/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// JavaScript source code
import React from 'react';
import { useSelector } from 'react-redux';
import TeacherCard from './TeacherCard';
import StudentsList from './StudentsList';

function CoursePage() {
    
    const teacher = useSelector((state) => state.teacher.data);
    const students = useSelector((state) => state.students.list);

    return (
        <div className="max-w-md mx-auto mt-8">
            <TeacherCard name={teacher.name} course={teacher.course} />
            <StudentsList students={students} />
        </div>
    );
}

export default CoursePage;


