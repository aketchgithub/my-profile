import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
function SocialMedia() {
   return (
      <div className="app__social">
         <div>
            <a href="https://twitter.com/ace_vickery">
               <BsTwitter />
            </a>
         </div>
         <div>
            <a href="https://www.instagram.com/officiel_veek/">
               <BsInstagram />
            </a>
         </div>
         <div>
            <a href="https://www.linkedin.com/in/victor-owino-0280a5177/">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="mailto:vickeryace@gmail.com">
               <SiGmail />
            </a>
         </div>
      </div>
   );
}

export default SocialMedia;
