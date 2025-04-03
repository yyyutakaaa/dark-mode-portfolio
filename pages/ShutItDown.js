import React from "react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function ShutItDown() {
  return (
    <div className="bg-[#0D1117] text-[#E0E0E0] min-h-screen flex flex-col">
      <main className="flex-grow max-w-5xl mx-auto p-8">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-4 inline-block text-[#00D4FF] hover:underline"
        >
          &larr; Back
        </Link>

        <h1 className="text-4xl font-bold mb-6">
          🚀 ShutItDown – Remote PC Shutdown Application
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Used Technologies</h2>
          <ul className="list-disc list-inside">
            <li>Python</li>
            <li>Flask (for creating the local web server)</li>
            <li>CustomTkinter (for a modern graphical user interface)</li>
            <li>Pystray (to minimize the app into the Windows system tray)</li>
            <li>Socket programming (for automatic local IP detection)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Explanation</h2>
          <p className="mb-4">
            I built ShutItDown to make shutting down your computer remotely easy
            and convenient. The app runs on your Windows PC and provides a
            clean, modern UI where you can start and stop a small local web
            server with a single click.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            How it works (step-by-step):
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Local Web Server (Flask):</strong> The app starts a simple
              web server using Flask that listens on your local network.
            </li>
            <li>
              <strong>Remote Shutdown via URL:</strong> The Flask server
              provides a special link (e.g., http://[your-IP]:5050/shutdown)
              that you can open from any device on your network to trigger an
              immediate shutdown.
            </li>
            <li>
              <strong>Automatic IP detection (Sockets):</strong> The app
              automatically detects your computer’s IP address using Python's
              socket library.
            </li>
            <li>
              <strong>Modern UI (CustomTkinter):</strong> The graphical
              interface built with CustomTkinter clearly shows the server status
              and provides simple controls.
            </li>
            <li>
              <strong>System Tray Integration (Pystray):</strong> When
              minimized, the app hides in the Windows system tray, keeping your
              taskbar uncluttered.
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Future Plans</h3>
          <p className="mb-4">
            Future improvements include adding password protection for enhanced
            security and additional functionalities like remote restart or sleep
            mode.
          </p>
          {/* GitHub Link */}
          <section className="mb-8">
            <Link
              href="https://github.com/yyyutakaaa/ShutItDown"
              className="inline-block text-[#00D4FF] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View the project on GitHub
            </Link>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
