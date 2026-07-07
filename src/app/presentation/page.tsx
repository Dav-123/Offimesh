import type { Metadata } from 'next';
import { PresentationClient } from './presentation-client';

export const metadata: Metadata = {
  title: 'OffiMesh Presentation — Offline Payments for Africa',
  description: 'An interactive walkthrough of how OffiMesh enables secure offline digital payments across Africa. Built for hackathon judges and investors.',
};

export default function PresentationPage() {
  return <PresentationClient />;
}
