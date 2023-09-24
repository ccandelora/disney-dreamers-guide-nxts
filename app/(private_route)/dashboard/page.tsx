import React from "react";
import Link from "next/link";
import AuthMenu from "@/components/AuthMenu";

function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-50 py-3 px-4 sm:px-6 lg:px-8">
      <AuthMenu />
    </div>
  );
}

export default Dashboard;
