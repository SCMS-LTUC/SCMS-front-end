import { Button } from "@mui/material"

const mockCourseContent = [
  {
    module: "Introduction",
    lessons: [
      {
        title: "Welcome",
        materials: [
          { type: "video", name: "Welcome Video", link: "#video1" },
          {
            type: "file",
            name: "Course Syllabus",
            size: "2MB",
            link: "/downloads/syllabus.pdf",
          },
        ],
      },
      {
        title: "Course Overview",
        materials: [
          { type: "document", name: "Overview Document", link: "/overview.docx" },
        ],
      },
      {
        title: "Getting Started",
        materials: [
          { type: "video", name: "Getting Started Video", link: "#video2" },
        ],
      },
    ],
  },
  {
    module: "React Basics",
    lessons: [
      {
        title: "Components",
        materials: [
          { type: "video", name: "Components Video", link: "#video3" },
          {
            type: "file",
            name: "Components Guide",
            size: "1.5MB",
            link: "/downloads/components-guide.pdf",
          },
        ],
      },
      {
        title: "State and Props",
        materials: [
          { type: "document", name: "State and Props Doc", link: "/state-props.docx" },
        ],
      },
      {
        title: "Lifecycle Methods",
        materials: [
          { type: "video", name: "Lifecycle Methods Video", link: "#video4" },
        ],
      },
    ],
  },
  {
    module: "Advanced Topics",
    lessons: [
      {
        title: "Hooks",
        materials: [
          { type: "video", name: "Hooks Video", link: "#video5" },
          {
            type: "file",
            name: "Hooks Cheat Sheet",
            size: "500KB",
            link: "/downloads/hooks-cheat-sheet.pdf",
          },
        ],
      },
      {
        title: "Context API",
        materials: [
          { type: "document", name: "Context API Doc", link: "/context-api.docx" },
        ],
      },
      {
        title: "Performance Optimization",
        materials: [
          { type: "video", name: "Performance Optimization Video", link: "#video6" },
        ],
      },
    ],
  },
];

const getIcon = (type) => {
  switch (type) {
    case "video":
      return <i className="ri-file-video-line mr-1"></i>;
    case "document":
      return <i className="ri-article-line mr-1"></i>;
    case "file":
      return <i className="ri-download-line mr-1"></i>;
    default:
      return null;
  }
};

const ContentPage = () => {
  return (
    <div className="content-page p-4">
      <h1 className="text-2xl font-bold mb-4">Course Content</h1>
      {mockCourseContent.map((module, index) => (
        <div key={index} className="module mb-6 border shadow-md p-4">
          <h2 className="text-xl font-semibold mb-3">{module.module}</h2>
          {module.lessons.map((lesson, idx) => (
            <div key={idx} className="lesson mb-4">
              <h3 className="text-lg font-medium">{lesson.title}</h3>
              <ul className="list-disc list-inside mt-2">
                {lesson.materials.map((material, mIdx) => (
                  <li key={mIdx} className="flex items-center justify-between mb-2">
                    <span className="flex items-center">
                      {getIcon(material.type)}
                      {material.name}
                    </span>
                    {material.link && (
                      <Button
                        variant="contained"
                        color="primary"
                        href={material.link}
                        className="text-green-500 hover:underline"
                        download
                      >
                        Download
                      </Button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ContentPage;