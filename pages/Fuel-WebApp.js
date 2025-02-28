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

        <h1 className="text-4xl font-bold mb-6">
          Network Infrastructure Project
        </h1>
        <p className="mb-8 text-lg text-gray-400">
          This project focuses on setting up a small-scale network
          infrastructure spanning two locations (Headquarters and Site2). It
          demonstrates the use of various network protocols, VLAN
          configurations, HSRP, DHCP, and IPv6 deployment.
        </p>

        {/* Project Description */}
        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold">Project Overview</h2>
          <p>
            The aim of this project is to create a functional, scalable network
            using Cisco routers and switches. Key topics include VLAN
            segmentation, EtherChannel, inter-VLAN routing, DHCP, HSRP, and IPv6
            implementation. It also covers WAN connections, security measures,
            and a modern approach to network design.
          </p>
        </section>

        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold">Key Configurations</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>VLAN Implementation:</strong> Segment the network for
              Staff, Guests, and Management, ensuring clear traffic separation.
            </li>
            <li>
              <strong>EtherChannel:</strong> Bundle multiple physical links for
              increased bandwidth and redundancy.
            </li>
            <li>
              <strong>HSRP:</strong> Provide gateway redundancy by configuring
              both MLS1 and MLS2 with standby groups.
            </li>
            <li>
              <strong>DHCP:</strong> Dynamically assign IP addresses from
              multiple pools, split between different network devices.
            </li>
            <li>
              <strong>IPv6 Deployment:</strong> Introduce IPv6 addressing and
              routing in Site2 for modern network compatibility.
            </li>
          </ul>
        </section>

        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Cisco Routers & Switches:</strong> Various models (e.g.,
              2960, 3650, 4331) for routing, switching, and redundancy.
            </li>
            <li>
              <strong>Packet Tracer:</strong> Network simulation to test and
              validate configurations.
            </li>
            <li>
              <strong>HSRP & VLANs:</strong> Dynamic failover and network
              segmentation for high availability and security.
            </li>
            <li>
              <strong>DHCP & IPv6:</strong> Automate IP allocation and support
              next-gen addressing.
            </li>
          </ul>
        </section>

        <section className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold">Challenges & Learnings</h2>
          <p>
            Throughout this project, I learned about designing networks for
            scalability and redundancy. Balancing VLANs, HSRP groups, and DHCP
            pools while introducing IPv6 required careful planning. This project
            strengthened my understanding of Layer 2/3 protocols, trunking,
            routing, and failover solutions in real-world scenarios.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
