import { React} from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Contact.scss";

function Contact() {

   return (
      <>
         <h2 className="head-text">Let's Connect!!</h2>
         <div className="app__footer-cards">
            <div className="app__footer-card">
               <img src={images.email} alt="email" />
               <a href="vickeryace@gmail.com" className="p-text">
                  Email
               </a>
            </div>
            
            <div className="app__footer-card">
            
               <img src={images.twitter} alt=""/>
               <a href="https://twitter.com/ace_vickery" className="p-text">
               Twitter
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.linkedln} alt="LinkedIn"/>
               <a
                  href="https://www.linkedin.com/in/victor-owino-0280a5177/"
                  className="p-text"
               >
                  Linkedln
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.github} alt="Github"/>
               <a href="https://github.com/aketchgithub" className="p-text">
                 GitHub
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.medium} alt="Medium"/>
               <a href="https://medium.com/@vickeryace" className="p-text">
                  Medium
               </a>
            </div>
    
         </div>
      </>
   );
}
export default AppWrap(
   MotionWrap(Contact, "app__footer"),
   "contact",
   "app__whitebg"
);
