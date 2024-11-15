/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          // Main CTA buttons, active navigation items, progress bars, important icons
          DEFAULT: "#FF7F50",
          // Hover states, section headers, featured badges, active states
          dark: "#E65D2E",
          // Highlighted text backgrounds, progress indicators, achievement badges
          light: "#FFA07A",
        },

        secondary: {
          // Secondary buttons, category tags, success message backgrounds, data viz
          DEFAULT: "#4A9B8F",
          // Hover states for secondary elements, footer bg, sidebar navigation
          dark: "#3B7A70",
          // Info box backgrounds, progress tracker bg, decorative elements
          light: "#6BB5AA",
          lighter: "#7EC2B8 ",
          background: "#f0fcfb",
        },

        neutral: {
          // Main website background, content areas, forum backgrounds
          background: "#FFF9F5",
          darkerBackground: "#F5EBE4",
          // Content cards, modals, form fields, white spaces
          surface: "#FFFFFF",
          border: "#E2E8F0", // Light gray for borders and subtle shadows
          // Main body text, headings, course titles, navigation
          textPrimary: "#2D3748",

          // Secondary text, meta info, placeholders, disabled states
          textSecondary: "#718096",
          textMedium: "#4F5C6F",
        },

        accent: {
          // Completion checkmarks, success messages, passed indicators
          success: "#48BB78",
          // Deadline reminders, important notes, time-sensitive info
          warning: "#F6B73C",
          // Error messages, required fields, delete buttons
          error: "#F56565",
          // Hyperlinks, help tooltips, resource downloads
          info: "#4299E1",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Custom sans-serif font
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
