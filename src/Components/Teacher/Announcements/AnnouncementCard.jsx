/* eslint-disable react/prop-types */
import { useState } from 'react';
import EditAnnouncementModal from './EditAnnouncementModal';
import DeleteAnnouncementModal from './DeleteAnnouncementModal';

export default function AnnouncementCard({ title, date, description }) {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const handleSave = (updatedAnnouncement) => {
    // Update announcement logic
    };

    const handleDelete = () => {
    // Delete announcement logic
    setDeleteModalOpen(false);
    };

    return (
        <div className="flex flex-row">
        <div className="w-5 bg-red-600 mb-4 rounded-tl-md rounded-bl-md">
        </div>
        <div className="w-full border rounded-tr-md rounded-tr-md p-4 shadow-sm mb-4 bg-white">
            <div className="flex flex-row justify-between">
                <div>
                    <i className="inline-block ri-information-line mr-3"></i>
                    <h2 className=" inline-block text-lg font-semibold">{title}</h2>
                    <div>
                        <i className=" ri-time-line mr-3"></i>
                        <span className="text-sm text-gray-500">{date}</span>
                    </div>
                </div>
                <div className="flex gap-4 mr-3 self-start">
                    <button className="border shadow-md rounded-md px-2"
                    onClick={() => setEditModalOpen(true)}>
                    <i className="ri-edit-line ri-2x"></i>
                    </button>
                    <button className="border shadow-md rounded-md px-2"
                    onClick={() => setDeleteModalOpen(true)}>
                    <i className="ri-delete-bin-line ri-2x"></i>
                    </button>
                </div>
            </div>
            <p className="text-gray-700">{description}</p>
        </div>
        <EditAnnouncementModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        announcement={{ title, description, audience: [], type: 'info' }}
        onSave={handleSave}
        />
        <DeleteAnnouncementModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={handleDelete}
        />
        </div>
    );
  }
  