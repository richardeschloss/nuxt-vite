# nuxt-vite

> Nuxt Vite -- HMR so fast it'll make your head spin!

## Installation:

1. Install vite *globally*. It has a CLI that is easy to use once globally installed:

> npm i -g vite

2. Clone this repo and in project root, install deps:

> npm i

3. In project root/vite folder, install deps there too:

> npm i

## Running:

1. Start Nuxt. 

> npm run dev

2. Start Vite. (a separate terminal)

> npm run dev:vite

NUXT will be running on port 3000. http://localhost:3000
Vite will be on port 3001. http://localhost:3001

## Usage:

Just edit your Nuxt stuff like you normally do! pages, components, assets, static files. They're all sym linked to the vite project! So what you do in Nuxt will mostly be seen in Vite. However, what's not in the Vite repo is the Nuxt context, so it's better for rapidly developing components in isolation, and then checking back on the Nuxt screen when you need it to work there.

## Some notes: (words of caution)

Vite is so spanking new, it's probably the most awesome thing to happen to the Vue dev experience. However, with new stuff also comes that "experimental feel". Expect pain points, but if you want to be a part of something awesome, this is it.

## License

[MIT License](./LICENSE)

Copyright (c) Richard Schloss <richard.e.schloss@gmail.com>
