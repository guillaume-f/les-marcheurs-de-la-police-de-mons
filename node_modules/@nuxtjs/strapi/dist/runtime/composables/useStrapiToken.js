import { ref } from "vue";
import { useCookie, useNuxtApp, useRuntimeConfig } from "#imports";
export const useStrapiToken = () => {
  const nuxt = useNuxtApp();
  const config = import.meta.server ? useRuntimeConfig() : useRuntimeConfig().public;
  nuxt._cookies = nuxt._cookies || {};
  if (nuxt._cookies[config.strapi.cookieName]) {
    return nuxt._cookies[config.strapi.cookieName];
  }
  const cookie = useCookie(config.strapi.cookieName, config.strapi.cookie);
  nuxt._cookies[config.strapi.cookieName] = cookie;
  if (!cookie.value && config.strapi.token) {
    return ref(config.strapi.token);
  }
  return cookie;
};
