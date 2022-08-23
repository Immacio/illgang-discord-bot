const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { boldString } = require("../utility/styleFunctions");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bait")
    .setDescription("Call someone out for baiting")
    .addStringOption((option) =>
      option
        .setName("user")
        .setDescription("Mentioned the user who baited with @user")
        .setRequired(true)
    ),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle(`🚨 BAIT ALERT 🚨`)
      .setDescription(
        `${interaction.user} has called you out for baiting.\n Stop baiting now or face the tribunal.`
      )
      .setAuthor({
        name: "👮 ILLGANG Bait Police 👮",
      })
      .setColor(0xff0000)
      .setImage(
        "https://i.kym-cdn.com/entries/icons/mobile/000/013/604/thisisbait.jpg"
      );

    const baitingUser = interaction.options.getString("user");

    const message = await interaction.reply({
      content: `${baitingUser} has been ${boldString("baiting!")}`,
      embeds: [embed],
      fetchReply: true,
    });

    message.react("🎣");
  },
};
