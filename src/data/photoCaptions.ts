/**
 * Captions for the Achievements photo gallery.
 *
 * Key = the image filename in `src/assets/achievements/` without its extension.
 * e.g. dropping in `sih-2024.jpg` picks up the "sih-2024" caption below.
 *
 * Any photo without an entry here still renders — it just falls back to a
 * readable version of its filename, so nothing is ever left unlabelled.
 */
export const photoCaptions: Record<string, string> = {
  'sih-2024':
    'Smart India Hackathon 2024 Grand Finale — Mini Juris 2.0, winning team, ₹1,00,000 prize.',
  'sih-2023':
    'Smart India Hackathon 2023 — joint winners, ESG platform for higher-education institutions.',
  'yukti-2024': 'Yukti Innovation Challenge 2024 — national finalist.',
  'icccnt-2024-presentation':
    'Presenting "From Theory to Action: The Role of an ESG-focused App in Transforming Sustainability Education" — my first paper — at ICCCNT 2024, IIT Mandi.',
};
