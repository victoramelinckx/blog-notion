import { Command } from "commander";
const program = new Command();

program
  .version("0.1.0")
  .option("-p, --peppers", "Add peppers")
  .option("-P, --pineapple", "Add pineapple")
  .option("-b, --bbq-sauce", "Add BBQ sauce")
  .option("-c, --cheese [type]", "Add the specified type of cheese", "marble");
program.parse(process.argv);

const options = program.opts();
if (options.peppers) console.log("You ordered peppers!");
