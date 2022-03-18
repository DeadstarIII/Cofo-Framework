# Creating a new listener
- This guide will explain how to create a listener 

## What is a listener?
- Listeners are basically gateway events fired by the discord api.

## Creating a new listener

### Code
- Let's write some code....

<CodeSwitcher :languages="{ js: 'Javascript', ts: 'Typescript' }">
<template v-slot:js>

```js
const { Listener } = require('@cofo/framework');

// The first parameter would always be client then followed by all the eris parameters
module.exports = new Listener("messageCreate", async(client, message) => {
    message.channel.createMessage({
        content: "Pong!"
    })
})
```

</template>
<template v-slot:ts>

```ts
import { Listener, CofoClient } from '@cofo/framework';
import { Message } from 'eris';

// The first parameter would always be client then followed by all the eris parameters
export default new Listener("messageCreate", async(client: CofoClient, message: Message) => {
    message.channel.createMessage({
        content: "Pong"
    })
})
```

</template> 
</CodeSwitcher>
