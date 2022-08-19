const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules")
    .setDescription(
      "Sacred rules of the ILLGANG server that every member must adhere to."
    ),
  async execute(interaction) {
    await interaction.reply(
      `https://cdn.discordapp.com/attachments/443377717522464768/1009261303417802752/unknown.png`
    );
  },
};
