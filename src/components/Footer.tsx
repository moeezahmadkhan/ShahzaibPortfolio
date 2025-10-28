import React from 'react';
import { Heart } from 'lucide-react'; // Still good to keep if you might use it later

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-6">
      <div className="container mx-auto text-center"> {/* Add text-center to the main container */}
        {/* Copyright text block */}
        <div className="mb-4 md:mb-0"> {/* No need for text-center here if parent has it */}
          <p className="text-gray-400">
            © 2025 Real Shahzaib. All rights reserved.
          </p>
        </div>

        {/* This commented-out block was causing the issue with justify-between
            by creating a flex context for the copyright.
        */}
        {/* <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2025 Shahzaib Azeem. All rights reserved.
            </p>
          </div>
        </div> */}

        {/* "Built with" text block */}
        <div className="mt-6 pt-6 border-t border-gray-800"> {/* text-center removed here, moved to parent container */}
          <p className="text-gray-500 text-sm">
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;