export function dateFormatter(date) {
  return new Intl.DateTimeFormat("en-CA").format(new Date(date));
}

export function dateTimeFormatter(date) {
  const d = new Date(date);

  const hours = d.getHours();
  const minutes = d.getMinutes();
  return `${dateFormatter(date)} ${
    hours == 12 ? hours : hours % 12
  }:${minutes} ${d.getHours() >= 12 ? "PM" : "AM"}`;
}
