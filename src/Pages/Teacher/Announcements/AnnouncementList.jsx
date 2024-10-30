import AnnouncementCard from "../../../Components/Teacher/Announcements/AnnouncementCard";

export default function AnnouncementList(){
    const announcements = [
        {
            title: 'Announcement 1',
            date: '2023-10-01',
            description: 'Description for Announcement 1'
        },
        {
            title: 'Announcement 2',
            date: '2023-10-15',
            description: 'Description for Announcement 2'
        }
    ];
    return (
        <>
            <div className="flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">Announcements</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Create Announcement</button>
            </div>
            <div className="p-4">
                {announcements.map((announcement, index) => (
                    <AnnouncementCard key={index} {...announcement} />
                ))}
            </div>
        </>
    );
}