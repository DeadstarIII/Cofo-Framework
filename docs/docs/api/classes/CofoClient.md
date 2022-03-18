[@cofo/framework](../README.md) / [Exports](../modules.md) / CofoClient

# Class: CofoClient

## Hierarchy

- `Client`

  ↳ **`CofoClient`**

## Table of contents

### Constructors

- [constructor](CofoClient.md#constructor)

### Properties

- [application](CofoClient.md#application)
- [baseDirectory](CofoClient.md#basedirectory)
- [bot](CofoClient.md#bot)
- [channelGuildMap](CofoClient.md#channelguildmap)
- [defaultPrefix](CofoClient.md#defaultprefix)
- [gatewayURL](CofoClient.md#gatewayurl)
- [groupChannels](CofoClient.md#groupchannels)
- [guildShardMap](CofoClient.md#guildshardmap)
- [guilds](CofoClient.md#guilds)
- [handler](CofoClient.md#handler)
- [ignoreBots](CofoClient.md#ignorebots)
- [lastConnect](CofoClient.md#lastconnect)
- [lastReconnectDelay](CofoClient.md#lastreconnectdelay)
- [logger](CofoClient.md#logger)
- [mentionPrefix](CofoClient.md#mentionprefix)
- [notes](CofoClient.md#notes)
- [options](CofoClient.md#options)
- [owners](CofoClient.md#owners)
- [presence](CofoClient.md#presence)
- [privateChannelMap](CofoClient.md#privatechannelmap)
- [privateChannels](CofoClient.md#privatechannels)
- [ready](CofoClient.md#ready)
- [reconnectAttempts](CofoClient.md#reconnectattempts)
- [relationships](CofoClient.md#relationships)
- [requestHandler](CofoClient.md#requesthandler)
- [shards](CofoClient.md#shards)
- [startTime](CofoClient.md#starttime)
- [testMode](CofoClient.md#testmode)
- [threadGuildMap](CofoClient.md#threadguildmap)
- [unavailableGuilds](CofoClient.md#unavailableguilds)
- [uptime](CofoClient.md#uptime)
- [user](CofoClient.md#user)
- [userGuildSettings](CofoClient.md#userguildsettings)
- [userSettings](CofoClient.md#usersettings)
- [users](CofoClient.md#users)
- [voiceConnections](CofoClient.md#voiceconnections)
- [captureRejectionSymbol](CofoClient.md#capturerejectionsymbol)
- [captureRejections](CofoClient.md#capturerejections)
- [defaultMaxListeners](CofoClient.md#defaultmaxlisteners)
- [errorMonitor](CofoClient.md#errormonitor)

### Methods

- [acceptInvite](CofoClient.md#acceptinvite)
- [addGroupRecipient](CofoClient.md#addgrouprecipient)
- [addGuildDiscoverySubcategory](CofoClient.md#addguilddiscoverysubcategory)
- [addGuildMemberRole](CofoClient.md#addguildmemberrole)
- [addListener](CofoClient.md#addlistener)
- [addMessageReaction](CofoClient.md#addmessagereaction)
- [addRelationship](CofoClient.md#addrelationship)
- [addSelfPremiumSubscription](CofoClient.md#addselfpremiumsubscription)
- [banGuildMember](CofoClient.md#banguildmember)
- [bulkEditCommandPermissions](CofoClient.md#bulkeditcommandpermissions)
- [bulkEditCommands](CofoClient.md#bulkeditcommands)
- [bulkEditGuildCommands](CofoClient.md#bulkeditguildcommands)
- [closeVoiceConnection](CofoClient.md#closevoiceconnection)
- [connect](CofoClient.md#connect)
- [createChannel](CofoClient.md#createchannel)
- [createChannelInvite](CofoClient.md#createchannelinvite)
- [createChannelWebhook](CofoClient.md#createchannelwebhook)
- [createCommand](CofoClient.md#createcommand)
- [createGroupChannel](CofoClient.md#creategroupchannel)
- [createGuild](CofoClient.md#createguild)
- [createGuildCommand](CofoClient.md#createguildcommand)
- [createGuildEmoji](CofoClient.md#createguildemoji)
- [createGuildFromTemplate](CofoClient.md#createguildfromtemplate)
- [createGuildSticker](CofoClient.md#createguildsticker)
- [createGuildTemplate](CofoClient.md#createguildtemplate)
- [createInteractionResponse](CofoClient.md#createinteractionresponse)
- [createMessage](CofoClient.md#createmessage)
- [createRole](CofoClient.md#createrole)
- [createStageInstance](CofoClient.md#createstageinstance)
- [createThreadWithMessage](CofoClient.md#createthreadwithmessage)
- [createThreadWithoutMessage](CofoClient.md#createthreadwithoutmessage)
- [crosspostMessage](CofoClient.md#crosspostmessage)
- [deleteChannel](CofoClient.md#deletechannel)
- [deleteChannelPermission](CofoClient.md#deletechannelpermission)
- [deleteCommand](CofoClient.md#deletecommand)
- [deleteGuild](CofoClient.md#deleteguild)
- [deleteGuildCommand](CofoClient.md#deleteguildcommand)
- [deleteGuildDiscoverySubcategory](CofoClient.md#deleteguilddiscoverysubcategory)
- [deleteGuildEmoji](CofoClient.md#deleteguildemoji)
- [deleteGuildIntegration](CofoClient.md#deleteguildintegration)
- [deleteGuildSticker](CofoClient.md#deleteguildsticker)
- [deleteGuildTemplate](CofoClient.md#deleteguildtemplate)
- [deleteInvite](CofoClient.md#deleteinvite)
- [deleteMessage](CofoClient.md#deletemessage)
- [deleteMessages](CofoClient.md#deletemessages)
- [deleteRole](CofoClient.md#deleterole)
- [deleteSelfConnection](CofoClient.md#deleteselfconnection)
- [deleteSelfPremiumSubscription](CofoClient.md#deleteselfpremiumsubscription)
- [deleteStageInstance](CofoClient.md#deletestageinstance)
- [deleteUserNote](CofoClient.md#deleteusernote)
- [deleteWebhook](CofoClient.md#deletewebhook)
- [deleteWebhookMessage](CofoClient.md#deletewebhookmessage)
- [disableSelfMFATOTP](CofoClient.md#disableselfmfatotp)
- [disconnect](CofoClient.md#disconnect)
- [editAFK](CofoClient.md#editafk)
- [editChannel](CofoClient.md#editchannel)
- [editChannelPermission](CofoClient.md#editchannelpermission)
- [editChannelPosition](CofoClient.md#editchannelposition)
- [editCommand](CofoClient.md#editcommand)
- [editCommandPermissions](CofoClient.md#editcommandpermissions)
- [editGuild](CofoClient.md#editguild)
- [editGuildCommand](CofoClient.md#editguildcommand)
- [editGuildDiscovery](CofoClient.md#editguilddiscovery)
- [editGuildEmoji](CofoClient.md#editguildemoji)
- [editGuildIntegration](CofoClient.md#editguildintegration)
- [editGuildMember](CofoClient.md#editguildmember)
- [editGuildSticker](CofoClient.md#editguildsticker)
- [editGuildTemplate](CofoClient.md#editguildtemplate)
- [editGuildVanity](CofoClient.md#editguildvanity)
- [editGuildVoiceState](CofoClient.md#editguildvoicestate)
- [editGuildWelcomeScreen](CofoClient.md#editguildwelcomescreen)
- [editGuildWidget](CofoClient.md#editguildwidget)
- [editMessage](CofoClient.md#editmessage)
- [editNickname](CofoClient.md#editnickname)
- [editRole](CofoClient.md#editrole)
- [editRolePosition](CofoClient.md#editroleposition)
- [editSelf](CofoClient.md#editself)
- [editSelfConnection](CofoClient.md#editselfconnection)
- [editSelfSettings](CofoClient.md#editselfsettings)
- [editStageInstance](CofoClient.md#editstageinstance)
- [editStatus](CofoClient.md#editstatus)
- [editUserNote](CofoClient.md#editusernote)
- [editWebhook](CofoClient.md#editwebhook)
- [editWebhookMessage](CofoClient.md#editwebhookmessage)
- [emit](CofoClient.md#emit)
- [enableSelfMFATOTP](CofoClient.md#enableselfmfatotp)
- [eventNames](CofoClient.md#eventnames)
- [executeSlackWebhook](CofoClient.md#executeslackwebhook)
- [executeWebhook](CofoClient.md#executewebhook)
- [fetchPrefix](CofoClient.md#fetchprefix)
- [followChannel](CofoClient.md#followchannel)
- [getActiveGuildThreads](CofoClient.md#getactiveguildthreads)
- [getActiveThreads](CofoClient.md#getactivethreads)
- [getArchivedThreads](CofoClient.md#getarchivedthreads)
- [getBotGateway](CofoClient.md#getbotgateway)
- [getChannel](CofoClient.md#getchannel)
- [getChannelInvites](CofoClient.md#getchannelinvites)
- [getChannelWebhooks](CofoClient.md#getchannelwebhooks)
- [getCommand](CofoClient.md#getcommand)
- [getCommandPermissions](CofoClient.md#getcommandpermissions)
- [getCommands](CofoClient.md#getcommands)
- [getDMChannel](CofoClient.md#getdmchannel)
- [getDiscoveryCategories](CofoClient.md#getdiscoverycategories)
- [getEmojiGuild](CofoClient.md#getemojiguild)
- [getGateway](CofoClient.md#getgateway)
- [getGuildAuditLog](CofoClient.md#getguildauditlog)
- [getGuildAuditLogs](CofoClient.md#getguildauditlogs)
- [getGuildBan](CofoClient.md#getguildban)
- [getGuildBans](CofoClient.md#getguildbans)
- [getGuildCommand](CofoClient.md#getguildcommand)
- [getGuildCommandPermissions](CofoClient.md#getguildcommandpermissions)
- [getGuildCommands](CofoClient.md#getguildcommands)
- [getGuildDiscovery](CofoClient.md#getguilddiscovery)
- [getGuildEmbed](CofoClient.md#getguildembed)
- [getGuildIntegrations](CofoClient.md#getguildintegrations)
- [getGuildInvites](CofoClient.md#getguildinvites)
- [getGuildPreview](CofoClient.md#getguildpreview)
- [getGuildTemplate](CofoClient.md#getguildtemplate)
- [getGuildTemplates](CofoClient.md#getguildtemplates)
- [getGuildVanity](CofoClient.md#getguildvanity)
- [getGuildWebhooks](CofoClient.md#getguildwebhooks)
- [getGuildWelcomeScreen](CofoClient.md#getguildwelcomescreen)
- [getGuildWidget](CofoClient.md#getguildwidget)
- [getGuildWidgetSettings](CofoClient.md#getguildwidgetsettings)
- [getInvite](CofoClient.md#getinvite)
- [getJoinedPrivateArchivedThreads](CofoClient.md#getjoinedprivatearchivedthreads)
- [getMaxListeners](CofoClient.md#getmaxlisteners)
- [getMessage](CofoClient.md#getmessage)
- [getMessageReaction](CofoClient.md#getmessagereaction)
- [getMessages](CofoClient.md#getmessages)
- [getNitroStickerPacks](CofoClient.md#getnitrostickerpacks)
- [getOAuthApplication](CofoClient.md#getoauthapplication)
- [getPins](CofoClient.md#getpins)
- [getPruneCount](CofoClient.md#getprunecount)
- [getRESTChannel](CofoClient.md#getrestchannel)
- [getRESTGuild](CofoClient.md#getrestguild)
- [getRESTGuildChannels](CofoClient.md#getrestguildchannels)
- [getRESTGuildEmoji](CofoClient.md#getrestguildemoji)
- [getRESTGuildEmojis](CofoClient.md#getrestguildemojis)
- [getRESTGuildMember](CofoClient.md#getrestguildmember)
- [getRESTGuildMembers](CofoClient.md#getrestguildmembers)
- [getRESTGuildRoles](CofoClient.md#getrestguildroles)
- [getRESTGuildSticker](CofoClient.md#getrestguildsticker)
- [getRESTGuildStickers](CofoClient.md#getrestguildstickers)
- [getRESTGuilds](CofoClient.md#getrestguilds)
- [getRESTSticker](CofoClient.md#getreststicker)
- [getRESTUser](CofoClient.md#getrestuser)
- [getSelf](CofoClient.md#getself)
- [getSelfBilling](CofoClient.md#getselfbilling)
- [getSelfConnections](CofoClient.md#getselfconnections)
- [getSelfMFACodes](CofoClient.md#getselfmfacodes)
- [getSelfPayments](CofoClient.md#getselfpayments)
- [getSelfSettings](CofoClient.md#getselfsettings)
- [getStageInstance](CofoClient.md#getstageinstance)
- [getThreadMembers](CofoClient.md#getthreadmembers)
- [getUserProfile](CofoClient.md#getuserprofile)
- [getVoiceRegions](CofoClient.md#getvoiceregions)
- [getWebhook](CofoClient.md#getwebhook)
- [getWebhookMessage](CofoClient.md#getwebhookmessage)
- [joinThread](CofoClient.md#jointhread)
- [joinVoiceChannel](CofoClient.md#joinvoicechannel)
- [kickGuildMember](CofoClient.md#kickguildmember)
- [leaveGuild](CofoClient.md#leaveguild)
- [leaveThread](CofoClient.md#leavethread)
- [leaveVoiceChannel](CofoClient.md#leavevoicechannel)
- [listenerCount](CofoClient.md#listenercount)
- [listeners](CofoClient.md#listeners)
- [off](CofoClient.md#off)
- [on](CofoClient.md#on)
- [once](CofoClient.md#once)
- [pinMessage](CofoClient.md#pinmessage)
- [prependListener](CofoClient.md#prependlistener)
- [prependOnceListener](CofoClient.md#prependoncelistener)
- [pruneMembers](CofoClient.md#prunemembers)
- [purgeChannel](CofoClient.md#purgechannel)
- [rawListeners](CofoClient.md#rawlisteners)
- [removeAllListeners](CofoClient.md#removealllisteners)
- [removeGroupRecipient](CofoClient.md#removegrouprecipient)
- [removeGuildMemberRole](CofoClient.md#removeguildmemberrole)
- [removeListener](CofoClient.md#removelistener)
- [removeMessageReaction](CofoClient.md#removemessagereaction)
- [removeMessageReactionEmoji](CofoClient.md#removemessagereactionemoji)
- [removeMessageReactions](CofoClient.md#removemessagereactions)
- [removeRelationship](CofoClient.md#removerelationship)
- [searchChannelMessages](CofoClient.md#searchchannelmessages)
- [searchGuildMembers](CofoClient.md#searchguildmembers)
- [searchGuildMessages](CofoClient.md#searchguildmessages)
- [sendChannelTyping](CofoClient.md#sendchanneltyping)
- [setMaxListeners](CofoClient.md#setmaxlisteners)
- [syncGuildIntegration](CofoClient.md#syncguildintegration)
- [syncGuildTemplate](CofoClient.md#syncguildtemplate)
- [toString](CofoClient.md#tostring)
- [unbanGuildMember](CofoClient.md#unbanguildmember)
- [unpinMessage](CofoClient.md#unpinmessage)
- [validateDiscoverySearchTerm](CofoClient.md#validatediscoverysearchterm)
- [getEventListeners](CofoClient.md#geteventlisteners)
- [listenerCount](CofoClient.md#listenercount)
- [on](CofoClient.md#on)
- [once](CofoClient.md#once)
- [setMaxListeners](CofoClient.md#setmaxlisteners)

## Constructors

### constructor

• **new CofoClient**(`token`, `frameworkOptions`, `options?`)

Create a new Bot

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `frameworkOptions` | `frameworkOptions` |
| `options?` | `ClientOptions` |

#### Overrides

Eris.Client.constructor

#### Defined in

src/CofoClient.ts:22

## Properties

### application

• `Optional` **application**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `flags` | `number` |
| `id` | `string` |

#### Inherited from

Eris.Client.application

#### Defined in

node_modules/eris/index.d.ts:2074

___

### baseDirectory

• **baseDirectory**: `string`

#### Defined in

src/CofoClient.ts:13

___

### bot

• **bot**: `boolean`

#### Inherited from

Eris.Client.bot

#### Defined in

node_modules/eris/index.d.ts:2075

___

### channelGuildMap

• **channelGuildMap**: `Object`

#### Index signature

▪ [s: `string`]: `string`

#### Inherited from

Eris.Client.channelGuildMap

#### Defined in

node_modules/eris/index.d.ts:2076

___

### defaultPrefix

• **defaultPrefix**: `string`

#### Defined in

src/CofoClient.ts:10

___

### gatewayURL

• `Optional` **gatewayURL**: `string`

#### Inherited from

Eris.Client.gatewayURL

#### Defined in

node_modules/eris/index.d.ts:2077

___

### groupChannels

• **groupChannels**: `Collection`<`GroupChannel`\>

#### Inherited from

Eris.Client.groupChannels

#### Defined in

node_modules/eris/index.d.ts:2078

___

### guildShardMap

• **guildShardMap**: `Object`

#### Index signature

▪ [s: `string`]: `number`

#### Inherited from

Eris.Client.guildShardMap

#### Defined in

node_modules/eris/index.d.ts:2080

___

### guilds

• **guilds**: `Collection`<`Guild`\>

#### Inherited from

Eris.Client.guilds

#### Defined in

node_modules/eris/index.d.ts:2079

___

### handler

• **handler**: `CofoHandler`

#### Defined in

src/CofoClient.ts:9

___

### ignoreBots

• **ignoreBots**: `boolean`

#### Defined in

src/CofoClient.ts:12

___

### lastConnect

• **lastConnect**: `number`

#### Inherited from

Eris.Client.lastConnect

#### Defined in

node_modules/eris/index.d.ts:2081

___

### lastReconnectDelay

• **lastReconnectDelay**: `number`

#### Inherited from

Eris.Client.lastReconnectDelay

#### Defined in

node_modules/eris/index.d.ts:2082

___

### logger

• **logger**: `Logger`

#### Defined in

src/CofoClient.ts:8

___

### mentionPrefix

• **mentionPrefix**: `boolean`

#### Defined in

src/CofoClient.ts:11

___

### notes

• **notes**: `Object`

#### Index signature

▪ [s: `string`]: `string`

#### Inherited from

Eris.Client.notes

#### Defined in

node_modules/eris/index.d.ts:2083

___

### options

• **options**: `ClientOptions`

#### Inherited from

Eris.Client.options

#### Defined in

node_modules/eris/index.d.ts:2084

___

### owners

• **owners**: `any`[]

#### Defined in

src/CofoClient.ts:14

___

### presence

• **presence**: `ClientPresence`

#### Inherited from

Eris.Client.presence

#### Defined in

node_modules/eris/index.d.ts:2085

___

### privateChannelMap

• **privateChannelMap**: `Object`

#### Index signature

▪ [s: `string`]: `string`

#### Inherited from

Eris.Client.privateChannelMap

#### Defined in

node_modules/eris/index.d.ts:2086

___

### privateChannels

• **privateChannels**: `Collection`<`PrivateChannel`\>

#### Inherited from

Eris.Client.privateChannels

#### Defined in

node_modules/eris/index.d.ts:2087

___

### ready

• **ready**: `boolean`

#### Inherited from

Eris.Client.ready

#### Defined in

node_modules/eris/index.d.ts:2088

___

### reconnectAttempts

• **reconnectAttempts**: `number`

#### Inherited from

Eris.Client.reconnectAttempts

#### Defined in

node_modules/eris/index.d.ts:2089

___

### relationships

• **relationships**: `Collection`<`Relationship`\>

#### Inherited from

Eris.Client.relationships

#### Defined in

node_modules/eris/index.d.ts:2090

___

### requestHandler

• **requestHandler**: `RequestHandler`

#### Inherited from

Eris.Client.requestHandler

#### Defined in

node_modules/eris/index.d.ts:2091

___

### shards

• **shards**: `ShardManager`

#### Inherited from

Eris.Client.shards

#### Defined in

node_modules/eris/index.d.ts:2092

___

### startTime

• **startTime**: `number`

#### Inherited from

Eris.Client.startTime

#### Defined in

node_modules/eris/index.d.ts:2093

___

### testMode

• **testMode**: `undefined` \| { `enabled`: `boolean` ; `guildID`: `string`  }

#### Defined in

src/CofoClient.ts:15

___

### threadGuildMap

• **threadGuildMap**: `Object`

#### Index signature

▪ [s: `string`]: `string`

#### Inherited from

Eris.Client.threadGuildMap

#### Defined in

node_modules/eris/index.d.ts:2094

___

### unavailableGuilds

• **unavailableGuilds**: `Collection`<`UnavailableGuild`\>

#### Inherited from

Eris.Client.unavailableGuilds

#### Defined in

node_modules/eris/index.d.ts:2095

___

### uptime

• **uptime**: `number`

#### Inherited from

Eris.Client.uptime

#### Defined in

node_modules/eris/index.d.ts:2096

___

### user

• **user**: `ExtendedUser`

#### Inherited from

Eris.Client.user

#### Defined in

node_modules/eris/index.d.ts:2097

___

### userGuildSettings

• **userGuildSettings**: `Object`

#### Index signature

▪ [s: `string`]: `GuildSettings`

#### Inherited from

Eris.Client.userGuildSettings

#### Defined in

node_modules/eris/index.d.ts:2098

___

### userSettings

• **userSettings**: `UserSettings`

#### Inherited from

Eris.Client.userSettings

#### Defined in

node_modules/eris/index.d.ts:2100

___

### users

• **users**: `Collection`<`User`\>

#### Inherited from

Eris.Client.users

#### Defined in

node_modules/eris/index.d.ts:2099

___

### voiceConnections

• **voiceConnections**: `VoiceConnectionManager`<`VoiceConnection`\>

#### Inherited from

Eris.Client.voiceConnections

#### Defined in

node_modules/eris/index.d.ts:2101

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](CofoClient.md#capturerejectionsymbol)

#### Inherited from

Eris.Client.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:301

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

Eris.Client.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:306

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

Eris.Client.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:307

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](CofoClient.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

Eris.Client.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:300

## Methods

### acceptInvite

▸ **acceptInvite**(`inviteID`): `Promise`<`Invite`<``"withoutCount"``, `InviteChannel`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inviteID` | `string` |

#### Returns

`Promise`<`Invite`<``"withoutCount"``, `InviteChannel`\>\>

#### Inherited from

Eris.Client.acceptInvite

#### Defined in

node_modules/eris/index.d.ts:2103

___

### addGroupRecipient

▸ **addGroupRecipient**(`groupID`, `userID`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupID` | `string` |
| `userID` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.addGroupRecipient

#### Defined in

node_modules/eris/index.d.ts:2104

___

### addGuildDiscoverySubcategory

▸ **addGuildDiscoverySubcategory**(`guildID`, `categoryID`, `reason?`): `Promise`<`DiscoverySubcategoryResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `categoryID` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`DiscoverySubcategoryResponse`\>

#### Inherited from

Eris.Client.addGuildDiscoverySubcategory

#### Defined in

node_modules/eris/index.d.ts:2105

___

### addGuildMemberRole

▸ **addGuildMemberRole**(`guildID`, `memberID`, `roleID`, `reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `memberID` | `string` |
| `roleID` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.addGuildMemberRole

#### Defined in

node_modules/eris/index.d.ts:2106

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`CofoClient`](CofoClient.md)

Alias for `emitter.on(eventName, listener)`.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CofoClient`](CofoClient.md)

#### Inherited from

Eris.Client.addListener

#### Defined in

node_modules/@types/node/events.d.ts:327

___

### addMessageReaction

▸ **addMessageReaction**(`channelID`, `messageID`, `reaction`): `Promise`<`void`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `messageID` | `string` |
| `reaction` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.addMessageReaction

#### Defined in

node_modules/eris/index.d.ts:2107

▸ **addMessageReaction**(`channelID`, `messageID`, `reaction`, `userID`): `Promise`<`void`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `messageID` | `string` |
| `reaction` | `string` |
| `userID` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.addMessageReaction

#### Defined in

node_modules/eris/index.d.ts:2109

___

### addRelationship

▸ **addRelationship**(`userID`, `block?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userID` | `string` |
| `block?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.addRelationship

#### Defined in

node_modules/eris/index.d.ts:2110

___

### addSelfPremiumSubscription

▸ **addSelfPremiumSubscription**(`token`, `plan`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `plan` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.addSelfPremiumSubscription

#### Defined in

node_modules/eris/index.d.ts:2111

___

### banGuildMember

▸ **banGuildMember**(`guildID`, `userID`, `deleteMessageDays?`, `reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `userID` | `string` |
| `deleteMessageDays?` | `number` |
| `reason?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.banGuildMember

#### Defined in

node_modules/eris/index.d.ts:2112

___

### bulkEditCommandPermissions

▸ **bulkEditCommandPermissions**(`guildID`, `permissions`): `Promise`<`GuildApplicationCommandPermissions`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `permissions` | { `id`: `string` ; `permissions`: `ApplicationCommandPermissions`[]  }[] |

#### Returns

`Promise`<`GuildApplicationCommandPermissions`[]\>

#### Inherited from

Eris.Client.bulkEditCommandPermissions

#### Defined in

node_modules/eris/index.d.ts:2113

___

### bulkEditCommands

▸ **bulkEditCommands**(`commands`): `Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | `ApplicationCommandStructure`[] |

#### Returns

`Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>[]\>

#### Inherited from

Eris.Client.bulkEditCommands

#### Defined in

node_modules/eris/index.d.ts:2114

___

### bulkEditGuildCommands

▸ **bulkEditGuildCommands**(`guildID`, `commands`): `Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `commands` | `ApplicationCommandStructure`[] |

#### Returns

`Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>[]\>

#### Inherited from

Eris.Client.bulkEditGuildCommands

#### Defined in

node_modules/eris/index.d.ts:2115

___

### closeVoiceConnection

▸ **closeVoiceConnection**(`guildID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`void`

#### Inherited from

Eris.Client.closeVoiceConnection

#### Defined in

node_modules/eris/index.d.ts:2116

___

### connect

▸ **connect**(): `any`

#### Returns

`any`

#### Overrides

Eris.Client.connect

#### Defined in

src/CofoClient.ts:38

___

### createChannel

▸ **createChannel**(`guildID`, `name`): `Promise`<`TextChannel`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `name` | `string` |

#### Returns

`Promise`<`TextChannel`\>

#### Inherited from

Eris.Client.createChannel

#### Defined in

node_modules/eris/index.d.ts:2118

▸ **createChannel**(`guildID`, `name`, `type`, `options?`): `Promise`<`TextChannel`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `name` | `string` |
| `type` | ``0`` |
| `options?` | `CreateChannelOptions` |

#### Returns

`Promise`<`TextChannel`\>

#### Inherited from

Eris.Client.createChannel

#### Defined in

node_modules/eris/index.d.ts:2119

▸ **createChannel**(`guildID`, `name`, `type`, `options?`): `Promise`<`VoiceChannel`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `name` | `string` |
| `type` | ``2`` |
| `options?` | `CreateChannelOptions` |

#### Returns

`Promise`<`VoiceChannel`\>

#### Inherited from

Eris.Client.createChannel

#### Defined in

node_modules/eris/index.d.ts:2125

▸ **createChannel**(`guildID`, `name`, `type`, `options?`): `Promise`<`CategoryChannel`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `name` | `string` |
| `type` | ``4`` |
| `options?` | `CreateChannelOptions` |

#### Returns

`Promise`<`CategoryChannel`\>

#### Inherited from

Eris.Client.createChannel

#### Defined in

node_modules/eris/index.d.ts:2131

▸ **createChannel**(`guildID`, `name`, `type`, `options?`): `Promise`<`NewsChannel`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `name` | `string` |
| `type` | ``5`` |
| `options?` | `CreateChannelOptions` |

#### Returns

`Promise`<`NewsChannel`\>

#### Inherited from

Eris.Client.createChannel

#### Defined in

node_modules/eris/index.d.ts:2137

▸ **createChannel**(`guildID`, `name`, `type`, `options?`): `Promise`<`StoreChannel`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `name` | `string` |
| `type` | ``6`` |
| `options?` | `CreateChannelOptions` |

#### Returns

`Promise`<`StoreChannel`\>

#### Inherited from

Eris.Client.createChannel

#### Defined in

node_modules/eris/index.d.ts:2143

▸ **createChannel**(`guildID`, `name`, `type`, `options?`): `Promise`<`StageChannel`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `name` | `string` |
| `type` | ``13`` |
| `options?` | `CreateChannelOptions` |

#### Returns

`Promise`<`StageChannel`\>

#### Inherited from

Eris.Client.createChannel

#### Defined in

node_modules/eris/index.d.ts:2149

▸ **createChannel**(`guildID`, `name`, `type?`, `options?`): `Promise`<`unknown`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `name` | `string` |
| `type?` | `number` |
| `options?` | `CreateChannelOptions` |

#### Returns

`Promise`<`unknown`\>

#### Inherited from

Eris.Client.createChannel

#### Defined in

node_modules/eris/index.d.ts:2155

▸ **createChannel**(`guildID`, `name`, `type`, `reason?`, `options?`): `Promise`<`TextChannel`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `name` | `string` |
| `type` | ``0`` |
| `reason?` | `string` |
| `options?` | `string` \| `CreateChannelOptions` |

#### Returns

`Promise`<`TextChannel`\>

#### Inherited from

Eris.Client.createChannel

#### Defined in

node_modules/eris/index.d.ts:2162

▸ **createChannel**(`guildID`, `name`, `type`, `reason?`, `options?`): `Promise`<`VoiceChannel`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `name` | `string` |
| `type` | ``2`` |
| `reason?` | `string` |
| `options?` | `string` \| `CreateChannelOptions` |

#### Returns

`Promise`<`VoiceChannel`\>

#### Inherited from

Eris.Client.createChannel

#### Defined in

node_modules/eris/index.d.ts:2170

▸ **createChannel**(`guildID`, `name`, `type`, `reason?`, `options?`): `Promise`<`CategoryChannel`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `name` | `string` |
| `type` | ``4`` |
| `reason?` | `string` |
| `options?` | `string` \| `CreateChannelOptions` |

#### Returns

`Promise`<`CategoryChannel`\>

#### Inherited from

Eris.Client.createChannel

#### Defined in

node_modules/eris/index.d.ts:2178

▸ **createChannel**(`guildID`, `name`, `type`, `reason?`, `options?`): `Promise`<`NewsChannel`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `name` | `string` |
| `type` | ``5`` |
| `reason?` | `string` |
| `options?` | `string` \| `CreateChannelOptions` |

#### Returns

`Promise`<`NewsChannel`\>

#### Inherited from

Eris.Client.createChannel

#### Defined in

node_modules/eris/index.d.ts:2186

▸ **createChannel**(`guildID`, `name`, `type`, `reason?`, `options?`): `Promise`<`StoreChannel`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `name` | `string` |
| `type` | ``6`` |
| `reason?` | `string` |
| `options?` | `string` \| `CreateChannelOptions` |

#### Returns

`Promise`<`StoreChannel`\>

#### Inherited from

Eris.Client.createChannel

#### Defined in

node_modules/eris/index.d.ts:2194

▸ **createChannel**(`guildID`, `name`, `type`, `reason?`, `options?`): `Promise`<`StageChannel`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `name` | `string` |
| `type` | ``13`` |
| `reason?` | `string` |
| `options?` | `string` \| `CreateChannelOptions` |

#### Returns

`Promise`<`StageChannel`\>

#### Inherited from

Eris.Client.createChannel

#### Defined in

node_modules/eris/index.d.ts:2202

▸ **createChannel**(`guildID`, `name`, `type?`, `reason?`, `options?`): `Promise`<`unknown`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `name` | `string` |
| `type?` | `number` |
| `reason?` | `string` |
| `options?` | `string` \| `CreateChannelOptions` |

#### Returns

`Promise`<`unknown`\>

#### Inherited from

Eris.Client.createChannel

#### Defined in

node_modules/eris/index.d.ts:2210

___

### createChannelInvite

▸ **createChannelInvite**(`channelID`, `options?`, `reason?`): `Promise`<`Invite`<``"withoutCount"``, `InviteChannel`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `options?` | `CreateChannelInviteOptions` |
| `reason?` | `string` |

#### Returns

`Promise`<`Invite`<``"withoutCount"``, `InviteChannel`\>\>

#### Inherited from

Eris.Client.createChannelInvite

#### Defined in

node_modules/eris/index.d.ts:2217

___

### createChannelWebhook

▸ **createChannelWebhook**(`channelID`, `options`, `reason?`): `Promise`<`Webhook`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `options` | `Object` |
| `options.avatar?` | ``null`` \| `string` |
| `options.name` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`Webhook`\>

#### Inherited from

Eris.Client.createChannelWebhook

#### Defined in

node_modules/eris/index.d.ts:2222

___

### createCommand

▸ **createCommand**(`command`): `Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `ApplicationCommandStructure` |

#### Returns

`Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>\>

#### Inherited from

Eris.Client.createCommand

#### Defined in

node_modules/eris/index.d.ts:2227

___

### createGroupChannel

▸ **createGroupChannel**(`userIDs`): `Promise`<`GroupChannel`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userIDs` | `string`[] |

#### Returns

`Promise`<`GroupChannel`\>

#### Inherited from

Eris.Client.createGroupChannel

#### Defined in

node_modules/eris/index.d.ts:2228

___

### createGuild

▸ **createGuild**(`name`, `options?`): `Promise`<`Guild`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | `CreateGuildOptions` |

#### Returns

`Promise`<`Guild`\>

#### Inherited from

Eris.Client.createGuild

#### Defined in

node_modules/eris/index.d.ts:2229

___

### createGuildCommand

▸ **createGuildCommand**(`guildID`, `command`): `Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `command` | `ApplicationCommandStructure` |

#### Returns

`Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>\>

#### Inherited from

Eris.Client.createGuildCommand

#### Defined in

node_modules/eris/index.d.ts:2230

___

### createGuildEmoji

▸ **createGuildEmoji**(`guildID`, `options`, `reason?`): `Promise`<`Emoji`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `options` | `EmojiOptions` |
| `reason?` | `string` |

#### Returns

`Promise`<`Emoji`\>

#### Inherited from

Eris.Client.createGuildEmoji

#### Defined in

node_modules/eris/index.d.ts:2231

___

### createGuildFromTemplate

▸ **createGuildFromTemplate**(`code`, `name`, `icon?`): `Promise`<`Guild`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `name` | `string` |
| `icon?` | `string` |

#### Returns

`Promise`<`Guild`\>

#### Inherited from

Eris.Client.createGuildFromTemplate

#### Defined in

node_modules/eris/index.d.ts:2232

___

### createGuildSticker

▸ **createGuildSticker**(`guildID`, `options`, `reason?`): `Promise`<`Sticker`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `options` | `CreateStickerOptions` |
| `reason?` | `string` |

#### Returns

`Promise`<`Sticker`\>

#### Inherited from

Eris.Client.createGuildSticker

#### Defined in

node_modules/eris/index.d.ts:2233

___

### createGuildTemplate

▸ **createGuildTemplate**(`guildID`, `name`, `description?`): `Promise`<`GuildTemplate`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `name` | `string` |
| `description?` | ``null`` \| `string` |

#### Returns

`Promise`<`GuildTemplate`\>

#### Inherited from

Eris.Client.createGuildTemplate

#### Defined in

node_modules/eris/index.d.ts:2234

___

### createInteractionResponse

▸ **createInteractionResponse**(`interactionID`, `interactionToken`, `options`, `file?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interactionID` | `string` |
| `interactionToken` | `string` |
| `options` | `InteractionOptions` |
| `file?` | `FileContent` \| `FileContent`[] |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.createInteractionResponse

#### Defined in

node_modules/eris/index.d.ts:2235

___

### createMessage

▸ **createMessage**(`channelID`, `content`, `file?`): `Promise`<`Message`<`TextableChannel`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `content` | `MessageContent` |
| `file?` | `FileContent` \| `FileContent`[] |

#### Returns

`Promise`<`Message`<`TextableChannel`\>\>

#### Inherited from

Eris.Client.createMessage

#### Defined in

node_modules/eris/index.d.ts:2236

___

### createRole

▸ **createRole**(`guildID`, `options?`, `reason?`): `Promise`<`Role`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `options?` | `RoleOptions` \| `Role` |
| `reason?` | `string` |

#### Returns

`Promise`<`Role`\>

#### Inherited from

Eris.Client.createRole

#### Defined in

node_modules/eris/index.d.ts:2237

___

### createStageInstance

▸ **createStageInstance**(`channelID`, `options`): `Promise`<`StageInstance`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `options` | `StageInstanceOptions` |

#### Returns

`Promise`<`StageInstance`\>

#### Inherited from

Eris.Client.createStageInstance

#### Defined in

node_modules/eris/index.d.ts:2238

___

### createThreadWithMessage

▸ **createThreadWithMessage**(`channelID`, `messageID`, `options`): `Promise`<`NewsThreadChannel` \| `PublicThreadChannel`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `messageID` | `string` |
| `options` | `CreateThreadOptions` |

#### Returns

`Promise`<`NewsThreadChannel` \| `PublicThreadChannel`\>

#### Inherited from

Eris.Client.createThreadWithMessage

#### Defined in

node_modules/eris/index.d.ts:2239

___

### createThreadWithoutMessage

▸ **createThreadWithoutMessage**(`channelID`, `options`): `Promise`<`PrivateThreadChannel`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `options` | `CreateThreadWithoutMessageOptions`<``10`` \| ``12`` \| ``11``\> |

#### Returns

`Promise`<`PrivateThreadChannel`\>

#### Inherited from

Eris.Client.createThreadWithoutMessage

#### Defined in

node_modules/eris/index.d.ts:2240

___

### crosspostMessage

▸ **crosspostMessage**(`channelID`, `messageID`): `Promise`<`Message`<`TextableChannel`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `messageID` | `string` |

#### Returns

`Promise`<`Message`<`TextableChannel`\>\>

#### Inherited from

Eris.Client.crosspostMessage

#### Defined in

node_modules/eris/index.d.ts:2241

___

### deleteChannel

▸ **deleteChannel**(`channelID`, `reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteChannel

#### Defined in

node_modules/eris/index.d.ts:2242

___

### deleteChannelPermission

▸ **deleteChannelPermission**(`channelID`, `overwriteID`, `reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `overwriteID` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteChannelPermission

#### Defined in

node_modules/eris/index.d.ts:2243

___

### deleteCommand

▸ **deleteCommand**(`commandID`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commandID` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteCommand

#### Defined in

node_modules/eris/index.d.ts:2244

___

### deleteGuild

▸ **deleteGuild**(`guildID`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteGuild

#### Defined in

node_modules/eris/index.d.ts:2245

___

### deleteGuildCommand

▸ **deleteGuildCommand**(`guildID`, `commandID`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `commandID` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteGuildCommand

#### Defined in

node_modules/eris/index.d.ts:2246

___

### deleteGuildDiscoverySubcategory

▸ **deleteGuildDiscoverySubcategory**(`guildID`, `categoryID`, `reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `categoryID` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteGuildDiscoverySubcategory

#### Defined in

node_modules/eris/index.d.ts:2247

___

### deleteGuildEmoji

▸ **deleteGuildEmoji**(`guildID`, `emojiID`, `reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `emojiID` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteGuildEmoji

#### Defined in

node_modules/eris/index.d.ts:2248

___

### deleteGuildIntegration

▸ **deleteGuildIntegration**(`guildID`, `integrationID`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `integrationID` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteGuildIntegration

#### Defined in

node_modules/eris/index.d.ts:2249

___

### deleteGuildSticker

▸ **deleteGuildSticker**(`guildID`, `stickerID`, `reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `stickerID` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteGuildSticker

#### Defined in

node_modules/eris/index.d.ts:2250

___

### deleteGuildTemplate

▸ **deleteGuildTemplate**(`guildID`, `code`): `Promise`<`GuildTemplate`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `code` | `string` |

#### Returns

`Promise`<`GuildTemplate`\>

#### Inherited from

Eris.Client.deleteGuildTemplate

#### Defined in

node_modules/eris/index.d.ts:2251

___

### deleteInvite

▸ **deleteInvite**(`inviteID`, `reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inviteID` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteInvite

#### Defined in

node_modules/eris/index.d.ts:2252

___

### deleteMessage

▸ **deleteMessage**(`channelID`, `messageID`, `reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `messageID` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteMessage

#### Defined in

node_modules/eris/index.d.ts:2253

___

### deleteMessages

▸ **deleteMessages**(`channelID`, `messageIDs`, `reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `messageIDs` | `string`[] |
| `reason?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteMessages

#### Defined in

node_modules/eris/index.d.ts:2254

___

### deleteRole

▸ **deleteRole**(`guildID`, `roleID`, `reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `roleID` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteRole

#### Defined in

node_modules/eris/index.d.ts:2255

___

### deleteSelfConnection

▸ **deleteSelfConnection**(`platform`, `id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `platform` | `string` |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteSelfConnection

#### Defined in

node_modules/eris/index.d.ts:2256

___

### deleteSelfPremiumSubscription

▸ **deleteSelfPremiumSubscription**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteSelfPremiumSubscription

#### Defined in

node_modules/eris/index.d.ts:2257

___

### deleteStageInstance

▸ **deleteStageInstance**(`channelID`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteStageInstance

#### Defined in

node_modules/eris/index.d.ts:2258

___

### deleteUserNote

▸ **deleteUserNote**(`userID`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userID` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteUserNote

#### Defined in

node_modules/eris/index.d.ts:2259

___

### deleteWebhook

▸ **deleteWebhook**(`webhookID`, `token?`, `reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `webhookID` | `string` |
| `token?` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteWebhook

#### Defined in

node_modules/eris/index.d.ts:2260

___

### deleteWebhookMessage

▸ **deleteWebhookMessage**(`webhookID`, `token`, `messageID`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `webhookID` | `string` |
| `token` | `string` |
| `messageID` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.deleteWebhookMessage

#### Defined in

node_modules/eris/index.d.ts:2261

___

### disableSelfMFATOTP

▸ **disableSelfMFATOTP**(`code`): `Promise`<{ `token`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`Promise`<{ `token`: `string`  }\>

#### Inherited from

Eris.Client.disableSelfMFATOTP

#### Defined in

node_modules/eris/index.d.ts:2262

___

### disconnect

▸ **disconnect**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.reconnect?` | `boolean` \| ``"auto"`` |

#### Returns

`void`

#### Inherited from

Eris.Client.disconnect

#### Defined in

node_modules/eris/index.d.ts:2263

___

### editAFK

▸ **editAFK**(`afk`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `afk` | `boolean` |

#### Returns

`void`

#### Inherited from

Eris.Client.editAFK

#### Defined in

node_modules/eris/index.d.ts:2264

___

### editChannel

▸ **editChannel**(`channelID`, `options`, `reason?`): `Promise`<`GroupChannel` \| `AnyGuildChannel`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `options` | `EditChannelOptions` |
| `reason?` | `string` |

#### Returns

`Promise`<`GroupChannel` \| `AnyGuildChannel`\>

#### Inherited from

Eris.Client.editChannel

#### Defined in

node_modules/eris/index.d.ts:2265

___

### editChannelPermission

▸ **editChannelPermission**(`channelID`, `overwriteID`, `allow`, `deny`, `type`, `reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `overwriteID` | `string` |
| `allow` | `number` \| `bigint` |
| `deny` | `number` \| `bigint` |
| `type` | `PermissionType` |
| `reason?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.editChannelPermission

#### Defined in

node_modules/eris/index.d.ts:2270

___

### editChannelPosition

▸ **editChannelPosition**(`channelID`, `position`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `position` | `number` |
| `options?` | `EditChannelPositionOptions` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.editChannelPosition

#### Defined in

node_modules/eris/index.d.ts:2278

___

### editCommand

▸ **editCommand**(`commandID`, `command`): `Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commandID` | `string` |
| `command` | `ApplicationCommandStructure` |

#### Returns

`Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>\>

#### Inherited from

Eris.Client.editCommand

#### Defined in

node_modules/eris/index.d.ts:2279

___

### editCommandPermissions

▸ **editCommandPermissions**(`guildID`, `commandID`, `permissions`): `Promise`<`GuildApplicationCommandPermissions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `commandID` | `string` |
| `permissions` | `ApplicationCommandPermissions`[] |

#### Returns

`Promise`<`GuildApplicationCommandPermissions`\>

#### Inherited from

Eris.Client.editCommandPermissions

#### Defined in

node_modules/eris/index.d.ts:2280

___

### editGuild

▸ **editGuild**(`guildID`, `options`, `reason?`): `Promise`<`Guild`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `options` | `GuildOptions` |
| `reason?` | `string` |

#### Returns

`Promise`<`Guild`\>

#### Inherited from

Eris.Client.editGuild

#### Defined in

node_modules/eris/index.d.ts:2281

___

### editGuildCommand

▸ **editGuildCommand**(`guildID`, `commandID`, `command`): `Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `commandID` | `string` |
| `command` | `ApplicationCommandStructure` |

#### Returns

`Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>\>

#### Inherited from

Eris.Client.editGuildCommand

#### Defined in

node_modules/eris/index.d.ts:2282

___

### editGuildDiscovery

▸ **editGuildDiscovery**(`guildID`, `options?`): `Promise`<`DiscoveryMetadata`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `options?` | `DiscoveryOptions` |

#### Returns

`Promise`<`DiscoveryMetadata`\>

#### Inherited from

Eris.Client.editGuildDiscovery

#### Defined in

node_modules/eris/index.d.ts:2283

___

### editGuildEmoji

▸ **editGuildEmoji**(`guildID`, `emojiID`, `options`, `reason?`): `Promise`<`Emoji`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `emojiID` | `string` |
| `options` | `Object` |
| `options.name?` | `string` |
| `options.roles?` | `string`[] |
| `reason?` | `string` |

#### Returns

`Promise`<`Emoji`\>

#### Inherited from

Eris.Client.editGuildEmoji

#### Defined in

node_modules/eris/index.d.ts:2284

___

### editGuildIntegration

▸ **editGuildIntegration**(`guildID`, `integrationID`, `options`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `integrationID` | `string` |
| `options` | `IntegrationOptions` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.editGuildIntegration

#### Defined in

node_modules/eris/index.d.ts:2290

___

### editGuildMember

▸ **editGuildMember**(`guildID`, `memberID`, `options`, `reason?`): `Promise`<`Member`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `memberID` | `string` |
| `options` | `MemberOptions` |
| `reason?` | `string` |

#### Returns

`Promise`<`Member`\>

#### Inherited from

Eris.Client.editGuildMember

#### Defined in

node_modules/eris/index.d.ts:2291

___

### editGuildSticker

▸ **editGuildSticker**(`guildID`, `stickerID`, `options?`, `reason?`): `Promise`<`Sticker`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `stickerID` | `string` |
| `options?` | `EditStickerOptions` |
| `reason?` | `string` |

#### Returns

`Promise`<`Sticker`\>

#### Inherited from

Eris.Client.editGuildSticker

#### Defined in

node_modules/eris/index.d.ts:2292

___

### editGuildTemplate

▸ **editGuildTemplate**(`guildID`, `code`, `options`): `Promise`<`GuildTemplate`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `code` | `string` |
| `options` | `GuildTemplateOptions` |

#### Returns

`Promise`<`GuildTemplate`\>

#### Inherited from

Eris.Client.editGuildTemplate

#### Defined in

node_modules/eris/index.d.ts:2293

___

### editGuildVanity

▸ **editGuildVanity**(`guildID`, `code`): `Promise`<`GuildVanity`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `code` | ``null`` \| `string` |

#### Returns

`Promise`<`GuildVanity`\>

#### Inherited from

Eris.Client.editGuildVanity

#### Defined in

node_modules/eris/index.d.ts:2294

___

### editGuildVoiceState

▸ **editGuildVoiceState**(`guildID`, `options`, `userID?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `options` | `VoiceStateOptions` |
| `userID?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.editGuildVoiceState

#### Defined in

node_modules/eris/index.d.ts:2295

___

### editGuildWelcomeScreen

▸ **editGuildWelcomeScreen**(`guildID`, `options`): `Promise`<`WelcomeScreen`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `options` | `WelcomeScreenOptions` |

#### Returns

`Promise`<`WelcomeScreen`\>

#### Inherited from

Eris.Client.editGuildWelcomeScreen

#### Defined in

node_modules/eris/index.d.ts:2296

___

### editGuildWidget

▸ **editGuildWidget**(`guildID`, `options`): `Promise`<`Widget`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `options` | `Widget` |

#### Returns

`Promise`<`Widget`\>

#### Inherited from

Eris.Client.editGuildWidget

#### Defined in

node_modules/eris/index.d.ts:2297

___

### editMessage

▸ **editMessage**(`channelID`, `messageID`, `content`): `Promise`<`Message`<`TextableChannel`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `messageID` | `string` |
| `content` | `MessageContentEdit` |

#### Returns

`Promise`<`Message`<`TextableChannel`\>\>

#### Inherited from

Eris.Client.editMessage

#### Defined in

node_modules/eris/index.d.ts:2298

___

### editNickname

▸ **editNickname**(`guildID`, `nick`, `reason?`): `Promise`<`void`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `nick` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.editNickname

#### Defined in

node_modules/eris/index.d.ts:2300

___

### editRole

▸ **editRole**(`guildID`, `roleID`, `options`, `reason?`): `Promise`<`Role`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `roleID` | `string` |
| `options` | `RoleOptions` |
| `reason?` | `string` |

#### Returns

`Promise`<`Role`\>

#### Inherited from

Eris.Client.editRole

#### Defined in

node_modules/eris/index.d.ts:2301

___

### editRolePosition

▸ **editRolePosition**(`guildID`, `roleID`, `position`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `roleID` | `string` |
| `position` | `number` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.editRolePosition

#### Defined in

node_modules/eris/index.d.ts:2302

___

### editSelf

▸ **editSelf**(`options`): `Promise`<`ExtendedUser`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.avatar?` | `string` |
| `options.username?` | `string` |

#### Returns

`Promise`<`ExtendedUser`\>

#### Inherited from

Eris.Client.editSelf

#### Defined in

node_modules/eris/index.d.ts:2303

___

### editSelfConnection

▸ **editSelfConnection**(`platform`, `id`, `data`): `Promise`<`Connection`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `platform` | `string` |
| `id` | `string` |
| `data` | `Object` |
| `data.friendSync` | `boolean` |
| `data.visibility` | `number` |

#### Returns

`Promise`<`Connection`\>

#### Inherited from

Eris.Client.editSelfConnection

#### Defined in

node_modules/eris/index.d.ts:2304

___

### editSelfSettings

▸ **editSelfSettings**(`data`): `Promise`<`UserSettings`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `UserSettings` |

#### Returns

`Promise`<`UserSettings`\>

#### Inherited from

Eris.Client.editSelfSettings

#### Defined in

node_modules/eris/index.d.ts:2309

___

### editStageInstance

▸ **editStageInstance**(`channelID`, `options`): `Promise`<`StageInstance`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `options` | `StageInstanceOptions` |

#### Returns

`Promise`<`StageInstance`\>

#### Inherited from

Eris.Client.editStageInstance

#### Defined in

node_modules/eris/index.d.ts:2310

___

### editStatus

▸ **editStatus**(`status`, `activities?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `Status` |
| `activities?` | `ActivityPartial`<`BotActivityType`\> \| `ActivityPartial`<`BotActivityType`\>[] |

#### Returns

`void`

#### Inherited from

Eris.Client.editStatus

#### Defined in

node_modules/eris/index.d.ts:2311

▸ **editStatus**(`activities?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `activities?` | `ActivityPartial`<`BotActivityType`\> \| `ActivityPartial`<`BotActivityType`\>[] |

#### Returns

`void`

#### Inherited from

Eris.Client.editStatus

#### Defined in

node_modules/eris/index.d.ts:2312

___

### editUserNote

▸ **editUserNote**(`userID`, `note`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userID` | `string` |
| `note` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.editUserNote

#### Defined in

node_modules/eris/index.d.ts:2313

___

### editWebhook

▸ **editWebhook**(`webhookID`, `options`, `token?`, `reason?`): `Promise`<`Webhook`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `webhookID` | `string` |
| `options` | `WebhookOptions` |
| `token?` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`Webhook`\>

#### Inherited from

Eris.Client.editWebhook

#### Defined in

node_modules/eris/index.d.ts:2314

___

### editWebhookMessage

▸ **editWebhookMessage**(`webhookID`, `token`, `messageID`, `options`): `Promise`<`Message`<`GuildTextableChannel`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `webhookID` | `string` |
| `token` | `string` |
| `messageID` | `string` |
| `options` | `MessageWebhookContent` |

#### Returns

`Promise`<`Message`<`GuildTextableChannel`\>\>

#### Inherited from

Eris.Client.editWebhookMessage

#### Defined in

node_modules/eris/index.d.ts:2320

___

### emit

▸ **emit**<`K`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `...args` | `ClientEvents`[`K`] |

#### Returns

`boolean`

#### Inherited from

Eris.Client.emit

#### Defined in

node_modules/eris/index.d.ts:2326

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

Eris.Client.emit

#### Defined in

node_modules/eris/index.d.ts:2327

___

### enableSelfMFATOTP

▸ **enableSelfMFATOTP**(`secret`, `code`): `Promise`<{ `backup_codes`: { `code`: `string` ; `consumed`: `boolean`  }[] ; `token`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `string` |
| `code` | `string` |

#### Returns

`Promise`<{ `backup_codes`: { `code`: `string` ; `consumed`: `boolean`  }[] ; `token`: `string`  }\>

#### Inherited from

Eris.Client.enableSelfMFATOTP

#### Defined in

node_modules/eris/index.d.ts:2328

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`since`** v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

Eris.Client.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:642

___

### executeSlackWebhook

▸ **executeSlackWebhook**(`webhookID`, `token`, `options`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `webhookID` | `string` |
| `token` | `string` |
| `options` | `Record`<`string`, `unknown`\> & { `auth?`: `boolean` ; `threadID?`: `string`  } |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.executeSlackWebhook

#### Defined in

node_modules/eris/index.d.ts:2332

▸ **executeSlackWebhook**(`webhookID`, `token`, `options`): `Promise`<`Message`<`GuildTextableChannel`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `webhookID` | `string` |
| `token` | `string` |
| `options` | `Record`<`string`, `unknown`\> & { `auth?`: `boolean` ; `threadID?`: `string` ; `wait`: ``true``  } |

#### Returns

`Promise`<`Message`<`GuildTextableChannel`\>\>

#### Inherited from

Eris.Client.executeSlackWebhook

#### Defined in

node_modules/eris/index.d.ts:2333

___

### executeWebhook

▸ **executeWebhook**(`webhookID`, `token`, `options`): `Promise`<`Message`<`GuildTextableChannel`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `webhookID` | `string` |
| `token` | `string` |
| `options` | `WebhookPayload` & { `wait`: ``true``  } |

#### Returns

`Promise`<`Message`<`GuildTextableChannel`\>\>

#### Inherited from

Eris.Client.executeWebhook

#### Defined in

node_modules/eris/index.d.ts:2334

▸ **executeWebhook**(`webhookID`, `token`, `options`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `webhookID` | `string` |
| `token` | `string` |
| `options` | `WebhookPayload` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.executeWebhook

#### Defined in

node_modules/eris/index.d.ts:2335

___

### fetchPrefix

▸ **fetchPrefix**(`message`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<`TextableChannel`\> |

#### Returns

`undefined` \| `string`

#### Defined in

src/CofoClient.ts:35

___

### followChannel

▸ **followChannel**(`channelID`, `webhookChannelID`): `Promise`<`ChannelFollow`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `webhookChannelID` | `string` |

#### Returns

`Promise`<`ChannelFollow`\>

#### Inherited from

Eris.Client.followChannel

#### Defined in

node_modules/eris/index.d.ts:2336

___

### getActiveGuildThreads

▸ **getActiveGuildThreads**(`guildID`): `Promise`<`ListedGuildThreads`<`AnyThreadChannel`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`ListedGuildThreads`<`AnyThreadChannel`\>\>

#### Inherited from

Eris.Client.getActiveGuildThreads

#### Defined in

node_modules/eris/index.d.ts:2337

___

### getActiveThreads

▸ **getActiveThreads**(`channelID`): `Promise`<`ListedChannelThreads`<`AnyThreadChannel`\>\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |

#### Returns

`Promise`<`ListedChannelThreads`<`AnyThreadChannel`\>\>

#### Inherited from

Eris.Client.getActiveThreads

#### Defined in

node_modules/eris/index.d.ts:2339

___

### getArchivedThreads

▸ **getArchivedThreads**(`channelID`, `type`, `options?`): `Promise`<`ListedChannelThreads`<`PrivateThreadChannel`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `type` | ``"private"`` |
| `options?` | `GetArchivedThreadsOptions` |

#### Returns

`Promise`<`ListedChannelThreads`<`PrivateThreadChannel`\>\>

#### Inherited from

Eris.Client.getArchivedThreads

#### Defined in

node_modules/eris/index.d.ts:2340

▸ **getArchivedThreads**(`channelID`, `type`, `options?`): `Promise`<`ListedChannelThreads`<`PublicThreadChannel`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `type` | ``"public"`` |
| `options?` | `GetArchivedThreadsOptions` |

#### Returns

`Promise`<`ListedChannelThreads`<`PublicThreadChannel`\>\>

#### Inherited from

Eris.Client.getArchivedThreads

#### Defined in

node_modules/eris/index.d.ts:2341

___

### getBotGateway

▸ **getBotGateway**(): `Promise`<{ `session_start_limit`: { `max_concurrency`: `number` ; `remaining`: `number` ; `reset_after`: `number` ; `total`: `number`  } ; `shards`: `number` ; `url`: `string`  }\>

#### Returns

`Promise`<{ `session_start_limit`: { `max_concurrency`: `number` ; `remaining`: `number` ; `reset_after`: `number` ; `total`: `number`  } ; `shards`: `number` ; `url`: `string`  }\>

#### Inherited from

Eris.Client.getBotGateway

#### Defined in

node_modules/eris/index.d.ts:2342

___

### getChannel

▸ **getChannel**(`channelID`): `AnyChannel`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |

#### Returns

`AnyChannel`

#### Inherited from

Eris.Client.getChannel

#### Defined in

node_modules/eris/index.d.ts:2343

___

### getChannelInvites

▸ **getChannelInvites**(`channelID`): `Promise`<`Invite`<``"withMetadata"``, `InviteChannel`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |

#### Returns

`Promise`<`Invite`<``"withMetadata"``, `InviteChannel`\>[]\>

#### Inherited from

Eris.Client.getChannelInvites

#### Defined in

node_modules/eris/index.d.ts:2344

___

### getChannelWebhooks

▸ **getChannelWebhooks**(`channelID`): `Promise`<`Webhook`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |

#### Returns

`Promise`<`Webhook`[]\>

#### Inherited from

Eris.Client.getChannelWebhooks

#### Defined in

node_modules/eris/index.d.ts:2345

___

### getCommand

▸ **getCommand**(`commandID`): `Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commandID` | `string` |

#### Returns

`Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>\>

#### Inherited from

Eris.Client.getCommand

#### Defined in

node_modules/eris/index.d.ts:2346

___

### getCommandPermissions

▸ **getCommandPermissions**(`guildID`, `commandID`): `Promise`<`GuildApplicationCommandPermissions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `commandID` | `string` |

#### Returns

`Promise`<`GuildApplicationCommandPermissions`\>

#### Inherited from

Eris.Client.getCommandPermissions

#### Defined in

node_modules/eris/index.d.ts:2347

___

### getCommands

▸ **getCommands**(): `Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>[]\>

#### Returns

`Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>[]\>

#### Inherited from

Eris.Client.getCommands

#### Defined in

node_modules/eris/index.d.ts:2348

___

### getDMChannel

▸ **getDMChannel**(`userID`): `Promise`<`PrivateChannel`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userID` | `string` |

#### Returns

`Promise`<`PrivateChannel`\>

#### Inherited from

Eris.Client.getDMChannel

#### Defined in

node_modules/eris/index.d.ts:2350

___

### getDiscoveryCategories

▸ **getDiscoveryCategories**(): `Promise`<`DiscoveryCategory`[]\>

#### Returns

`Promise`<`DiscoveryCategory`[]\>

#### Inherited from

Eris.Client.getDiscoveryCategories

#### Defined in

node_modules/eris/index.d.ts:2349

___

### getEmojiGuild

▸ **getEmojiGuild**(`emojiID`): `Promise`<`Guild`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emojiID` | `string` |

#### Returns

`Promise`<`Guild`\>

#### Inherited from

Eris.Client.getEmojiGuild

#### Defined in

node_modules/eris/index.d.ts:2351

___

### getGateway

▸ **getGateway**(): `Promise`<{ `url`: `string`  }\>

#### Returns

`Promise`<{ `url`: `string`  }\>

#### Inherited from

Eris.Client.getGateway

#### Defined in

node_modules/eris/index.d.ts:2352

___

### getGuildAuditLog

▸ **getGuildAuditLog**(`guildID`, `options?`): `Promise`<`GuildAuditLog`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `options?` | `GetGuildAuditLogOptions` |

#### Returns

`Promise`<`GuildAuditLog`\>

#### Inherited from

Eris.Client.getGuildAuditLog

#### Defined in

node_modules/eris/index.d.ts:2353

___

### getGuildAuditLogs

▸ **getGuildAuditLogs**(`guildID`, `limit?`, `before?`, `actionType?`, `userID?`): `Promise`<`GuildAuditLog`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `limit?` | `number` |
| `before?` | `string` |
| `actionType?` | `number` |
| `userID?` | `string` |

#### Returns

`Promise`<`GuildAuditLog`\>

#### Inherited from

Eris.Client.getGuildAuditLogs

#### Defined in

node_modules/eris/index.d.ts:2355

___

### getGuildBan

▸ **getGuildBan**(`guildID`, `userID`): `Promise`<{ `reason?`: `string` ; `user`: `User`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `userID` | `string` |

#### Returns

`Promise`<{ `reason?`: `string` ; `user`: `User`  }\>

#### Inherited from

Eris.Client.getGuildBan

#### Defined in

node_modules/eris/index.d.ts:2356

___

### getGuildBans

▸ **getGuildBans**(`guildID`): `Promise`<{ `reason?`: `string` ; `user`: `User`  }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<{ `reason?`: `string` ; `user`: `User`  }[]\>

#### Inherited from

Eris.Client.getGuildBans

#### Defined in

node_modules/eris/index.d.ts:2357

___

### getGuildCommand

▸ **getGuildCommand**(`guildID`, `commandID`): `Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `commandID` | `string` |

#### Returns

`Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>\>

#### Inherited from

Eris.Client.getGuildCommand

#### Defined in

node_modules/eris/index.d.ts:2358

___

### getGuildCommandPermissions

▸ **getGuildCommandPermissions**(`guildID`): `Promise`<`GuildApplicationCommandPermissions`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`GuildApplicationCommandPermissions`[]\>

#### Inherited from

Eris.Client.getGuildCommandPermissions

#### Defined in

node_modules/eris/index.d.ts:2359

___

### getGuildCommands

▸ **getGuildCommands**(`guildID`): `Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`ApplicationCommand`<``2`` \| ``1`` \| ``3``\>[]\>

#### Inherited from

Eris.Client.getGuildCommands

#### Defined in

node_modules/eris/index.d.ts:2360

___

### getGuildDiscovery

▸ **getGuildDiscovery**(`guildID`): `Promise`<`DiscoveryMetadata`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`DiscoveryMetadata`\>

#### Inherited from

Eris.Client.getGuildDiscovery

#### Defined in

node_modules/eris/index.d.ts:2361

___

### getGuildEmbed

▸ **getGuildEmbed**(`guildID`): `Promise`<`Widget`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`Widget`\>

#### Inherited from

Eris.Client.getGuildEmbed

#### Defined in

node_modules/eris/index.d.ts:2363

___

### getGuildIntegrations

▸ **getGuildIntegrations**(`guildID`): `Promise`<`GuildIntegration`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`GuildIntegration`[]\>

#### Inherited from

Eris.Client.getGuildIntegrations

#### Defined in

node_modules/eris/index.d.ts:2364

___

### getGuildInvites

▸ **getGuildInvites**(`guildID`): `Promise`<`Invite`<``"withMetadata"``, `InviteChannel`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`Invite`<``"withMetadata"``, `InviteChannel`\>[]\>

#### Inherited from

Eris.Client.getGuildInvites

#### Defined in

node_modules/eris/index.d.ts:2365

___

### getGuildPreview

▸ **getGuildPreview**(`guildID`): `Promise`<`GuildPreview`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`GuildPreview`\>

#### Inherited from

Eris.Client.getGuildPreview

#### Defined in

node_modules/eris/index.d.ts:2366

___

### getGuildTemplate

▸ **getGuildTemplate**(`code`): `Promise`<`GuildTemplate`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`Promise`<`GuildTemplate`\>

#### Inherited from

Eris.Client.getGuildTemplate

#### Defined in

node_modules/eris/index.d.ts:2367

___

### getGuildTemplates

▸ **getGuildTemplates**(`guildID`): `Promise`<`GuildTemplate`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`GuildTemplate`[]\>

#### Inherited from

Eris.Client.getGuildTemplates

#### Defined in

node_modules/eris/index.d.ts:2368

___

### getGuildVanity

▸ **getGuildVanity**(`guildID`): `Promise`<`GuildVanity`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`GuildVanity`\>

#### Inherited from

Eris.Client.getGuildVanity

#### Defined in

node_modules/eris/index.d.ts:2369

___

### getGuildWebhooks

▸ **getGuildWebhooks**(`guildID`): `Promise`<`Webhook`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`Webhook`[]\>

#### Inherited from

Eris.Client.getGuildWebhooks

#### Defined in

node_modules/eris/index.d.ts:2370

___

### getGuildWelcomeScreen

▸ **getGuildWelcomeScreen**(`guildID`): `Promise`<`WelcomeScreen`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`WelcomeScreen`\>

#### Inherited from

Eris.Client.getGuildWelcomeScreen

#### Defined in

node_modules/eris/index.d.ts:2371

___

### getGuildWidget

▸ **getGuildWidget**(`guildID`): `Promise`<`WidgetData`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`WidgetData`\>

#### Inherited from

Eris.Client.getGuildWidget

#### Defined in

node_modules/eris/index.d.ts:2372

___

### getGuildWidgetSettings

▸ **getGuildWidgetSettings**(`guildID`): `Promise`<`Widget`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`Widget`\>

#### Inherited from

Eris.Client.getGuildWidgetSettings

#### Defined in

node_modules/eris/index.d.ts:2373

___

### getInvite

▸ **getInvite**(`inviteID`, `withCounts?`): `Promise`<`Invite`<``"withoutCount"``, `InviteChannel`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inviteID` | `string` |
| `withCounts?` | ``false`` |

#### Returns

`Promise`<`Invite`<``"withoutCount"``, `InviteChannel`\>\>

#### Inherited from

Eris.Client.getInvite

#### Defined in

node_modules/eris/index.d.ts:2374

▸ **getInvite**(`inviteID`, `withCounts`): `Promise`<`Invite`<``"withCount"``, `InviteChannel`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inviteID` | `string` |
| `withCounts` | ``true`` |

#### Returns

`Promise`<`Invite`<``"withCount"``, `InviteChannel`\>\>

#### Inherited from

Eris.Client.getInvite

#### Defined in

node_modules/eris/index.d.ts:2375

___

### getJoinedPrivateArchivedThreads

▸ **getJoinedPrivateArchivedThreads**(`channelID`, `options?`): `Promise`<`ListedChannelThreads`<`PrivateThreadChannel`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `options?` | `GetArchivedThreadsOptions` |

#### Returns

`Promise`<`ListedChannelThreads`<`PrivateThreadChannel`\>\>

#### Inherited from

Eris.Client.getJoinedPrivateArchivedThreads

#### Defined in

node_modules/eris/index.d.ts:2376

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](CofoClient.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

Eris.Client.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:499

___

### getMessage

▸ **getMessage**(`channelID`, `messageID`): `Promise`<`Message`<`TextableChannel`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `messageID` | `string` |

#### Returns

`Promise`<`Message`<`TextableChannel`\>\>

#### Inherited from

Eris.Client.getMessage

#### Defined in

node_modules/eris/index.d.ts:2377

___

### getMessageReaction

▸ **getMessageReaction**(`channelID`, `messageID`, `reaction`, `options?`): `Promise`<`User`[]\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `messageID` | `string` |
| `reaction` | `string` |
| `options?` | `GetMessageReactionOptions` |

#### Returns

`Promise`<`User`[]\>

#### Inherited from

Eris.Client.getMessageReaction

#### Defined in

node_modules/eris/index.d.ts:2378

▸ **getMessageReaction**(`channelID`, `messageID`, `reaction`, `limit?`, `before?`, `after?`): `Promise`<`User`[]\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `messageID` | `string` |
| `reaction` | `string` |
| `limit?` | `number` |
| `before?` | `string` |
| `after?` | `string` |

#### Returns

`Promise`<`User`[]\>

#### Inherited from

Eris.Client.getMessageReaction

#### Defined in

node_modules/eris/index.d.ts:2380

___

### getMessages

▸ **getMessages**(`channelID`, `options?`): `Promise`<`Message`<`TextableChannel`\>[]\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `options?` | `GetMessagesOptions` |

#### Returns

`Promise`<`Message`<`TextableChannel`\>[]\>

#### Inherited from

Eris.Client.getMessages

#### Defined in

node_modules/eris/index.d.ts:2381

▸ **getMessages**(`channelID`, `limit?`, `before?`, `after?`, `around?`): `Promise`<`Message`<`TextableChannel`\>[]\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `limit?` | `number` |
| `before?` | `string` |
| `after?` | `string` |
| `around?` | `string` |

#### Returns

`Promise`<`Message`<`TextableChannel`\>[]\>

#### Inherited from

Eris.Client.getMessages

#### Defined in

node_modules/eris/index.d.ts:2383

___

### getNitroStickerPacks

▸ **getNitroStickerPacks**(): `Promise`<{ `sticker_packs`: `StickerPack`[]  }\>

#### Returns

`Promise`<{ `sticker_packs`: `StickerPack`[]  }\>

#### Inherited from

Eris.Client.getNitroStickerPacks

#### Defined in

node_modules/eris/index.d.ts:2384

___

### getOAuthApplication

▸ **getOAuthApplication**(`appID?`): `Promise`<`OAuthApplicationInfo`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appID?` | `string` |

#### Returns

`Promise`<`OAuthApplicationInfo`\>

#### Inherited from

Eris.Client.getOAuthApplication

#### Defined in

node_modules/eris/index.d.ts:2385

___

### getPins

▸ **getPins**(`channelID`): `Promise`<`Message`<`TextableChannel`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |

#### Returns

`Promise`<`Message`<`TextableChannel`\>[]\>

#### Inherited from

Eris.Client.getPins

#### Defined in

node_modules/eris/index.d.ts:2386

___

### getPruneCount

▸ **getPruneCount**(`guildID`, `options?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `options?` | `GetPruneOptions` |

#### Returns

`Promise`<`number`\>

#### Inherited from

Eris.Client.getPruneCount

#### Defined in

node_modules/eris/index.d.ts:2387

___

### getRESTChannel

▸ **getRESTChannel**(`channelID`): `Promise`<`AnyChannel`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |

#### Returns

`Promise`<`AnyChannel`\>

#### Inherited from

Eris.Client.getRESTChannel

#### Defined in

node_modules/eris/index.d.ts:2388

___

### getRESTGuild

▸ **getRESTGuild**(`guildID`, `withCounts?`): `Promise`<`Guild`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `withCounts?` | `boolean` |

#### Returns

`Promise`<`Guild`\>

#### Inherited from

Eris.Client.getRESTGuild

#### Defined in

node_modules/eris/index.d.ts:2389

___

### getRESTGuildChannels

▸ **getRESTGuildChannels**(`guildID`): `Promise`<`AnyGuildChannel`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`AnyGuildChannel`[]\>

#### Inherited from

Eris.Client.getRESTGuildChannels

#### Defined in

node_modules/eris/index.d.ts:2390

___

### getRESTGuildEmoji

▸ **getRESTGuildEmoji**(`guildID`, `emojiID`): `Promise`<`Emoji`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `emojiID` | `string` |

#### Returns

`Promise`<`Emoji`\>

#### Inherited from

Eris.Client.getRESTGuildEmoji

#### Defined in

node_modules/eris/index.d.ts:2391

___

### getRESTGuildEmojis

▸ **getRESTGuildEmojis**(`guildID`): `Promise`<`Emoji`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`Emoji`[]\>

#### Inherited from

Eris.Client.getRESTGuildEmojis

#### Defined in

node_modules/eris/index.d.ts:2392

___

### getRESTGuildMember

▸ **getRESTGuildMember**(`guildID`, `memberID`): `Promise`<`Member`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `memberID` | `string` |

#### Returns

`Promise`<`Member`\>

#### Inherited from

Eris.Client.getRESTGuildMember

#### Defined in

node_modules/eris/index.d.ts:2393

___

### getRESTGuildMembers

▸ **getRESTGuildMembers**(`guildID`, `options?`): `Promise`<`Member`[]\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `options?` | `GetRESTGuildMembersOptions` |

#### Returns

`Promise`<`Member`[]\>

#### Inherited from

Eris.Client.getRESTGuildMembers

#### Defined in

node_modules/eris/index.d.ts:2394

▸ **getRESTGuildMembers**(`guildID`, `limit?`, `after?`): `Promise`<`Member`[]\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `limit?` | `number` |
| `after?` | `string` |

#### Returns

`Promise`<`Member`[]\>

#### Inherited from

Eris.Client.getRESTGuildMembers

#### Defined in

node_modules/eris/index.d.ts:2396

___

### getRESTGuildRoles

▸ **getRESTGuildRoles**(`guildID`): `Promise`<`Role`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`Role`[]\>

#### Inherited from

Eris.Client.getRESTGuildRoles

#### Defined in

node_modules/eris/index.d.ts:2397

___

### getRESTGuildSticker

▸ **getRESTGuildSticker**(`guildID`, `stickerID`): `Promise`<`Sticker`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `stickerID` | `string` |

#### Returns

`Promise`<`Sticker`\>

#### Inherited from

Eris.Client.getRESTGuildSticker

#### Defined in

node_modules/eris/index.d.ts:2401

___

### getRESTGuildStickers

▸ **getRESTGuildStickers**(`guildID`): `Promise`<`Sticker`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`Sticker`[]\>

#### Inherited from

Eris.Client.getRESTGuildStickers

#### Defined in

node_modules/eris/index.d.ts:2402

___

### getRESTGuilds

▸ **getRESTGuilds**(`options?`): `Promise`<`Guild`[]\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `GetRESTGuildsOptions` |

#### Returns

`Promise`<`Guild`[]\>

#### Inherited from

Eris.Client.getRESTGuilds

#### Defined in

node_modules/eris/index.d.ts:2398

▸ **getRESTGuilds**(`limit?`, `before?`, `after?`): `Promise`<`Guild`[]\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `limit?` | `number` |
| `before?` | `string` |
| `after?` | `string` |

#### Returns

`Promise`<`Guild`[]\>

#### Inherited from

Eris.Client.getRESTGuilds

#### Defined in

node_modules/eris/index.d.ts:2400

___

### getRESTSticker

▸ **getRESTSticker**(`stickerID`): `Promise`<`Sticker`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stickerID` | `string` |

#### Returns

`Promise`<`Sticker`\>

#### Inherited from

Eris.Client.getRESTSticker

#### Defined in

node_modules/eris/index.d.ts:2403

___

### getRESTUser

▸ **getRESTUser**(`userID`): `Promise`<`User`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userID` | `string` |

#### Returns

`Promise`<`User`\>

#### Inherited from

Eris.Client.getRESTUser

#### Defined in

node_modules/eris/index.d.ts:2404

___

### getSelf

▸ **getSelf**(): `Promise`<`ExtendedUser`\>

#### Returns

`Promise`<`ExtendedUser`\>

#### Inherited from

Eris.Client.getSelf

#### Defined in

node_modules/eris/index.d.ts:2405

___

### getSelfBilling

▸ **getSelfBilling**(): `Promise`<{ `payment_gateway?`: `string` ; `payment_source?`: { `brand`: `string` ; `expires_month`: `number` ; `expires_year`: `number` ; `invalid`: `boolean` ; `last_4`: `number` ; `type`: `string`  } ; `premium_subscription?`: { `canceled_at?`: `string` ; `created_at`: `string` ; `current_period_end?`: `string` ; `current_period_start?`: `string` ; `ended_at?`: `string` ; `plan`: `string` ; `status`: `number`  }  }\>

#### Returns

`Promise`<{ `payment_gateway?`: `string` ; `payment_source?`: { `brand`: `string` ; `expires_month`: `number` ; `expires_year`: `number` ; `invalid`: `boolean` ; `last_4`: `number` ; `type`: `string`  } ; `premium_subscription?`: { `canceled_at?`: `string` ; `created_at`: `string` ; `current_period_end?`: `string` ; `current_period_start?`: `string` ; `ended_at?`: `string` ; `plan`: `string` ; `status`: `number`  }  }\>

#### Inherited from

Eris.Client.getSelfBilling

#### Defined in

node_modules/eris/index.d.ts:2406

___

### getSelfConnections

▸ **getSelfConnections**(): `Promise`<`Connection`[]\>

#### Returns

`Promise`<`Connection`[]\>

#### Inherited from

Eris.Client.getSelfConnections

#### Defined in

node_modules/eris/index.d.ts:2426

___

### getSelfMFACodes

▸ **getSelfMFACodes**(`password`, `regenerate?`): `Promise`<{ `backup_codes`: { `code`: `string` ; `consumed`: `boolean`  }[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |
| `regenerate?` | `boolean` |

#### Returns

`Promise`<{ `backup_codes`: { `code`: `string` ; `consumed`: `boolean`  }[]  }\>

#### Inherited from

Eris.Client.getSelfMFACodes

#### Defined in

node_modules/eris/index.d.ts:2427

___

### getSelfPayments

▸ **getSelfPayments**(): `Promise`<{ `amount`: `number` ; `amount_refunded`: `number` ; `created_at`: `string` ; `currency`: `string` ; `description`: `string` ; `status`: `number`  }[]\>

#### Returns

`Promise`<{ `amount`: `number` ; `amount_refunded`: `number` ; `created_at`: `string` ; `currency`: `string` ; `description`: `string` ; `status`: `number`  }[]\>

#### Inherited from

Eris.Client.getSelfPayments

#### Defined in

node_modules/eris/index.d.ts:2431

___

### getSelfSettings

▸ **getSelfSettings**(): `Promise`<`UserSettings`\>

#### Returns

`Promise`<`UserSettings`\>

#### Inherited from

Eris.Client.getSelfSettings

#### Defined in

node_modules/eris/index.d.ts:2439

___

### getStageInstance

▸ **getStageInstance**(`channelID`): `Promise`<`StageInstance`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |

#### Returns

`Promise`<`StageInstance`\>

#### Inherited from

Eris.Client.getStageInstance

#### Defined in

node_modules/eris/index.d.ts:2440

___

### getThreadMembers

▸ **getThreadMembers**(`channelID`): `Promise`<`ThreadMember`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |

#### Returns

`Promise`<`ThreadMember`[]\>

#### Inherited from

Eris.Client.getThreadMembers

#### Defined in

node_modules/eris/index.d.ts:2441

___

### getUserProfile

▸ **getUserProfile**(`userID`): `Promise`<`UserProfile`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userID` | `string` |

#### Returns

`Promise`<`UserProfile`\>

#### Inherited from

Eris.Client.getUserProfile

#### Defined in

node_modules/eris/index.d.ts:2442

___

### getVoiceRegions

▸ **getVoiceRegions**(`guildID?`): `Promise`<`VoiceRegion`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID?` | `string` |

#### Returns

`Promise`<`VoiceRegion`[]\>

#### Inherited from

Eris.Client.getVoiceRegions

#### Defined in

node_modules/eris/index.d.ts:2443

___

### getWebhook

▸ **getWebhook**(`webhookID`, `token?`): `Promise`<`Webhook`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `webhookID` | `string` |
| `token?` | `string` |

#### Returns

`Promise`<`Webhook`\>

#### Inherited from

Eris.Client.getWebhook

#### Defined in

node_modules/eris/index.d.ts:2444

___

### getWebhookMessage

▸ **getWebhookMessage**(`webhookID`, `token`, `messageID`): `Promise`<`Message`<`GuildTextableChannel`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `webhookID` | `string` |
| `token` | `string` |
| `messageID` | `string` |

#### Returns

`Promise`<`Message`<`GuildTextableChannel`\>\>

#### Inherited from

Eris.Client.getWebhookMessage

#### Defined in

node_modules/eris/index.d.ts:2445

___

### joinThread

▸ **joinThread**(`channelID`, `userID?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `userID?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.joinThread

#### Defined in

node_modules/eris/index.d.ts:2446

___

### joinVoiceChannel

▸ **joinVoiceChannel**(`channelID`, `options?`): `Promise`<`VoiceConnection`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `options?` | `JoinVoiceChannelOptions` |

#### Returns

`Promise`<`VoiceConnection`\>

#### Inherited from

Eris.Client.joinVoiceChannel

#### Defined in

node_modules/eris/index.d.ts:2447

___

### kickGuildMember

▸ **kickGuildMember**(`guildID`, `userID`, `reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `userID` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.kickGuildMember

#### Defined in

node_modules/eris/index.d.ts:2448

___

### leaveGuild

▸ **leaveGuild**(`guildID`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.leaveGuild

#### Defined in

node_modules/eris/index.d.ts:2449

___

### leaveThread

▸ **leaveThread**(`channelID`, `userID?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `userID?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.leaveThread

#### Defined in

node_modules/eris/index.d.ts:2450

___

### leaveVoiceChannel

▸ **leaveVoiceChannel**(`channelID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |

#### Returns

`void`

#### Inherited from

Eris.Client.leaveVoiceChannel

#### Defined in

node_modules/eris/index.d.ts:2451

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`since`** v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

Eris.Client.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:589

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

Eris.Client.listeners

#### Defined in

node_modules/@types/node/events.d.ts:512

___

### off

▸ **off**<`K`\>(`event`, `listener`): [`CofoClient`](CofoClient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | (...`args`: `ClientEvents`[`K`]) => `void` |

#### Returns

[`CofoClient`](CofoClient.md)

#### Inherited from

Eris.Client.off

#### Defined in

node_modules/eris/index.d.ts:2452

▸ **off**(`event`, `listener`): [`CofoClient`](CofoClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CofoClient`](CofoClient.md)

#### Inherited from

Eris.Client.off

#### Defined in

node_modules/eris/index.d.ts:2453

___

### on

▸ **on**<`K`\>(`event`, `listener`): [`CofoClient`](CofoClient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | (...`args`: `ClientEvents`[`K`]) => `void` |

#### Returns

[`CofoClient`](CofoClient.md)

#### Inherited from

Eris.Client.on

#### Defined in

node_modules/eris/index.d.ts:2483

▸ **on**(`event`, `listener`): [`CofoClient`](CofoClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CofoClient`](CofoClient.md)

#### Inherited from

Eris.Client.on

#### Defined in

node_modules/eris/index.d.ts:2484

___

### once

▸ **once**<`K`\>(`event`, `listener`): [`CofoClient`](CofoClient.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `listener` | (...`args`: `ClientEvents`[`K`]) => `void` |

#### Returns

[`CofoClient`](CofoClient.md)

#### Inherited from

Eris.Client.once

#### Defined in

node_modules/eris/index.d.ts:2454

▸ **once**(`event`, `listener`): [`CofoClient`](CofoClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CofoClient`](CofoClient.md)

#### Inherited from

Eris.Client.once

#### Defined in

node_modules/eris/index.d.ts:2455

___

### pinMessage

▸ **pinMessage**(`channelID`, `messageID`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `messageID` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.pinMessage

#### Defined in

node_modules/eris/index.d.ts:2456

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`CofoClient`](CofoClient.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`CofoClient`](CofoClient.md)

#### Inherited from

Eris.Client.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:607

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`CofoClient`](CofoClient.md)

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`CofoClient`](CofoClient.md)

#### Inherited from

Eris.Client.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:623

___

### pruneMembers

▸ **pruneMembers**(`guildID`, `options?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `options?` | `PruneMemberOptions` |

#### Returns

`Promise`<`number`\>

#### Inherited from

Eris.Client.pruneMembers

#### Defined in

node_modules/eris/index.d.ts:2457

___

### purgeChannel

▸ **purgeChannel**(`channelID`, `options`): `Promise`<`number`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `options` | `PurgeChannelOptions` |

#### Returns

`Promise`<`number`\>

#### Inherited from

Eris.Client.purgeChannel

#### Defined in

node_modules/eris/index.d.ts:2458

▸ **purgeChannel**(`channelID`, `limit?`, `filter?`, `before?`, `after?`, `reason?`): `Promise`<`number`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `limit?` | `number` |
| `filter?` | (`m`: `Message`<`GuildTextableChannel`\>) => `boolean` |
| `before?` | `string` |
| `after?` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`number`\>

#### Inherited from

Eris.Client.purgeChannel

#### Defined in

node_modules/eris/index.d.ts:2460

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`since`** v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

Eris.Client.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:542

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`CofoClient`](CofoClient.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`CofoClient`](CofoClient.md)

#### Inherited from

Eris.Client.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:483

___

### removeGroupRecipient

▸ **removeGroupRecipient**(`groupID`, `userID`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupID` | `string` |
| `userID` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.removeGroupRecipient

#### Defined in

node_modules/eris/index.d.ts:2468

___

### removeGuildMemberRole

▸ **removeGuildMemberRole**(`guildID`, `memberID`, `roleID`, `reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `memberID` | `string` |
| `roleID` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.removeGuildMemberRole

#### Defined in

node_modules/eris/index.d.ts:2469

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`CofoClient`](CofoClient.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CofoClient`](CofoClient.md)

#### Inherited from

Eris.Client.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:467

___

### removeMessageReaction

▸ **removeMessageReaction**(`channelID`, `messageID`, `reaction`, `userID?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `messageID` | `string` |
| `reaction` | `string` |
| `userID?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.removeMessageReaction

#### Defined in

node_modules/eris/index.d.ts:2470

___

### removeMessageReactionEmoji

▸ **removeMessageReactionEmoji**(`channelID`, `messageID`, `reaction`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `messageID` | `string` |
| `reaction` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.removeMessageReactionEmoji

#### Defined in

node_modules/eris/index.d.ts:2471

___

### removeMessageReactions

▸ **removeMessageReactions**(`channelID`, `messageID`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `messageID` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.removeMessageReactions

#### Defined in

node_modules/eris/index.d.ts:2472

___

### removeRelationship

▸ **removeRelationship**(`userID`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userID` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.removeRelationship

#### Defined in

node_modules/eris/index.d.ts:2473

___

### searchChannelMessages

▸ **searchChannelMessages**(`channelID`, `query`): `Promise`<`SearchResults`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `query` | `SearchOptions` |

#### Returns

`Promise`<`SearchResults`\>

#### Inherited from

Eris.Client.searchChannelMessages

#### Defined in

node_modules/eris/index.d.ts:2474

___

### searchGuildMembers

▸ **searchGuildMembers**(`guildID`, `query`, `limit?`): `Promise`<`Member`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `query` | `string` |
| `limit?` | `number` |

#### Returns

`Promise`<`Member`[]\>

#### Inherited from

Eris.Client.searchGuildMembers

#### Defined in

node_modules/eris/index.d.ts:2475

___

### searchGuildMessages

▸ **searchGuildMessages**(`guildID`, `query`): `Promise`<`SearchResults`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `query` | `SearchOptions` |

#### Returns

`Promise`<`SearchResults`\>

#### Inherited from

Eris.Client.searchGuildMessages

#### Defined in

node_modules/eris/index.d.ts:2476

___

### sendChannelTyping

▸ **sendChannelTyping**(`channelID`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.sendChannelTyping

#### Defined in

node_modules/eris/index.d.ts:2477

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`CofoClient`](CofoClient.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`CofoClient`](CofoClient.md)

#### Inherited from

Eris.Client.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:493

___

### syncGuildIntegration

▸ **syncGuildIntegration**(`guildID`, `integrationID`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `integrationID` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.syncGuildIntegration

#### Defined in

node_modules/eris/index.d.ts:2478

___

### syncGuildTemplate

▸ **syncGuildTemplate**(`guildID`, `code`): `Promise`<`GuildTemplate`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `code` | `string` |

#### Returns

`Promise`<`GuildTemplate`\>

#### Inherited from

Eris.Client.syncGuildTemplate

#### Defined in

node_modules/eris/index.d.ts:2479

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

Eris.Client.toString

#### Defined in

node_modules/eris/index.d.ts:2485

___

### unbanGuildMember

▸ **unbanGuildMember**(`guildID`, `userID`, `reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guildID` | `string` |
| `userID` | `string` |
| `reason?` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.unbanGuildMember

#### Defined in

node_modules/eris/index.d.ts:2480

___

### unpinMessage

▸ **unpinMessage**(`channelID`, `messageID`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channelID` | `string` |
| `messageID` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Eris.Client.unpinMessage

#### Defined in

node_modules/eris/index.d.ts:2481

___

### validateDiscoverySearchTerm

▸ **validateDiscoverySearchTerm**(`term`): `Promise`<{ `valid`: `boolean`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `term` | `string` |

#### Returns

`Promise`<{ `valid`: `boolean`  }\>

#### Inherited from

Eris.Client.validateDiscoverySearchTerm

#### Defined in

node_modules/eris/index.d.ts:2482

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`since`** v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` \| `EventEmitter` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

Eris.Client.getEventListeners

#### Defined in

node_modules/@types/node/events.d.ts:270

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`since`** v0.9.12

**`deprecated`** Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

Eris.Client.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:242

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`since`** v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

Eris.Client.on

#### Defined in

node_modules/@types/node/events.d.ts:221

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`since`** v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

Eris.Client.once

#### Defined in

node_modules/@types/node/events.d.ts:157

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

Eris.Client.once

#### Defined in

node_modules/@types/node/events.d.ts:162

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `EventEmitter.setMaxListeners()` method allows the default limit to be
modified (if eventTargets is empty) or modify the limit specified in every `EventTarget` | `EventEmitter` passed as arguments.
The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

```js
EventEmitter.setMaxListeners(20);
// Equivalent to
EventEmitter.defaultMaxListeners = 20;

const eventTarget = new EventTarget();
// Only way to increase limit for `EventTarget` instances
// as these doesn't expose its own `setMaxListeners` method
EventEmitter.setMaxListeners(20, eventTarget);
```

**`since`** v15.3.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `n?` | `number` |
| `...eventTargets` | (`DOMEventTarget` \| `EventEmitter`)[] |

#### Returns

`void`

#### Inherited from

Eris.Client.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:290
