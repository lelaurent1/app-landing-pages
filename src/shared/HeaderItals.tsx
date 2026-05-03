import React from 'react'
import type { ReactNode } from 'react'

// Wraps a word or phrase in the brand's Instrument Serif Italic highlight
// style. Always renders a space before the span and after it, so adjacent
// Inter Tight text stays separated regardless of JSX whitespace collapsing.
//
// Use this instead of writing <span className="header-itals">...</span>
// directly. JSX collapses line breaks between text and adjacent elements
// to nothing (not spaces), which produces "Trusted bythousandsof brands"
// in the rendered output. This component prevents that mistake.
//
// Brand rules (see .claude/skills/stack-influence-typography):
// - Mid or end of the headline only — never start a sentence with this
// - Maximum three words
// - The Inter Tight portion must be the majority of the header

function HeaderItals({ children }: { children: ReactNode }) {
  return (
    <>
      {' '}
      <span className="header-itals">{children}</span>{' '}
    </>
  )
}

export default HeaderItals
