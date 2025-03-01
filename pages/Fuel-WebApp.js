// pages/Network-Infrastructure-Project.js
import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NetworkInfrastructureProject() {
  return (
    <div className="bg-[#0D1117] text-[#E0E0E0] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto p-8">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-4 inline-block text-[#00D4FF] hover:underline"
        >
          &larr; Back
        </Link>

        <h1 className="text-4xl font-bold mb-6">Brandstof App Webapplicatie</h1>

        {/* Project Overzicht */}
        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold">Project Overzicht</h2>
          <p>
            Brandstof App Webapplicatie is een moderne, mobile-first webapp die
            ritprijzen berekent op basis van gebruikersinvoer (vertrek- en
            bestemmingsadres, brandstofverbruik) en actuele brandstofprijzen via
            een externe API. De app toont ook een interactieve kaart met de
            berekende route, slaat ritgeschiedenis op en visualiseert ritkosten
            in een grafiek.
          </p>
        </section>

        {/* Technische Architectuur */}
        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold">Technische Architectuur</h2>
          <p>
            <strong>Modulaire structuur:</strong> Het project is opgebouwd met
            een heldere mappenstructuur. Er zijn aparte bestanden voor de HTML
            (index.html), CSS (style.css) en voor de JavaScript-modules die elk
            een specifiek domein aanpakken:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>js/app.js:</strong> Hoofdapplicatie geschreven met Vue 3.
              Deze module beheert de gebruikersinvoer, berekeningen en
              UI-updates.
            </li>
            <li>
              <strong>js/api.js:</strong> Verantwoordelijk voor het ophalen en
              verwerken van brandstofprijzen via een externe API (Statbel).
            </li>
            <li>
              <strong>js/map.js:</strong> Initialiseert en beheert de
              Leaflet-kaart zodat de route visueel wordt weergegeven.
            </li>
            <li>
              <strong>js/chart.js:</strong> Zorgt voor de visualisatie van
              ritkosten in een grafiek met Chart.js.
            </li>
            <li>
              <strong>js/storage.js:</strong> Behandelt het opslaan en laden van
              ritgeschiedenis met localStorage.
            </li>
            <li>
              <strong>js/cookieBanner.js:</strong> Laat een cookie
              consent-banner zien volgens de huidige privacyregels.
            </li>
          </ul>
          <p>
            <strong>Frameworks en Libraries:</strong> Vue 3, Bulma CSS,
            Animate.css, SweetAlert2, Leaflet en Chart.js.
          </p>
          <p>
            <strong>Mobile-first benadering:</strong> De CSS is geschreven met
            een mobile-first mindset, waarna media queries worden gebruikt voor
            tablets en desktops.
          </p>
        </section>

        {/* Functionele Flow */}
        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold">Functionele Flow</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Gebruikersinvoer en Berekening:</strong> De gebruiker vult
              vertrekadres, bestemmingsadres, brandstofverbruik en kiest een
              brandstoftype via een dropdown. Bij het klikken op “Bereken
              Ritprijs” worden:
              <ul className="list-disc list-inside ml-4">
                <li>Adressen omgezet naar coördinaten via de Nominatim API.</li>
                <li>
                  De route berekend met de OSRM API (inclusief afstand en
                  reistijd).
                </li>
                <li>
                  Actuele brandstofprijzen opgehaald via de Statbel API, waarna
                  de ritkosten worden berekend.
                </li>
                <li>
                  Het resultaat getoond en de route weergegeven op een
                  Leaflet-kaart.
                </li>
              </ul>
            </li>
            <li>
              <strong>Opslag en Visualisatie:</strong> Na elke berekening wordt
              de rit opgeslagen in localStorage. De geschiedenis wordt getoond
              en gevisualiseerd met Chart.js.
            </li>
            <li>
              <strong>Cookie Consent en Terugkerende Gebruikers:</strong> Bij
              het eerste bezoek verschijnt een cookie-banner. Als er ritgegevens
              zijn opgeslagen, vraagt een popup of de gebruiker de laatste
              berekening wil bekijken.
            </li>
            <li>
              <strong>Navigatie en Extra Pagina’s:</strong> De hoofdapp bevat de
              calculator en visualisatie, terwijl “Over ons” en “Contact” op
              aparte pagina’s staan. De navigatie is responsive en maakt gebruik
              van Bulma’s navbar-component.
            </li>
          </ul>
        </section>

        {/* UI Design & Styling */}
        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold">UI Design & Styling</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Donkere, moderne look:</strong> Ontworpen met een
              macOS-geïnspireerde stijl, gebruik van transparante rgba-kleuren
              en een backdrop-filter voor een “frosted glass”-effect.
            </li>
            <li>
              <strong>Afgeronde hoeken en schaduwen:</strong> Alle componenten,
              zoals boxen en de kaart, hebben afgeronde hoeken en subtiele
              schaduwen.
            </li>
            <li>
              <strong>Mobile-first styling:</strong> De CSS is geoptimaliseerd
              voor mobiele apparaten, met uitbreidingen via media queries voor
              grotere schermen.
            </li>
          </ul>
        </section>

        {/* Kritische Reflectie */}
        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold">Kritische Reflectie</h2>
          <p>
            <strong>Sterke punten:</strong> De modulaire opzet, moderne
            technologieën (Vue 3, Bulma, etc.) en de mobile-first aanpak zorgen
            voor een snelle en responsieve app.
          </p>
          <p>
            <strong>Verbeterpunten:</strong> De afhankelijkheid van externe
            API’s kan voor problemen zorgen (bijvoorbeeld bij rate limits), en
            de foutafhandeling kan verder verfijnd worden.
          </p>
        </section>

        {/* Conclusie */}
        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold">Conclusie</h2>
          <p>
            De Brandstof App Webapplicatie combineert moderne webtechnologieën
            om een responsieve, mobile-first ervaring te bieden. Het project
            toont zowel technische vaardigheid als een kritische benadering van
            gebruikerservaring en design, en vormt een solide basis voor verdere
            uitbreiding.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
