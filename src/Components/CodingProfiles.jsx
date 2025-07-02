import React from 'react';
import lc from '../assets/Leetcode.png';
import cf from '../assets/codeforces.png';
import cc from '../assets/codechef.png';
import g from '../assets/gfg.png';

export function CodingProfiles() {
    const profs = [
        {
            title: 'Leetcode',
            img: lc,
            link: 'https://leetcode.com/u/anshgogoi201/'
        },
        {
            title: 'CodeForces',
            img: cf,
            link: 'https://codeforces.com/profile/anshgogoi201'
        },
        {
            title: 'CodeChef',
            img: cc,
            link: 'https://www.codechef.com/users/anshu2619'
        },
        {
            title: 'geeksForGeeks',
            img: g,
            link: 'https://www.geeksforgeeks.org/user/anshgognlde/'
        }
    ];

    return (
        <div className="min-h-screen w-screen bg-[#1e1e2f] text-white px-6 pt-24 flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10 text-center">
                Coding Profiles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {profs.map((prof, index) => (
                    <a
                        key={index}
                        href={prof.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#2a2a3f] hover:shadow-blue-500/30 rounded-2xl shadow-lg p-6 transition duration-300 transform hover:scale-105 flex items-center gap-4"
                    >
                        <img src={prof.img} alt={prof.title} className="w-16 h-16 object-contain" />
                        <h3 className="text-xl font-semibold text-blue-300">{prof.title}</h3>
                    </a>
                ))}
            </div>
        </div>
    );
}
