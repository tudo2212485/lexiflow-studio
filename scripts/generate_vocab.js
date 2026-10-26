import fs from 'fs';
import path from 'path';

// Helper to make lego tokens from example sentence
function makeLegoWords(example) {
  return example.split(/\s+/).filter(Boolean);
}

// 8 Decks generator
import { deck1000Common } from './vocab_data_part1.js';
import { deckFoodRestaurant, deckLifeFamily } from './vocab_data_part2.js';
import { deckTravelTransport, deckShoppingServices } from './vocab_data_part3.js';
import { deckToeic600, deckToeicListening } from './vocab_data_part4.js';
import { deckTechSoftware } from './vocab_data_part5.js';

const allDecks = [
  deck1000Common,
  deckFoodRestaurant,
  deckLifeFamily,
  deckTravelTransport,
  deckShoppingServices,
  deckToeic600,
  deckToeicListening,
  deckTechSoftware
];

allDecks.forEach((deck) => {
  deck.cards = deck.cards.map((c, i) => ({
    ...c,
    id: c.id || `${deck.id}-${i + 1}`,
    chunk: c.chunk || c.collocation,
    pattern: c.pattern || c.sentencePattern,
    collocation: c.collocation || c.chunk,
    sentencePattern: c.sentencePattern || c.pattern,
    wordsForLego: c.wordsForLego || makeLegoWords(c.example),
    status: c.status || 'due',
    due: c.due !== undefined ? c.due : true
  }));
  deck.totalWordsMeta = `${deck.cards.length} TỪ VỰNG`;
});

fs.writeFileSync(path.resolve('src/data/vocab_decks.json'), JSON.stringify(allDecks, null, 2), 'utf-8');
console.log(`Successfully generated ${allDecks.length} decks with word counts:`);
allDecks.forEach(d => console.log(`- ${d.title}: ${d.cards.length} words`));
