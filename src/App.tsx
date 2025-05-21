import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/Layout/DashboardLayout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MusicProduction from './pages/MusicProduction';
import FilmProduction from './pages/FilmProduction';
import ArtistManagement from './pages/ArtistManagement';
import TalentAcquisition from './pages/TalentAcquisition';
import TechnologyLabs from './pages/TechnologyLabs';
import Mentorship from './pages/Mentorship';
import Merchandise from './pages/Merchandise';
import ScrollToTopButton from './components/UI/ScrollToTopButton';
export function App() {
 useEffect(() => {
 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 entry.target.classList.add('fade-in-on-scroll');
 observer.unobserve(entry.target); // Unobserve once animated
 }
 });
 },
 { threshold: 0.1 } // Adjust the threshold as needed
 );
 const elements = document.querySelectorAll('.animate-on-scroll');
 elements.forEach((el) => observer.observe(el));
 return () => {
 observer.disconnect(); // Clean up the observer on unmount
 };
 }, []);
 return <BrowserRouter>

      <ScrollToTopButton />
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/music-production" element={<MusicProduction />} />
          <Route path="/film-production" element={<FilmProduction />} />
          <Route path="/artist-management" element={<ArtistManagement />} />
          <Route path="/talent-acquisition" element={<TalentAcquisition />} />
          <Route path="/technology" element={<TechnologyLabs />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/merchandise" element={<Merchandise />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>;
}