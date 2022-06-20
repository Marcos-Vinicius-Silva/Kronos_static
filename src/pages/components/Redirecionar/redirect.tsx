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
      return window.open("https://www.google.com/maps/place/22%C2%B056'56.9%22S+47%C2%B018'49.6%22W/@-22.9490913,-47.3141529,18.5z/data=!4m5!3m4!1s0x0:0x5b860bc2049a26bb!8m2!3d-22.949148!4d-47.31377");
  }
}
