# Creating a new Command

- This guide explains creating a command

## File Structure

- Assuming your file structure to be the basic, Specified [Here](/guide/creating-a-new-project.html#structure), Create a new file and use the following code as an example:

<CodeSwitcher :languages="{ js: 'Javascript', ts: 'Typescript' }">
<template v-slot:js>

```js
const { Command } = require("@cofo/framework");

module.exports = class MyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "ping", // The command name
      description: "pong", // The command description
      slash: true, // Whether this command should be registered slash or not
      options: [], // Application Command Options same as eris
      cooldown: 5000, // The command cooldown in MS
      guildOnly: true, // Whether the command should be guild only.
      dmOnly: false, // Whether the command should be dm only
      guildOwneronly: false, // Whether the command should be guild's owner only
      botOwnerOnly: false, // Whether the command should be bot's owner only
      aliases: ["pong"], // Aliases other words which can trigger the command
      usage: "ping", // The command usage, Helpful for help command
      argsRequired: false, // Whether the command requires arguments
      cooldownMessage: "You are on cooldown", // Message to send when the user is on cooldown, Default: You are on cooldown, try again later!
      deleteCommand: true, // Whether to delete the message which triggered the command
      defaultPermission: false, // Whether the command is enabled by default when the app is added to a guild
      customPrecondition: (message) => true || false, // A Custom precondition, if this returns false the command won't be executed.
      customInteractionPreCondition: (interaction) => true || false, // A Custom precondition for slash commands, if this returns false the command won't be executed.
    });
  }
  /**
   * Message Command
   * @param {Client} client
   * @param {Message} message
   */
  messageRun(client, message) {
    message.channel.createMessage({
      content: "Pong!",
    });
  }
  /**
   * Slash Command
   * @param {Client} client
   * @param {Interaction} interaction
   */
  interactionRun(client, interaction) {
    interaction.createMessage({
      content: "Pong!",
    });
  }
};
```

</template>
<template v-slot:ts>

```ts
import { Command, CofoClient } from "@cofo/framework";
import { Message, CommandInteraction } from "eris";

export default class MyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "ping",
      description: "pong!",
      slash: true, // Whether this command should be registered slash or not
      options: [], // Application Command Options same as eris
      cooldown: 5000, // The command cooldown in MS
      guildOnly: true, // Whether the command should be guild only.
      dmOnly: false, // Whether the command should be dm only
      guildOwneronly: false, // Whether the command should be guild's owner only
      botOwnerOnly: false, // Whether the command should be bot's owner only
      aliases: ["pong"], // Aliases other words which can trigger the command
      usage: "ping", // The command usage, Helpful for help command
      argsRequired: false, // Whether the command requires arguments
      cooldownMessage: "You are on cooldown", // Message to send when the user is on cooldown, Default: You are on cooldown, try again later!
      deleteCommand: true, // Whether to delete the message which triggered the command
      defaultPermission: false, // Whether the command is enabled by default when the app is added to a guild
      customPrecondition: (message) => true || false, // A Custom precondition, if this returns false the command won't be executed.
      customInteractionPreCondition: (interaction) => true || false, // A Custom precondition for slash commands, if this returns false the command won't be executed.
    });
  }

  /**
   * Message Command
   * @param {Client} client
   * @param {Message} message
   */
  messageRun(client: CofoClient, message: Message) {
    message.channel.createMessage({
      content: "Pong!",
    });
  }
  /**
   * Slash Command
   * @param {Client} client
   * @param {Interaction} interaction
   */
  interactionRun(client: CofoClient, interaction: CommandInteraction) {
    interaction.createMessage({
      content: "Pong!",
    });
  }
}
```

</template>
</CodeSwitcher>
