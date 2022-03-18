[@cofo/framework](../README.md) / [Exports](../modules.md) / Embed

# Class: Embed

## Table of contents

### Constructors

- [constructor](Embed.md#constructor)

### Properties

- [author](Embed.md#author)
- [color](Embed.md#color)
- [description](Embed.md#description)
- [fields](Embed.md#fields)
- [footer](Embed.md#footer)
- [image](Embed.md#image)
- [thumbnail](Embed.md#thumbnail)
- [timestamp](Embed.md#timestamp)
- [title](Embed.md#title)
- [url](Embed.md#url)

### Methods

- [addField](Embed.md#addfield)
- [addFields](Embed.md#addfields)
- [setAuthor](Embed.md#setauthor)
- [setColor](Embed.md#setcolor)
- [setDescription](Embed.md#setdescription)
- [setFooter](Embed.md#setfooter)
- [setImage](Embed.md#setimage)
- [setThumbnail](Embed.md#setthumbnail)
- [setTimestamp](Embed.md#settimestamp)
- [setTitle](Embed.md#settitle)
- [setURL](Embed.md#seturl)

## Constructors

### constructor

• **new Embed**(`data?`)

Create a new Embed

**`since`** 1.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `EmbedOptions` |

#### Defined in

src/Structures/Embed.ts:24

## Properties

### author

• `Optional` **author**: `EmbedAuthorOptions`

#### Defined in

src/Structures/Embed.ts:17

___

### color

• `Optional` **color**: `number`

#### Defined in

src/Structures/Embed.ts:13

___

### description

• `Optional` **description**: `string`

#### Defined in

src/Structures/Embed.ts:10

___

### fields

• **fields**: `EmbedField`[]

#### Defined in

src/Structures/Embed.ts:18

___

### footer

• `Optional` **footer**: `EmbedFooterOptions`

#### Defined in

src/Structures/Embed.ts:14

___

### image

• `Optional` **image**: `EmbedImageOptions`

#### Defined in

src/Structures/Embed.ts:15

___

### thumbnail

• `Optional` **thumbnail**: `EmbedImageOptions`

#### Defined in

src/Structures/Embed.ts:16

___

### timestamp

• `Optional` **timestamp**: `string` \| `Date`

#### Defined in

src/Structures/Embed.ts:12

___

### title

• `Optional` **title**: `string`

#### Defined in

src/Structures/Embed.ts:9

___

### url

• `Optional` **url**: `string`

#### Defined in

src/Structures/Embed.ts:11

## Methods

### addField

▸ **addField**(`name`, `value`, `inline?`): [`Embed`](Embed.md)

Add a field to embed

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `any`[] |
| `value` | `string` \| `any`[] |
| `inline?` | `boolean` |

#### Returns

[`Embed`](Embed.md)

#### Defined in

src/Structures/Embed.ts:171

___

### addFields

▸ **addFields**(`fields`): [`Embed`](Embed.md)

Add multiple fields to an embed

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `EmbedField`[] |

#### Returns

[`Embed`](Embed.md)

#### Defined in

src/Structures/Embed.ts:186

___

### setAuthor

▸ **setAuthor**(`name`, `url`, `iconURL`): [`Embed`](Embed.md)

Set the embed author

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `any`[] |
| `url` | `undefined` \| `string` |
| `iconURL` | `undefined` \| `string` |

#### Returns

[`Embed`](Embed.md)

#### Defined in

src/Structures/Embed.ts:145

___

### setColor

▸ **setColor**(`color`): [`Embed`](Embed.md)

Set The Embed Color

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` \| `number` |

#### Returns

[`Embed`](Embed.md)

#### Defined in

src/Structures/Embed.ts:63

___

### setDescription

▸ **setDescription**(`description`): [`Embed`](Embed.md)

Set the Embed Description

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

[`Embed`](Embed.md)

#### Defined in

src/Structures/Embed.ts:52

___

### setFooter

▸ **setFooter**(`iconURL`, `text`): [`Embed`](Embed.md)

Set The embed footer

#### Parameters

| Name | Type |
| :------ | :------ |
| `iconURL` | `undefined` \| `string` |
| `text` | `string` \| `any`[] |

#### Returns

[`Embed`](Embed.md)

#### Defined in

src/Structures/Embed.ts:103

___

### setImage

▸ **setImage**(`imageURL`): [`Embed`](Embed.md)

Set The Embed Image

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageURL` | `string` |

#### Returns

[`Embed`](Embed.md)

#### Defined in

src/Structures/Embed.ts:121

___

### setThumbnail

▸ **setThumbnail**(`url`): [`Embed`](Embed.md)

Set the embed thumbnail

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`Embed`](Embed.md)

#### Defined in

src/Structures/Embed.ts:132

___

### setTimestamp

▸ **setTimestamp**(`timestamp?`): [`Embed`](Embed.md)

Set The Embed Timestamp

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `Date` |

#### Returns

[`Embed`](Embed.md)

#### Defined in

src/Structures/Embed.ts:92

___

### setTitle

▸ **setTitle**(`title`): [`Embed`](Embed.md)

Set the Embed Title

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

[`Embed`](Embed.md)

#### Defined in

src/Structures/Embed.ts:41

___

### setURL

▸ **setURL**(`url`): [`Embed`](Embed.md)

Set The Embed URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`Embed`](Embed.md)

#### Defined in

src/Structures/Embed.ts:81
