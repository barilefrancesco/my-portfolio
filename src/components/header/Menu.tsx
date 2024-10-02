"use client";


import { BookMarked, Briefcase, CircleUserRound, House } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

type MenuItem = {
    title: string;
    href: string;
    icon: React.ReactNode;
};

export default function Menu() {
    const [currentTime, setCurrentTime] = useState<string | null>(null);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    const menuItems: MenuItem[] = [
        { title: 'About', href: '/', icon: <CircleUserRound className="w-4 h-4" fill='#FFFFFF30' /> },  
        { title: 'Work', href: '/work', icon: <Briefcase className="w-4 h-4" fill='#FFFFFF30' /> },
        { title: 'Blog', href: '/blog', icon: <BookMarked className="w-4 h-4" fill='#FFFFFF30' /> },
    ];

    return (
        <div className="flex justify-between items-center w-full px-4 py-2 sticky top-0">
            <div>Europe/Bari</div>
            <div className="flex gap-2 bg-[#0000004d] px-1 py-1 rounded-2xl shadow-md border border-white/20 backdrop-blur-md">
                {menuItems.map((item) => (
                    <MenuItem key={item.title} item={item} />
                ))}
            </div>
            <div>{currentTime}</div>
        </div>
    );
}


function MenuItem({ item }: { item: MenuItem }) {
    const pathname = usePathname();

    return (
        <Link href={item.href}>
            <div className={
                item.href === pathname
                    ? "flex items-center gap-2 border border-white/20 px-4 py-1 rounded-xl bg-[#9595954d]"
                    : "flex items-center gap-2  border border-white/0 px-4 py-1 rounded-xl"}>
                <div>{item.icon}</div>
                <div className='hidden md:block'>{item.title}</div>
            </div>
        </Link>
    );
}