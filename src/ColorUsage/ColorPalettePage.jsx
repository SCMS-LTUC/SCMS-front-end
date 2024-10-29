// import React from "react";
import { Home, Info, ContactMail, Warning } from "@mui/icons-material";
import Button from "@mui/material/Button";

export default function ColorPalettePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-background font-sans p-4">
      <h1 className="text-neutral-textPrimary text-4xl font-bold mb-4">
        Fusion Learn Color Palette
      </h1>

      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Navigation Example</h2>
        <nav className="bg-neutral-surface p-4 rounded shadow-md">
          <div className="flex space-x-4">
            <Button
              variant="contained"
              color="!primary"
              startIcon={<Home />}
              className="hover:bg-primary-dark"
            >
              Home
            </Button>
            <Button
              variant="outlined"
              color="!secondary"
              startIcon={<Info />}
              className="hover:bg-secondary-light"
            >
              About
            </Button>
            <Button
              variant="outlined"
              color="!secondary"
              startIcon={<ContactMail />}
              className="hover:bg-secondary-light"
            >
              Contact
            </Button>
          </div>
        </nav>
      </div>

      <div className="p-8 bg-neutral-surface rounded-lg shadow-lg w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-6">Color Usage Examples</h2>

        <div className="space-y-4">
          <p className="text-primary">
            This is the Primary color (Primary: #FF7F50)
          </p>
          <p className="text-secondary">
            This is the Secondary color (Secondary: #4A9B8F)
          </p>
          <p className="bg-primary-light text-neutral-textPrimary p-2">
            This is the Light variation of the Primary color (Light: #FFA07A)
          </p>
          <p className="bg-secondary-light text-neutral-textPrimary p-2">
            This is the Light variation of the Secondary color (Light: #6BB5AA)
          </p>
          <p className="bg-neutral-background text-neutral-textPrimary p-2">
            This is the Background color (Background: #FFF9F5)
          </p>
          <p className="text-neutral-textPrimary">
            This is the Primary Text color (Text Primary: #2D3748)
          </p>
          <p className="text-neutral-textSecondary">
            This is the Secondary Text color (Text Secondary: #718096)
          </p>
          <p className="text-accent-success">
            This is the Success color (Success: #48BB78)
          </p>
          <p className="text-accent-warning">
            This is the Warning color (Warning: #F6B73C)
          </p>
          <p className="text-accent-error">
            This is the Error color (Error: #F56565)
          </p>
          <p className="text-accent-info">
            This is the Info color (Info: #4299E1)
          </p>
        </div>

        <div className="mt-6">
          <Warning style={{ verticalAlign: "middle", marginRight: "8px" }} />
          <span className="text-accent-warning">
            Warning: This is a warning message!
          </span>
        </div>
      </div>
    </div>
  );
}
