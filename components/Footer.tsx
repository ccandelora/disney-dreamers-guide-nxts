import React from "react";

function Footer() {
  return (
    <div className="bg-page-pattern">
      <footer className="footer d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom text-white">
        <ul className="text-xs">
          <li>
            <a target="_blank" href="https://icons8.com/icon/13478/animation" rel="noreferrer">
              Mickey Mouse
            </a>
             {" "}icon by{" "}
            <a target="_blank" href="https://icons8.com" rel="noreferrer">
               Icons8 {" "}
            </a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
        </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
