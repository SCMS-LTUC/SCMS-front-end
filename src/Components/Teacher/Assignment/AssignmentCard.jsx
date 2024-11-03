// eslint-disable-next-line react/prop-types
export default function AssignmentCard({name, due, submissions, description}){
    return (
        <div className="bg-white shadow-md border rounded-md mx-1 p-4 mb-4">
            <h2 className="text-lg font-bold">{name}</h2>
            <div className="flex space-x-2">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">
                    <strong>Due:</strong> {due}
                </span>
                <span className="bg-gray-100 text-green-400 px-2 py-1 rounded-full text-sm">
                    <strong>Submissions:</strong> {submissions}
                </span>
            </div>
            <p className="mt-2">{description}</p>
            <div className="flex justify-end space-x-2 mt-4">
                <button className=" text-black font-semibold border px-4 py-2 rounded">View Submissions</button>
                <button className=" text-black font-semibold border px-4 py-2 rounded">Edit</button>
            </div>
        </div>
    );
}