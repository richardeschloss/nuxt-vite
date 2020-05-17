# nuxt-vite

> Nuxt Vite -- HMR so fast it'll make your head spin!

## Installation:

1. Install vite *globally*. It has a CLI that is easy to use once globally installed:

> npm i -g vite

2. 
A) Install deps via **npm**: 
Clone this repo and in your project root, install deps:

> npm i
> cd vite && npm i

Alternatively you can just change the commited "postinstallx" script to "postinstall". Then, it'll just be a single "npm i" run at the project root.

B) Install deps via **yarn**:

> yarn

Since yarn workspaces were set up, it's just one command.

## Running:

1. Start Nuxt. 

> npm run dev:nuxt # or yarn dev:nuxt

2. Start Vite. (a separate terminal)

> npm run dev:vite # or yarn dev:vite

3. Start both at once:

> npm run dev # or yarn vite

NUXT will be running on port 3000. http://localhost:3000
Vite will be on port 3001. http://localhost:3001

Customize the scripts as you see fit. It'll try to auto-open to the browser to the app's URL. For linux, the command is "xdg-open [URL]", darwin it's "open [URL]", and win32, it's "cmd /c start [URL]"

## Usage:

Just edit your Nuxt stuff like you normally do! pages, components, assets, static files. They're all sym linked to the vite project! So what you do in Nuxt will mostly be seen in Vite. However, what's not in the Vite repo is the Nuxt context, so it's better for rapidly developing components in isolation, and then checking back on the Nuxt screen when you need it to work there.

## Some notes: (words of caution)

Vite is so spanking new, it's probably the most awesome thing to happen to the Vue dev experience. However, with new stuff also comes that "experimental feel". Expect pain points, but if you want to be a part of something awesome, this is it.

## License

[MIT License](./LICENSE)

Copyright (c) Richard Schloss
