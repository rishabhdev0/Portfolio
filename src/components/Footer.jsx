import React from 'react';
import { Github, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const LeetCodeIcon = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
    </svg>
);

const CodeforcesIcon = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/>
    </svg>
);

const Footer = () => {
    const socialLinks = [
        { icon: Github, href: "https://github.com/rishabhdev0" },
        { icon: Twitter, href: "https://x.com/Rishabh58750540" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/rishabh-pandey-254a08285/" },
        { icon: Mail, href: "mailto:rishabh52003@gmail.com" },
        { icon: LeetCodeIcon, href: "https://leetcode.com/u/rishabh_code/" },
        { icon: CodeforcesIcon, href: "https://codeforces.com/profile/rishabh_code" }
    ];

    return (
        <footer className="bg-neo-dark text-white py-12 border-t-3 border-black">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-display font-bold mb-2">Rishabh Pandey's Portfolio</h2>
                    <p className="text-gray-400 mb-2">© 2027 All rights reserved.</p>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
                        <Phone size={16} />
                        <span>Contact Me</span>
                    </div>
                </div>

                <div className="flex gap-6">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;