const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const { boldString } = require("../utility/styleFunctions");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lfg")
    .setDescription("Call up a bunch of nigels to play some games")
    .addNumberOption((option) =>
      option
        .setName("size")
        .setDescription("The size of the group")
        .setRequired(true)
    ),
  async execute(interaction) {
    const size = interaction.options.getNumber("size");

    const handlePlayerSizeText = (size) => {
      if (size === 1) return `${size} nigel`;
      return `${size} nigels`;
    };

    const embed = new EmbedBuilder()
      .setTitle("🎮 ILLGANG GAMERS NEEDED 🎮")
      .setDescription(
        `${interaction.user} is looking for ${boldString(
          handlePlayerSizeText(size)
        )} to join the SQUAA`
      )
      .setColor(0x00ff00)
      .setImage(
        "https://www.valorantinfo.gg/wp-content/uploads/2021/10/valorant-looking-for-group-player-card-horizontal.jpg"
      );

    const message = await interaction.reply({
      content: `@here +${size}`,
      embeds: [embed],
      fetchReply: true,
    });

    message.react("🙋").then(() => message.react("🙅‍♂️"));
  },
};
