import React from 'react'
import { Microscope, Lightbulb, Award } from "lucide-react";

export const Welcome = ({ timeLeft }) => {
  return (
    <section className='min-h-screen flex items-center justify-center p-4 bg-background'>
        <div className='flex flex-col items-center justify-center text-center animate-fade-in'>
            <div className='flex gap-4 mb-6'>
                <Microscope size={40} className="text-primary"/>
                <Lightbulb size={40} className="text-primary"/>
                <Award size={40} className="text-primary"/>
            </div>
            <div>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>Welcome
                    <span className='block md:text-3xl font-serif italic mt-2 text-primary glow-text'>To My Life Work</span>
                </h1>
                <p className='text-lg mt-8 opacity-70 animate-pulse'>
                    Explore... Redirecting in {timeLeft}s
                </p>
            </div>
        </div>
    </section>
  )
}
