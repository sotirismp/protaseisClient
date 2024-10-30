import { printer } from "./config/config.js";
import { printFooter } from "./sections/printFooter.js";
import { printHeader } from "./sections/printHeader.js";
import { printMatches } from "./sections/printMatches.js";
import { getSuggections } from "./utils/getSuggestions.js";

const print = async () => {
  const matches = await getSuggections();
  if (matches && matches.length === 0) return;
  const { suggestions, listCreated } = matches;

  await printHeader(printer);
  printMatches(suggestions);
  printFooter(listCreated);
  printer.cut();
  await printer.execute();
};

print();
