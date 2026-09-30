require("dotenv").config();
const {ShardingManager} = require("discord.js");

 
const shards = new ShardingManager("./index.js", {
    token: process.env.DISCORD_TOKEN,
    totalShards: 1,
    respawn: true
});
 
shards.on("shardCreate", shard => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${shard.id}`);
});
 
shards.spawn(shards.totalShards, 10000); // For safety reason, try to use 10 seconds to respawn the shard.