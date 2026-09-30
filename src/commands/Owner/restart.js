exports.run = async (client, message, args, prefix) => {

        if (message.author.id !== process.env.OWNER_ID) {
            return message.channel.send(`__**Apenas minha dona pode usar esse comando!**__`)
        }
        await message.channel.send(`__**Reiniciando o bot...**__`)
        process.exit();
    }


    exports.help = {
        name: "restart",
        aliases: [],
        category: "Owner",
        description: "",
        }