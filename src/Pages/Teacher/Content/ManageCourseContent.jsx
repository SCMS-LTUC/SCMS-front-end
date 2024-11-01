import { useState } from 'react';
import { Button } from '@mui/material';

const ManageCourseContent = () => {
  const [contents, setContents] = useState([
    {
      id: 1,
      title: 'Introduction',
      materials: [
        { id: 1, name: 'Syllabus.pdf' },
        { id: 2, name: 'Welcome Video.mp4' },
      ],
    },
    {
      id: 2,
      title: 'Chapter 1',
      materials: [
        { id: 3, name: 'Lecture1.pdf' },
        { id: 4, name: 'Lecture1.mp4' },
      ],
    },
  ]);
  const [newContentTitle, setNewContentTitle] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const addContent = () => {
    if (newContentTitle.trim() === '') return;
    const newContent = {
      id: contents.length + 1,
      title: newContentTitle,
      materials: [],
    };
    setContents([...contents, newContent]);
    setNewContentTitle('');
    setIsAdding(false);
  };

  const editContent = (id) => {
    alert(`Edit content with ID: ${id}`);
  };

  const deleteContent = (id) => {
    setContents(contents.filter((content) => content.id !== id));
  };

  const addMaterial = (contentId) => {
    const materialName = prompt('Enter material name:');
    if (materialName) {
      setContents(
        contents.map((content) =>
          content.id === contentId
            ? {
                ...content,
                materials: [
                  ...content.materials,
                  {
                    id: Date.now(),
                    name: materialName,
                  },
                ],
              }
            : content
        )
      );
    }
  };

  const editMaterial = (contentId, materialId) => {
    alert(`Edit material with ID: ${materialId}`);
  };

  const deleteMaterial = (contentId, materialId) => {
    setContents(
      contents.map((content) =>
        content.id === contentId
          ? {
              ...content,
              materials: content.materials.filter(
                (material) => material.id !== materialId
              ),
            }
          : content
      )
    );
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">Manage Course Content</h1>
      {!isAdding ? (
        <div className="mb-4">
          <Button
            variant="contained" color="primary"
            onClick={() => setIsAdding(true)}
          >
            Add Content
          </Button>
        </div>
      ) : (
        <div className="mb-6">
          <input
            type="text"
            value={newContentTitle}
            onChange={(e) => setNewContentTitle(e.target.value)}
            placeholder="Enter content name"
            className="border p-2 rounded mr-2"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={addContent}
          >
            Save
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
            onClick={() => {
              setIsAdding(false);
              setNewContentTitle('');
            }}
          >
            Cancel
          </button>
        </div>
      )}
      {contents.map((content) => (
        <div key={content.id} className="border rounded-lg p-4 mb-6 bg-gray-100">
          <div className="flex flex-row justify-between">
              <h2 className="text-xl font-semibold mb-4">{content.title}</h2>
              <div className="flex space-x-2 mb-4">
                <button
                  className="border shadow-md rounded-md px-2"
                  onClick={() => addMaterial(content.id)}
                >
                  <i className="ri-file-upload-line ri-2x"></i>
                </button>
                <button
                  className="border shadow-md rounded-md px-2"
                  onClick={() => editContent(content.id)}
                >
                  <i className="ri-edit-line ri-2x"></i>
                </button>
                <button
                  className="border shadow-md rounded-md px-2 text-red-500"
                  onClick={() => deleteContent(content.id)}
                >
                  <i className="ri-delete-bin-line ri-2x"></i>
                </button>
              </div>
          </div>
          <ul className="space-y-2">
            {content.materials.map((material) => (
              <li
                key={material.id}
                className="flex justify-between items-center bg-white p-2 rounded shadow"
              >
                <span>{material.name}</span>
                <div className="flex space-x-2">
                  <button
                    className="border shadow-md rounded-md px-2"
                    onClick={() => editMaterial(content.id, material.id)}
                  >
                    <i className="ri-edit-line ri-2x"></i>
                  </button>
                  <button
                    className="border shadow-md rounded-md px-2 text-red-500"
                    onClick={() => deleteMaterial(content.id, material.id)}
                  >
                    <i className="ri-delete-bin-line ri-2x"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ManageCourseContent;