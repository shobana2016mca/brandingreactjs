export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function generateRandomId() {
  return Math.random().toString(36).substr(2, 9);
}

export function formatTitle(title) {
  return title.toLowerCase().split(' ').join('-');
}
