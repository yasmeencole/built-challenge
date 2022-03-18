#!/usr/bin/env node

import { Customer } from "./Customer";
import { MovieCollection } from "./Movie";
import {StatementFormat} from './Format'

import { Command } from "commander";
import { statement } from "./statement";
import { MovieType } from "./MovieCalculations";

const program: Command = require("commander");
const version: string = require("../package.json").version;

const customer: Customer = require("./data/customer.json");
const movies: MovieCollection = require("./data/movies.json");
const movieType: MovieType = require('./data/movieTypes.json')

program
  .version(version)
  .description("A CLI for generating customer statements");

program
  .command("statement")
  .description("Prints out a plain-text statement for the customer")
  .action(() => console.log(statement(StatementFormat.TEXT, customer, movies, movieType)));

program
  .command("html-statement")
  .description("Prints out a html statement for the customer")
  .action(() => console.log(statement(StatementFormat.HTML, customer, movies, movieType)));

program.parse(process.argv);
