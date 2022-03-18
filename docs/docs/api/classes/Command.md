[@cofo/framework](../README.md) / [Exports](../modules.md) / Command

# Class: Command

## Table of contents

### Constructors

- [constructor](Command.md#constructor)

### Properties

- [aliases](Command.md#aliases)
- [argsRequired](Command.md#argsrequired)
- [botOwnerOnly](Command.md#botowneronly)
- [client](Command.md#client)
- [cooldown](Command.md#cooldown)
- [cooldownMessage](Command.md#cooldownmessage)
- [customInteractionPreCondition](Command.md#custominteractionprecondition)
- [customPrecondition](Command.md#customprecondition)
- [defaultPermission](Command.md#defaultpermission)
- [deleteCommand](Command.md#deletecommand)
- [description](Command.md#description)
- [dmOnly](Command.md#dmonly)
- [guildOnly](Command.md#guildonly)
- [guildOwneronly](Command.md#guildowneronly)
- [name](Command.md#name)
- [options](Command.md#options)
- [slash](Command.md#slash)
- [usage](Command.md#usage)

## Constructors

### constructor

• **new Command**(`client`, `options`)

Create a new command

**`since`** 1.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`CofoClient`](CofoClient.md) |
| `options` | `Object` |
| `options.aliases?` | `any`[] |
| `options.argsRequired?` | `boolean` |
| `options.botOwnerOnly?` | `boolean` |
| `options.cooldown?` | `number` |
| `options.cooldownMessage?` | `string` |
| `options.defaultPermission?` | `boolean` |
| `options.deleteCommand?` | `boolean` |
| `options.description?` | `string` |
| `options.dmOnly?` | `boolean` |
| `options.guildOnly?` | `boolean` |
| `options.guildOwnerOnly?` | `boolean` |
| `options.name` | `string` |
| `options.options?` | `ApplicationCommandOptions`[] |
| `options.slash?` | `boolean` |
| `options.usage?` | `string` |
| `options.customInteractionPreCondition?` | (`interaction`: `CommandInteraction`<`TextableChannel`\>) => `boolean` |
| `options.customPrecondition?` | (`message`: `Message`<`TextableChannel`\>) => `boolean` |

#### Defined in

src/Structures/Command.ts:29

## Properties

### aliases

• `Optional` **aliases**: `any`[]

#### Defined in

src/Structures/Command.ts:14

___

### argsRequired

• `Optional` **argsRequired**: `boolean`

#### Defined in

src/Structures/Command.ts:16

___

### botOwnerOnly

• `Optional` **botOwnerOnly**: `boolean`

#### Defined in

src/Structures/Command.ts:13

___

### client

• `Private` **client**: [`CofoClient`](CofoClient.md)

#### Defined in

src/Structures/Command.ts:5

___

### cooldown

• `Optional` **cooldown**: `number`

#### Defined in

src/Structures/Command.ts:9

___

### cooldownMessage

• `Optional` **cooldownMessage**: `string`

#### Defined in

src/Structures/Command.ts:17

___

### customInteractionPreCondition

• `Optional` **customInteractionPreCondition**: (`interaction`: `CommandInteraction`<`TextableChannel`\>) => `boolean`

#### Type declaration

▸ (`interaction`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `interaction` | `CommandInteraction`<`TextableChannel`\> |

##### Returns

`boolean`

#### Defined in

src/Structures/Command.ts:22

___

### customPrecondition

• `Optional` **customPrecondition**: (`message`: `Message`<`TextableChannel`\>) => `boolean`

#### Type declaration

▸ (`message`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<`TextableChannel`\> |

##### Returns

`boolean`

#### Defined in

src/Structures/Command.ts:21

___

### defaultPermission

• `Optional` **defaultPermission**: `boolean`

#### Defined in

src/Structures/Command.ts:19

___

### deleteCommand

• `Optional` **deleteCommand**: `boolean`

#### Defined in

src/Structures/Command.ts:18

___

### description

• **description**: `undefined` \| `string`

#### Defined in

src/Structures/Command.ts:7

___

### dmOnly

• `Optional` **dmOnly**: `boolean`

#### Defined in

src/Structures/Command.ts:11

___

### guildOnly

• `Optional` **guildOnly**: `boolean`

#### Defined in

src/Structures/Command.ts:10

___

### guildOwneronly

• `Optional` **guildOwneronly**: `boolean`

#### Defined in

src/Structures/Command.ts:12

___

### name

• **name**: `string`

#### Defined in

src/Structures/Command.ts:6

___

### options

• `Optional` **options**: `ApplicationCommandOptions`[]

#### Defined in

src/Structures/Command.ts:8

___

### slash

• `Optional` **slash**: `boolean`

#### Defined in

src/Structures/Command.ts:20

___

### usage

• `Optional` **usage**: `string`

#### Defined in

src/Structures/Command.ts:15
