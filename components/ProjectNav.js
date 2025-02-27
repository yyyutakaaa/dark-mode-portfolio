import React from "react";
import Link from "next/link";

const ProjectNav = () => {
  return (
    <nav className="bg-[#0D1117] p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-[#00D4FF]">
          Network Infrastructure Project
        </div>
        <Link href="/">
          <span className="cursor-pointer text-[#00D4FF] hover:underline">
            &larr; Back to Home
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default ProjectNav;
