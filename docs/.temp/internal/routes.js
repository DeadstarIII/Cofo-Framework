/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "/Users/gaurish/Desktop/Coding/Cofo-Framework/documentation/node_modules/@vuepress/core/lib/client/components/GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-0cde5d5a",
    path: "/api/classes/CofoClient.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0cde5d5a").then(next)
    },
  },
  {
    name: "v-071e82fa",
    path: "/api/classes/Command.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-071e82fa").then(next)
    },
  },
  {
    name: "v-0fcc2608",
    path: "/api/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0fcc2608").then(next)
    },
  },
  {
    path: "/api/index.html",
    redirect: "/api/"
  },
  {
    name: "v-4dce8eaa",
    path: "/api/classes/Listener.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4dce8eaa").then(next)
    },
  },
  {
    name: "v-15dde1a3",
    path: "/guide/creating-a-new-listener.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-15dde1a3").then(next)
    },
  },
  {
    name: "v-5545177c",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5545177c").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-6aeee5a6",
    path: "/guide/creating-a-new-command.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6aeee5a6").then(next)
    },
  },
  {
    name: "v-5b35cf11",
    path: "/guide/creating-a-new-project.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5b35cf11").then(next)
    },
  },
  {
    name: "v-69c2ab83",
    path: "/api/classes/Embed.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-69c2ab83").then(next)
    },
  },
  {
    name: "v-e50f2e48",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-e50f2e48").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]