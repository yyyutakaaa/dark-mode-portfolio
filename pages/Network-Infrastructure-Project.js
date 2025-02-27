// pages/Network-Infrastructure-Project.js
import React from "react";
import Link from "next/link";
import Footer from "../components/Footer";

const ProjectDescription = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E0E0E0]">
      <div className="max-w-4xl mx-auto p-8">
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

        <p className="mb-4">
          This project involves setting up a network for two locations: Headquarters and Site2. I configure routers, switches, and a wireless network.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Technical Implementation</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Design the network architecture and allocate IP subnets based on given requirements.
          </li>
          <li>
            Configure routers and switches with standardized hostnames and secure SSH access.
          </li>
          <li>
            Implement VLAN segmentation to separate traffic for different user groups.
          </li>
          <li>
            Test connectivity using ICMP ping and network diagnostic tools.
          </li>
          <li>
            Apply security measures, including port security and ACLs, to ensure a robust network.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Tools</h2>
        <p className="mb-4">
          I use Packet Tracer and Cisco equipment to build and simulate this network.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
        <p>
          I am still in the early stages of this project and will add more details as I progress.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDescription;