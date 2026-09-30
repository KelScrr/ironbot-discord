<h1 align="center">🤖 IronBot</h1>

<p align="center">
  Bot multifuncional para Discord com <b>moderação</b>, <b>economia</b>, <b>informações</b> e <b>diversão</b>.<br>
  Criado por mim entre 2019 e 2020, no começo dos meus estudos de programação.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/discord.js-v12-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="discord.js v12">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
</p>

---

## ✨ Comandos

| Categoria | Comandos |
|---|---|
| 🛡️ **Moderação** | `ban` `unban` `banlist` `clear` `lock` `unlock` `slowmode` `anuncio` `embed` `say` `sorteio` `prefix` |
| 💰 **Economia** | `bal` `daily` `pay` `jogar` |
| ℹ️ **Informações** | `help` `ping` `uptime` `botinfo` `serverinfo` `userinfo` `avatar` `cargo` `emoji` `clima` `corona` `calcular` `sugestao` `bug` `invite` `music` |
| 🎉 **Diversão** | `ascii` `binario` `decodificar` `coinflip` `ship` `vidente` `mcbody` `hug` `kiss` `slap` `kill` `cafune` `voadora` |
| 👑 **Dono do bot** | `eval` `restart` `dm` |

O prefixo pode ser trocado por servidor com o comando `prefix` e fica salvo no MongoDB.

## 🧱 Como funciona

- **Sharding:** o `shard.js` usa o `ShardingManager` do discord.js para iniciar o bot e reiniciar os shards que caírem.
- **Comandos por pasta:** cada comando fica em `src/commands/<Categoria>/` e é carregado automaticamente na inicialização.
- **Eventos:** `src/client/events/` (`ready` e `message`).
- **Banco de dados:** MongoDB com Mongoose (`src/database/`), com schemas de usuário, servidor e cliente para o prefixo e a economia.
- **Keep-alive:** um servidor Express responde na porta `PORT`, para a hospedagem não desligar o bot.

```
├── shard.js               # Entrada: inicia os shards
├── index.js               # Client do Discord, carrega comandos e eventos
└── src/
    ├── client/events/     # ready, message
    ├── commands/          # Diversão, Economia, Info, Mod, Owner
    └── database/          # Conexão e schemas do MongoDB
```

## 🚀 Como rodar

```bash
npm install
cp .env.example .env   # preencha o token do bot, a URL do MongoDB e o seu ID
npm start
```

| Variável | Para que serve |
|---|---|
| `DISCORD_TOKEN` | Token do bot, gerado no [Discord Developer Portal](https://discord.com/developers/applications) |
| `MONGODB_URI` | String de conexão do MongoDB |
| `OWNER_ID` | Seu ID do Discord, liberado para `eval`, `restart` e `dm` |
| `PORT` | Porta do servidor de keep-alive |

> ⚠️ **Nota:** o bot foi feito com o **discord.js v12**, que já foi descontinuado. Para rodar hoje, seria preciso migrar para a versão atual da biblioteca (intents, slash commands). O código fica aqui como registro do projeto.
