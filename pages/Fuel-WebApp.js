// pages/Network-Infrastructure-Project.js
import React from "react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function NetworkInfrastructureProject() {
  return (
    <div className="bg-[#0D1117] text-[#E0E0E0] min-h-screen flex flex-col">

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto p-8">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-4 inline-block text-[#00D4FF] hover:underline"
        >
          &larr; Back
        </Link>

        <h1 className="text-4xl font-bold mb-6">Fuel App Web Application</h1>

        {/* Project Overview */}
        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold">Project Overview</h2>
          <p>
            Fuel App Web Application is a modern, mobile-first web app that
            calculates trip costs based on user input (departure and destination
            addresses, fuel consumption) and real-time fuel prices retrieved via
            an external API. The app also displays an interactive map with the
            calculated route, stores trip history, and visualizes trip costs in
            a chart.
          </p>
        </section>

        {/* Technical Architecture */}
        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold">Technical Architecture</h2>
          <p>
            <strong>Modular Structure:</strong> The project is built with a
            clear folder structure. Separate files are used for the HTML
            (index.html), CSS (style.css), and for the JavaScript modules that
            each address a specific domain:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>js/app.js:</strong> Main application written in Vue 3.
              This module handles user input, calculations, and UI updates.
            </li>
            <li>
              <strong>js/api.js:</strong> Responsible for fetching and
              processing fuel prices via an external API (Statbel).
            </li>
            <li>
              <strong>js/map.js:</strong> Initializes and manages the Leaflet
              map to visually display the route.
            </li>
            <li>
              <strong>js/chart.js:</strong> Handles the visualization of trip
              costs in a chart using Chart.js.
            </li>
            <li>
              <strong>js/storage.js:</strong> Manages saving and loading trip
              history using localStorage.
            </li>
            <li>
              <strong>js/cookieBanner.js:</strong> Displays a cookie consent
              banner according to current privacy regulations.
            </li>
          </ul>
          <p>
            <strong>Frameworks and Libraries:</strong> Vue 3, Bulma CSS,
            Animate.css, SweetAlert2, Leaflet, and Chart.js.
          </p>
          <p>
            <strong>Mobile-first Approach:</strong> The CSS is written with a
            mobile-first mindset, and media queries are used for tablets and
            desktops.
          </p>
        </section>

        {/* Functional Flow */}
        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold">Functional Flow</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>User Input and Calculation:</strong> The user enters a
              departure address, destination address, fuel consumption, and
              selects a fuel type from a dropdown. Upon clicking "Calculate Trip
              Cost," the following steps occur:
              <ul className="list-disc list-inside ml-4">
                <li>
                  The addresses are converted into coordinates via the Nominatim
                  API.
                </li>
                <li>
                  The route is calculated using the OSRM API (including distance
                  and travel time).
                </li>
                <li>
                  Real-time fuel prices are fetched via the Statbel API, and the
                  trip cost is calculated.
                </li>
                <li>
                  The result is displayed and the route is shown on a Leaflet
                  map.
                </li>
              </ul>
            </li>
            <li>
              <strong>Storage and Visualization:</strong> After each
              calculation, the trip is saved in localStorage. The history is
              displayed and visualized using Chart.js.
            </li>
            <li>
              <strong>Cookie Consent and Returning Users:</strong> On the first
              visit, a cookie banner is shown. If trip data is already stored, a
              popup asks the user if they want to view the last calculation.
            </li>
            <li>
              <strong>Navigation and Additional Pages:</strong> The main app
              contains the calculator and visualization, while "About Us" and
              "Contact" are on separate pages. The navigation is responsive and
              uses Bulma's navbar component.
            </li>
          </ul>
        </section>

        {/* UI Design & Styling */}
        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold">UI Design & Styling</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Dark, Modern Look:</strong> Designed with a macOS-inspired
              style using transparent rgba colors and a backdrop filter to
              create a “frosted glass” effect.
            </li>
            <li>
              <strong>Rounded Corners and Shadows:</strong> All components, such
              as boxes and the map, have rounded corners and subtle shadows.
            </li>
            <li>
              <strong>Mobile-first Styling:</strong> The CSS is optimized for
              mobile devices with additional styles for larger screens via media
              queries.
            </li>
          </ul>
        </section>

        {/* Critical Reflection */}
        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold">Critical Reflection</h2>
          <p>
            <strong>Strengths:</strong> The modular setup, modern technologies
            (Vue 3, Bulma, etc.), and mobile-first approach provide a fast and
            responsive app.
          </p>
          <p>
            <strong>Improvements:</strong> Dependence on external APIs can lead
            to issues (e.g., rate limits), and error handling could be further
            refined.
          </p>
        </section>

        {/* Conclusion */}
        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold">Conclusion</h2>
          <p>
            The Fuel App Web Application combines modern web technologies to
            deliver a responsive, mobile-first experience. The project
            demonstrates both technical skill and a critical approach to user
            experience and design, forming a solid basis for further expansion.
          </p>
        </section>

        {/* Link to FuelTracker */}
        <section className="mb-8">
          <Link
            href="/FuelTracker/index.html"
            className="inline-block text-[#00D4FF] hover:underline"
          >
            &larr; Go to Fuel Tracker
          </Link>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
