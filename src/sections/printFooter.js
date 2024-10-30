import { printer } from "../config/config.js";
import { formatToGreekTime } from "../utils/formatToGreekTime.js";

export const printFooter = async (listCreated) => {
  printer.alignRight();
  printer.println("Τελευταία ενημέρωηση:");
  printer.println(formatToGreekTime(listCreated));
  printer.drawLine();
  printer.newLine();
  printer.alignCenter();
  printer.setTextSize(1, 1);
  printer.println("Καλή επιτυχία!");
};
