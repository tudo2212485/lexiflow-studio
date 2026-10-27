import React from 'react';
import WordVisualIllustration from './WordVisualIllustration';

/**
 * WordIllustration - Enhanced Visual Concept Component
 * Backwards compatible adapter forwarding to WordVisualIllustration (no pollinations.ai, uses Wikipedia REST API + SVG/3D Concept Scenes).
 */
export default function WordIllustration(props) {
  return <WordVisualIllustration {...props} />;
}
