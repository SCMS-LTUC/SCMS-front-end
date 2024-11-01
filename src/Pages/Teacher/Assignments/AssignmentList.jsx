import AssignmentCard from "../../../Components/Teacher/Assignment/AssignmentCard";

export default function AssignmentList(){
    const assignments = [
        {
            name: 'Assignment 1',
            due: '2023-10-01',
            submissions: 10,
            description: 'Description for Assignment 1',
            mark: 10
        },
        {
            name: 'Assignment 2',
            due: '2023-10-15',
            submissions: 15,
            description: 'Description for Assignment 2',
            mark: 20
        }
    ];
    return (
        <>
            <div className="flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">Assignments</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Create Assignment</button>
            </div>
            <div className="p-4">
                {assignments.map((assignment, index) => (
                    <AssignmentCard key={index} {...assignment} />
                ))}
            </div>
        </>
    );
}