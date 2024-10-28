/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',          // Primary color for main actions (buttons, links)
        secondary: '#6B7280',        // Secondary color for less prominent elements (subtitles, borders)
        accent: '#FBBF24',           // Accent color for highlights (hover effects, highlights)
        background: '#F9FAFB',       // Background color for sections (body background)
        textPrimary: '#111827',      // Primary text color (main text)
        textSecondary: '#6B7280',    // Secondary text color (muted text)
        success: '#4ADE80',          // Success color for success messages (notifications, alerts)
        warning: '#F59E0B',          // Warning color for warnings (alerts, notices)
        danger: '#F87171',           // Danger color for errors (error messages, alerts)
        info: '#3B82F6',             // Info color for informational messages (notifications, tooltips)
        light: '#E5E7EB',            // Light color for backgrounds (card backgrounds)
        dark: '#1F2937',             // Dark color for footers and headings
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Custom sans-serif font
      },
    },
  },
  plugins: [],
}
