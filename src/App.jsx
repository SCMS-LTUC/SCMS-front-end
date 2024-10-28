import Button from '@mui/material/Button';
import { Home, Info, ContactMail, Warning } from '@mui/icons-material';

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background font-sans">
      <h1 className="text-textPrimary text-4xl font-bold mb-4">Welcome to Fusion Learn!</h1>
      <Button variant="contained" color="primary" startIcon={<Home />}>
        Get Started
      </Button>
      <div className="p-8 mt-6 bg-light rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Color Palette Test</h2>

        <p className="text-primary">This is the Primary color (Primary: #3B82F6)</p>
        <p className="text-secondary">This is the Secondary color (Secondary: #6B7280)</p>
        <p className="text-accent">This is the Accent color (Accent: #FBBF24)</p>
        <p className="bg-background text-textPrimary p-2">This is the Background color (Background: #F9FAFB)</p>
        <p className="text-textPrimary">This is the Primary Text color (Text Primary: #111827)</p>
        <p className="text-textSecondary">This is the Secondary Text color (Text Secondary: #6B7280)</p>
        <p className="text-success">This is the Success color (Success: #4ADE80)</p>
        <p className="text-warning">This is the Warning color (Warning: #F59E0B)</p>
        <p className="text-danger">This is the Danger color (Danger: #F87171)</p>
        <p className="text-info">This is the Info color (Info: #3B82F6)</p>
        <p className="bg-light text-textPrimary p-2">This is the Light color (Light: #E5E7EB)</p>
        <p className="bg-dark text-light p-2">This is the Dark color (Dark: #1F2937)</p>


        <Warning style={{ verticalAlign: 'middle', marginRight: '8px' }} />


        {/* Testing Icons */}
        <div className="mt-6 flex space-x-4">
          <Button variant="outlined" startIcon={<Home />}>
            Home
          </Button>
          <Button variant="outlined" startIcon={<Info />}>
            About
          </Button>
          <Button variant="outlined" startIcon={<ContactMail />}>
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
}
