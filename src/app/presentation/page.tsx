import type { Metadata } from 'next';
import { PresentationDeck, type Slide } from '@/components/PresentationDeck';

export const metadata: Metadata = {
  title: 'OffiMesh Presentation — Offline Payments for Africa',
  description: 'An interactive walkthrough of how OffiMesh enables secure offline digital payments across Africa. Built for hackathon judges and investors.',
};

const slides: Slide[] = [
  {
    id: 'intro',
    eyebrow: 'OFFIMESH',
    title: 'Offline Payments for Africa',
    body: 'An offline-capable payment integration platform built during the Nomba Dev Career Hackathon.',
    image: '/presentation/slides/slide-1.jpg',
  },
  {
    id: 'problem',
    eyebrow: 'THE PROBLEM',
    title: 'Digital Payments Require Connectivity',
    body: 'Over 60% of Africa lacks reliable internet access. Current payment solutions fail when connectivity drops.',
    image: '/presentation/slides/slide-2.jpg',
  },
  {
    id: 'solution',
    eyebrow: 'OUR SOLUTION',
    title: 'Offline-First Payments',
    body: 'OffiMesh enables secure digital payments using QR codes, Bluetooth, and audio transfer — no internet required.',
    image: '/presentation/slides/slide-3.jpg',
  },
  {
    id: 'how',
    eyebrow: 'HOW IT WORKS',
    title: 'Three Ways to Pay',
    body: 'Pay with QR codes for instant transfers, Bluetooth for nearby payments, or audio-based transfer for the most remote areas.',
    image: '/presentation/slides/slide-4.jpg',
  },
  {
    id: 'security',
    eyebrow: 'SECURITY',
    title: 'Bank-Grade Security',
    body: 'Every transaction is encrypted and cryptographically signed. Transactions settle securely through Nomba when connectivity returns.',
    image: '/presentation/slides/slide-5.jpg',
  },
  {
    id: 'nomba',
    eyebrow: 'SETTLEMENT',
    title: 'Powered by Nomba',
    body: 'Seamless settlement and fiat conversion through Nomba gateway. Virtual accounts created automatically on registration.',
    image: '/presentation/slides/slide-6.jpg',
  },
  {
    id: 'team',
    eyebrow: 'THE TEAM',
    title: 'Built at Nomba Hackathon',
    body: 'Diamond Belema and David Briggs developed OffiMesh during the Nomba Dev Career Hackathon, June 2026.',
    image: '/presentation/slides/slide-7.jpg',
  },
  {
    id: 'cta',
    eyebrow: 'GET STARTED',
    title: 'View the Demo',
    body: 'Download the app or explore our API documentation to get started.',
    image: '/presentation/slides/slide-8.jpg',
  },
];

export default function PresentationPage() {
  return <PresentationDeck slides={slides} durationMs={7000} loop />;
}
