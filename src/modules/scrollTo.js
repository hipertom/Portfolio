export function scrollTo(event) {
  event.preventDefault();

  let header = document.querySelector('#header')
  let offset = header.offsetHeight
  let targetPos = document.querySelector(event.srcElement.hash).offsetTop

  window.scrollTo({
    top: targetPos - offset,
    behavior: 'smooth'
  })
}
