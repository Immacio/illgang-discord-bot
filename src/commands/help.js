const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Displays list of commands available by ILLBOT"),
  async execute(interaction) {
    await interaction.reply("Current supported commands: /help, /ping");
  },
};
