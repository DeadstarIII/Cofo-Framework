[@cofo/framework](../README.md) / [Exports](../modules.md) / Listener

# Class: Listener<Key\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends keyof `EventListeners` |

## Table of contents

### Constructors

- [constructor](Listener.md#constructor)

### Properties

- [key](Listener.md#key)
- [run](Listener.md#run)

## Constructors

### constructor

• **new Listener**<`Key`\>(`key`, `run`)

Create a new Listener

**`since`** 1.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends keyof `EventListeners` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `run` | (`client`: [`CofoClient`](CofoClient.md), ...`args`: `EventListeners`[`Key`]) => `any` |

#### Defined in

src/Structures/Listener.ts:11

## Properties

### key

• **key**: `Key`

___

### run

• **run**: (`client`: [`CofoClient`](CofoClient.md), ...`args`: `EventListeners`[`Key`]) => `any`

#### Type declaration

▸ (`client`, ...`args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`CofoClient`](CofoClient.md) |
| `...args` | `EventListeners`[`Key`] |

##### Returns

`any`
