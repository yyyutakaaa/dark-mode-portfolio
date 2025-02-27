import React from "react";

const ProjectDescription = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        Network Infrastructure Project (2024-2025)
      </h1>

      <p className="mb-4">
        For this project, I designed and implemented a network infrastructure
        for a simulated organization with two locations: Headquarters and Site2.
        The objective was to build a robust, scalable network using advanced
        configuration techniques and modern networking principles.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Objectives</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Subnetting and Addressing:</strong> Calculate and implement
          subnetting based on provided IP schemes to ensure proper segmentation
          without overlapping networks.
        </li>
        <li>
          <strong>Device Configuration:</strong> Configure routers and switches
          with appropriate hostnames, secure SSH access, and local user
          accounts.
        </li>
        <li>
          <strong>VLAN Implementation:</strong> Segment the network logically
          with VLANs (e.g., Staff, Guests, Management) to improve security and
          traffic management.
        </li>
        <li>
          <strong>EtherChannel Setup:</strong> Increase bandwidth and provide
          redundancy by configuring EtherChannels between switches.
        </li>
        <li>
          <strong>Inter-VLAN Routing:</strong> Implement inter-VLAN routing
          using router-on-a-stick configurations and multilayer switches.
        </li>
        <li>
          <strong>Spanning-Tree and Redundancy:</strong> Prevent loops with STP
          and set up proper root and secondary bridge configurations.
        </li>
        <li>
          <strong>Routing and HSRP:</strong> Configure static routes and HSRP
          for high availability between key devices.
        </li>
        <li>
          <strong>DHCP Configuration:</strong> Set up DHCP servers on multiple
          devices to manage dynamic IP addressing across different network
          segments.
        </li>
        <li>
          <strong>Security Measures:</strong> Implement port security to
          restrict access and ensure only authorized devices connect to the
          network.
        </li>
        <li>
          <strong>Wireless Integration:</strong> Configure a wireless router for
          secure IPv4 access with dynamic NAT/PAT, including proper DHCP
          settings.
        </li>
        <li>
          <strong>IPv6 Implementation:</strong> Extend the network to support
          IPv6 addressing and routing in Site2.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Packet Tracer:</strong> Simulated the physical network to test
          and validate configurations.
        </li>
        <li>
          <strong>Routers and Switches:</strong> Configured devices from various
          Cisco models (e.g., 2960, 3650, 4331) as per the project requirements.
        </li>
        <li>
          <strong>DHCP, HSRP, and VLANs:</strong> Used to dynamically assign
          addresses, ensure network resilience, and segment traffic.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Deployment & Testing</h2>
      <p className="mb-4">
        The project was thoroughly tested with continuous ping tests between
        various devices (e.g., Staff and Guest PCs) to validate connectivity and
        performance. The deployment process included verifying SSH access,
        proper routing configurations, and failover scenarios using HSRP.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Challenges and Learnings</h2>
      <p className="mb-4">
        This project required careful planning and execution. Rewriting the
        network configurations and implementing advanced features such as
        EtherChannel and IPv6 routing challenged me to apply and extend my
        networking knowledge. The hands-on experience provided critical insights
        into network security, performance optimization, and the importance of
        redundancy in modern network designs.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
      <p>
        The Network Infrastructure Project not only showcases modern design and
        technical skills but also demonstrates the ability to build a scalable
        and secure network from the ground up. The project is a testament to my
        capability in handling complex network configurations and preparing for
        real-world challenges in IT infrastructure.
      </p>
    </div>
  );
};

export default ProjectDescription;
