import "dotenv/config";
import {
  CharacterSet,
  PrinterTypes,
  ThermalPrinter,
} from "node-thermal-printer";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

export const logo = path.join(__dirname + "/../assets/logo.png");

const printerInterface = `//localhost/${process.env.PRINTER_NAME}`;

export const printer = new ThermalPrinter({
  type: PrinterTypes.EPSON, // Printer type: 'star' or 'epson'
  interface: printerInterface, // Printer interface
  characterSet: CharacterSet.PC737_GREEK,
  removeSpecialCharacters: false,
  lineCharacter: "-",
  options: {
    timeout: 5000,
  },
});
