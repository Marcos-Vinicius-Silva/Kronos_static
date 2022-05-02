export function redirect(locale: string) {
  switch (locale) {
    case "instagram":
      return window.open("https://www.instagram.com/kronos_hookah_lounge/");
    case "whatsapp":
      return window.open(
        "http://api.whatsapp.com/send?1=pt_BR&phone=5519987691385",
        "_system",
        "location=yes"
      );
    case "localizacao":
      return window.open("https://www.instagram.com/kronos_hookah_lounge/");
  }
}
