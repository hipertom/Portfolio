export function img(filename) {
  return new URL(`./assets/img/gallery/${filename}`, import.meta.url)
}
