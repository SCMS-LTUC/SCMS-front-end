/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function EditAnnouncementModal({ isOpen, onClose, announcement, onSave }) {
  const [editedTitle, setEditedTitle] = useState(announcement.title);
  const [editedDescription, setEditedDescription] = useState(announcement.description);
  const [audience, setAudience] = useState({
    staff: announcement.audience.includes('staff'),
    students: announcement.audience.includes('students'),
  });
  const [type, setType] = useState(announcement.type);

  const handleSave = () => {
    const updatedAnnouncement = {
      ...announcement,
      title: editedTitle,
      description: editedDescription,
      audience: [],
      type,
    };
    if (audience.staff) updatedAnnouncement.audience.push('staff');
    if (audience.students) updatedAnnouncement.audience.push('students');
    onSave(updatedAnnouncement);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-xl mb-4">Edit Announcement</h2>
        <div className="mb-4">
          <label className="block mb-1">Title</label>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Description</label>
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="w-full border p-2 rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Audience</label>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              checked={audience.staff}
              onChange={(e) => setAudience({ ...audience, staff: e.target.checked })}
              className="form-checkbox"
            />
            <span className="ml-2">Staff</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={audience.students}
              onChange={(e) => setAudience({ ...audience, students: e.target.checked })}
              className="form-checkbox"
            />
            <span className="ml-2">Students</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border p-2 rounded-md"
          >
            <option value="important">Important</option>
            <option value="note">Note</option>
            <option value="info">Info</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 px-4 py-2 rounded-md mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}