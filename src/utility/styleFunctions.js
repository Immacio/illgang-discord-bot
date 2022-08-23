const {
  bold,
  italic,
  strikethrough,
  underscore,
  spoiler,
  quote,
  blockQuote,
} = require("discord.js");

const boldString = (text) => {
  return bold(text);
};

const italicString = (text) => {
  return italic(text);
};

const strikethroughString = (text) => {
  return strikethrough(text);
};

const underscoreString = (text) => {
  return underscore(text);
};

const spoilerString = (text) => {
  return spoiler(text);
};

const quoteString = (text) => {
  return quote(text);
};

const blockQuoteString = (text) => {
  return blockQuote(text);
};

module.exports = {
  boldString,
  italicString,
  strikethroughString,
  underscoreString,
  spoilerString,
  quoteString,
  blockQuoteString,
};
