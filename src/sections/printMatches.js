import { printer } from "../config/config.js";

export const printMatches = async (matches) => {
  printer.bold(true);
  matches.forEach(
    ({ code, matchTime, match, suggestion, odd, organization }) => {
      printer.println(matchTime);
      printer.println(`${code} - ${match}`);
      printer.println(organization);
      printer.leftRight(suggestion, odd);
      printer.newLine();
    }
  );
};
