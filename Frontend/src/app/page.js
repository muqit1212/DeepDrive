"use client"
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Footer from "@/app/_components/Footer";
import {useUser} from "@clerk/nextjs";

export default function Home() {
    const {user, isSignedIn} = useUser();

    // if (isSignedIn) window.location.href = '/dashboard'



    return (
        <div className="flex flex-col overflow-hidden bg-gray-50 ">
            <Header/>
            <Hero/>
            <Footer/>
        </div>
    );
}
