const ms = module.require("ms");
module.exports = {
  name: "hack",
  description: "heck someone account [J4F]",
  options: [
      {
          name: "user",
          description: "who you want to be hacked",
          type: 'MENTIONABLE',
      }
  ],
      run: async (client, interaction, args) => {
    if (!args[0]) {
      return interaction.reply(
        "Woah.... Slow Down!! Who are we hacking..??"
      );
    }
    const tohack = interaction.options.getMentionable("user");
    let msg = await interaction.reply(`Hacking ${tohack.displayName}....`);

    let time = "1s";
    setTimeout(function () {
      interaction.editReply(`[10.50%]|Finding ${tohack.displayName}'s Email and Password.....`);
    }, ms(time));

    let time1 = "6s";
    setTimeout(function () {
      interaction.editReply(`[25.75%]|E-Mail: ${tohack.displayName}@gmail.com \nPassword: ********`);
    }, ms(time1));

    let time2 = "9s";
    setTimeout(function () {
      interaction.editReply("[45.25%]|Finding Other Accounts.....");
    }, ms(time2));

    let time3 = "15s";
    setTimeout(function () {
      interaction.editReply("[47.45%]|Setting up Epic Games Account.....");
    }, ms(time3));

    let time4 = "21s";
    setTimeout(function () {
      interaction.editReply("[50.15%]|Hacking Epic Games Account......");
    }, ms(time4));

    let time5 = "28s";
    setTimeout(function () {
      interaction.editReply("[60.00%]|Hacked Epic Games Account!!");
    }, ms(time5));

    let time6 = "31s";
    setTimeout(function () {
      interaction.editReply("[65.99%]|Collecting Info.....");
    }, ms(time6));

    let time7 = "38s";
    setTimeout(function () {
      interaction.editReply("[80.35%]|Selling data to FBI....");
    }, ms(time7));

    let time8 = "41s";
    setTimeout(function () {
      interaction.editReply(`[100.00%]|Finished Hacking ${tohack.displayName}`);
    }, ms(time8));
  },
};
