const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Display your Discord avatar URL"),
  async execute(interaction) {
    await interaction.reply(
      `Your avatar URL is: ${interaction.user.displayAvatarURL()}`
    );
  },
};
