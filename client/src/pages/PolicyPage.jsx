import React from "react";
import Policies from "../components/Policy";
import { usePageMeta } from "../hooks/usePageMeta";

function PolicyPage() {
  usePageMeta(
    "Privacy Policy | Netcradus",
    "Review Netcradus policy, privacy, governance, and compliance information."
  );

  return (
    <div>

     <Policies />
    </div>
  );
}

export default PolicyPage;
