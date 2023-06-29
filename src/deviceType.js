export default function deviceType() {
  const ua = navigator.userAgent;
  if (
    /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua) ||
    (ua.includes("Mac") && "ontouchend" in document) // fix for some versions of ios https://developer.apple.com/forums/thread/119186?page=2
  ) {
    return "tablet";
  }
  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
}
