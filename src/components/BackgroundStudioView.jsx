import React, { useMemo } from 'react';
import { DEFAULT_THEME_SETTINGS, THEME_PRESETS } from './ThemeStudioModal';

export default function BackgroundStudioView({
  themeSettings = DEFAULT_THEME_SETTINGS,
  customImageData = null
}) {
  const current = { ...DEFAULT_THEME_SETTINGS, ...themeSettings };
  const { preset, customUrl, dimmerOpacity, bgBlur, ecoMode } = current;

  // Resolve custom image URL (prefer in-memory prop, fallback to dedicated local storage key)
  const resolvedCustomUrl = useMemo(() => {
    if (preset !== 'custom') return null;
    if (customImageData) return customImageData;
    if (customUrl && customUrl !== 'local_custom_image') return customUrl;
    try {
      return localStorage.getItem('lexiflow_custom_bg_image') || null;
    } catch {
      return null;
    }
  }, [preset, customUrl, customImageData]);

  return (
    <div
      className={`fixed inset-0 pointer-events-none select-none -z-10 overflow-hidden transform-gpu ${
        ecoMode ? 'eco-mode' : ''
      }`}
      aria-hidden="true"
    >
      {/* 1. VISUAL ART / MESH / IMAGE LAYER WITH SINGLE PRE-BLUR */}
      <div
        className="absolute inset-0 transform-gpu will-change-[filter,transform]"
        style={{
          filter: ecoMode ? 'none' : `blur(var(--bg-blur, ${bgBlur}px))`,
          transform: !ecoMode && bgBlur > 0 ? 'scale3d(1.05, 1.05, 1)' : 'none'
        }}
      >
        {/* PRESET: AURORA BOREALIS */}
        {preset === 'aurora' && (
          <div className="absolute inset-0 bg-[#070A13]">
            {/* Base cosmic deep gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#060913] via-[#0B0F1E] to-[#081326]" />

            {/* Aurora Wave 1: Indigo & Blue Ribbon */}
            <div
              className={`absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full opacity-70 transform-gpu ${
                ecoMode ? '' : 'animate-aurora-1'
              }`}
              style={{
                background:
                  'radial-gradient(circle, rgba(99, 102, 241, 0.45) 0%, rgba(59, 130, 246, 0.25) 45%, transparent 70%)'
              }}
            />

            {/* Aurora Wave 2: Cyan & Teal Shimmer */}
            <div
              className={`absolute top-[25%] -right-[15%] w-[65vw] h-[65vw] rounded-full opacity-65 transform-gpu ${
                ecoMode ? '' : 'animate-aurora-2'
              }`}
              style={{
                background:
                  'radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, rgba(6, 182, 212, 0.25) 40%, transparent 70%)'
              }}
            />

            {/* Aurora Wave 3: Purple & Violet Heart */}
            <div
              className={`absolute -bottom-[20%] left-[20%] w-[75vw] h-[65vw] rounded-full opacity-60 transform-gpu ${
                ecoMode ? '' : 'animate-aurora-3'
              }`}
              style={{
                background:
                  'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(139, 92, 246, 0.2) 45%, transparent 70%)'
              }}
            />
          </div>
        )}

        {/* PRESET: CYBERPUNK NEON GRID */}
        {preset === 'neon-grid' && (
          <div className="absolute inset-0 bg-[#080512]">
            {/* Horizon glow */}
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-[#180A2E] via-[#0D071E] to-transparent" />
            <div className="absolute top-[35%] inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent shadow-[0_0_20px_#d946ef]" />

            {/* Neon Nebula orbs */}
            <div
              className="absolute top-10 left-1/4 w-[50vw] h-[35vw] rounded-full opacity-40 blur-2xl transform-gpu"
              style={{
                background:
                  'radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 75%)'
              }}
            />

            {/* 3D Perspective Grid */}
            <div className={`cyber-grid-plane opacity-75 ${ecoMode ? 'eco-static-grid' : ''}`} />
          </div>
        )}

        {/* PRESET: LOFI STUDY NIGHT */}
        {preset === 'lofi' && (
          <div className="absolute inset-0 bg-[#0C0F17]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${THEME_PRESETS.find((p) => p.id === 'lofi')?.imageUrl})`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-amber-950/20" />
            <div
              className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full opacity-35"
              style={{
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 65%)'
              }}
            />
          </div>
        )}

        {/* PRESET: MINIMALIST DEEP SLATE */}
        {preset === 'minimalist' && (
          <div className="absolute inset-0 bg-[#090D16]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B101D] via-[#090D16] to-[#05070C]" />
            <div
              className="absolute top-1/4 left-1/3 w-[60vw] h-[40vw] rounded-full opacity-30"
              style={{
                background: 'radial-gradient(circle, rgba(30, 41, 59, 0.7) 0%, transparent 70%)'
              }}
            />
          </div>
        )}

        {/* PRESET: CUSTOM USER WALLPAPER */}
        {preset === 'custom' && resolvedCustomUrl && (
          <div className="absolute inset-0 bg-[#070A13]">
            <img
              src={resolvedCustomUrl}
              alt="Custom background"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* 2. SMART DIMMER & WCAG AAA CONTRAST OVERLAY (Dynamic CSS Variable Driven) */}
      <div
        className="absolute inset-0 transform-gpu"
        style={{
          backgroundColor: `rgba(11, 15, 23, var(--bg-dimmer, ${dimmerOpacity}))`
        }}
      />
    </div>
  );
}
