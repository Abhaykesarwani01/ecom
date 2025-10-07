import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company */}
        <div>
          <Typography variant="h6" className="text-white mb-4">
            Company
          </Typography>
          <ul className="space-y-2 text-sm">
            <li><a href="#a" className="hover:text-white">About</a></li>
            <li><a href="#a" className="hover:text-white">Blog</a></li>
            <li><a href="#a" className="hover:text-white">Jobs</a></li>
            <li><a href="#a" className="hover:text-white">Press</a></li>
            <li><a href="#a" className="hover:text-white">Partners</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <Typography variant="h6" className="text-white mb-4">
            Solutions
          </Typography>
          <ul className="space-y-2 text-sm">
            <li><a href="#a" className="hover:text-white">Marketing</a></li>
            <li><a href="#a" className="hover:text-white">Analytics</a></li>
            <li><a href="#a" className="hover:text-white">Commerce</a></li>
            <li><a href="#a" className="hover:text-white">Insights</a></li>
            <li><a href="a" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Documentation */}
        <div>
          <Typography variant="h6" className="text-white mb-4">
            Documentation
          </Typography>
          <ul className="space-y-2 text-sm">
            <li><a href="a" className="hover:text-white">Guides</a></li>
            <li><a href="a" className="hover:text-white">API Status</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <Typography variant="h6" className="text-white mb-4">
            Legal
          </Typography>
          <ul className="space-y-2 text-sm">
            <li><a href="a" className="hover:text-white">Claim</a></li>
            <li><a href="a" className="hover:text-white">Privacy</a></li>
            <li><a href="a" className="hover:text-white">Terms</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} My Company. All rights reserved.  
        <br />
        Made with ❤️ by Me.
      </div>
    </footer>
  );
};

export default Footer;
