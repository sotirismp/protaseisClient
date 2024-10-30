import { logo } from "../config/config.js";

export const getCurrentTime = () => {
  const date = new Date();
  const formattedDate = date
    .toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(",", "");

  return formattedDate;
};

export const printHeader = async (printer) => {
  printer.alignCenter();
  await printer.printImage(logo);
  printer.println(process.env.name);
  printer.println(process.env.address);
  printer.println(process.env.number);
  printer.println(getCurrentTime());
  printer.newLine();
  printer.setTextSize(1, 1);
  printer.println("Προγνωστικά");
  printer.println("Καταστήματος");
  printer.newLine();
  printer.setTextNormal();
  printer.alignLeft();
  printer.drawLine();
};
