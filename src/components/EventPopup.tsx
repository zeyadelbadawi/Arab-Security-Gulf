import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface EventPopupProps {
  eventSlug?: string;
  autoClose?: boolean;
}

const CAROUSEL_IMAGES = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Connect.%20Collaborate.%20Celebrate.-Gxs2S5ljSk3lq802Mnls7qHFhAmQ2X.jpg',
  '/assets/partners/12121212.jpg',
  '/assets/partners/121.jpg',
];

export function EventPopup({ eventSlug = 'elgouna-2026', autoClose = true }: EventPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Show popup after page renders (5 second delay)
    const timer = setTimeout(() => {
      setIsOpen(true);
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    if (!showContent) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [showContent]);

  const handleClose = () => {
    setShowContent(false);
    // Wait for fade-out animation to complete before removing from DOM
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
      showContent ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Premium Responsive Modal */}
      <div className={`relative w-full max-w-5xl h-auto md:h-[560px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
        showContent ? 'animate-in fade-in duration-500 scale-100' : 'scale-95'
      }`}>
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-[#1E2455]/10 hover:bg-[#1E2455]/20 text-[#1E2455] transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Responsive Layout */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden w-full">
          {/* Left Column - Image Carousel (Mobile: full width h-64, Desktop: 45%) */}
          <div className="w-full md:w-2/5 h-64 md:h-full bg-white flex items-center justify-center overflow-hidden relative group">
            {/* Carousel Image */}
            <img
              src={CAROUSEL_IMAGES[currentImageIndex]}
              alt="El Gouna Partnership Event"
              className="w-full h-full object-contain transition-opacity duration-300"
            />

            {/* Left Arrow */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#1E2455]/80 hover:bg-[#1E2455] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1E2455]/80 hover:bg-[#1E2455] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {CAROUSEL_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-[#1E2455] w-6' : 'bg-[#1E2455]/40'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Content (Mobile: full width, Desktop: 55%) */}
          <div className="w-full md:w-3/5 p-4 md:p-8 flex flex-col justify-between overflow-y-auto md:overflow-y-visible">
            {/* Top Content */}
            <div>
              {/* Event Badge */}
              <div className="inline-block px-3 py-1 bg-[#fd6909]/10 rounded-full text-[#fd6909] text-xs font-bold tracking-wide mb-2 md:mb-4">
                FEATURED EVENT
              </div>

              {/* Title */}
              <h2 className="font-display text-lg md:text-3xl font-bold text-[#1E2455] mb-1 leading-tight">
                Connect. Collaborate. Celebrate.
              </h2>
              <p className="text-[#fd6909] font-semibold text-xs md:text-sm mb-3 md:mb-5">El Gouna, Egypt 2026</p>

              {/* Description - Show full on desktop, compact on mobile */}
              <div className="space-y-2 md:space-y-3 text-gray-700 text-xs md:text-sm leading-relaxed">
                <p className="md:block hidden">
                  ASG Distribution and Dahua Technology brought together leading System Integrators and End-Users to celebrate strong partnerships and shared success.
                </p>
                <p className="md:block hidden">
                  With the presence of both companies&apos; leadership teams, the event highlighted El Gouna as a successful showcase of security solutions.
                </p>
                <p className="block md:hidden">
                  ASG Distribution and Dahua Technology brought together partners to celebrate success.
                </p>
                <p className="font-semibold text-[#1E2455] text-xs md:text-sm">
                  Together, we build a smarter, safer future.
                </p>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['#ASGDistribution', '#DahuaTechnology', '#ElGouna'].map((tag) => (
                    <span key={tag} className="text-xs text-[#fd6909] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - Centered CTA Button (Responsive) */}
        <div className="border-t border-gray-200 bg-gradient-to-r from-[#1E2455]/5 to-[#fd6909]/5 px-3 md:px-8 py-3 md:py-6 flex justify-center">
          <Link
            to={`/media/elgouna-2026`}
            className="inline-flex items-center gap-1 md:gap-2 px-4 md:px-8 py-2 md:py-3 bg-[#fd6909] hover:bg-[#fd6909]/90 text-white font-semibold text-xs md:text-base rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            View Full Event Details
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
