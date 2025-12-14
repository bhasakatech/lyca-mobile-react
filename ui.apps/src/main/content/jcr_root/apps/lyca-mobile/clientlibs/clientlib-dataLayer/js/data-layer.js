window.adobeDataLayer = window.adobeDataLayer || [];

(function () {
  const pageType = document.querySelector('meta[name="page-type"]') ?.getAttribute('content');

  const deviceType = (function () {
    const ua = navigator.userAgent;
    if (/tablet|ipad/i.test(ua)) return "tablet";
    if (/mobile|android|iphone/i.test(ua)) return "mobile";
    return "desktop";
  })();

  window.adobeDataLayer.push({
    event: "page-view",
    page: {
      name: document.title || "",
      type: pageType,
      url: window.location.href,
      referrer: document.referrer || "",
      language: document.documentElement.lang || "en"
    },
    user: {
      loggedIn: false
    },
    device: {
      type: deviceType,
      userAgent: navigator.userAgent
    }
  });
})();


document.addEventListener("click", function (event) {
  if (!(event.target instanceof Element)) {
    return;
  }

  const clickedElement = event.target.closest(
    'a, button, input[type="button"], input[type="submit"], [role="button"], [data-clickable="true"]'
  );

  if (!clickedElement) {
    return;
  }

  const linkName =
    clickedElement.getAttribute("data-link-name") ||
    clickedElement.getAttribute("aria-label") ||
    clickedElement.textContent?.trim() ||
    clickedElement.querySelector("img")?.getAttribute("alt") ||
    "";

  const linkUrl =
    clickedElement.getAttribute("href") ||
    clickedElement.getAttribute("data-url") ||
    "";

  window.adobeDataLayer.push({
    event: "clickInteraction",
    link: {
      linkName: linkName,
      linkUrl: linkUrl,
      destinationUrl: linkUrl,
      linkID: `${document.title} - ${linkName}`,
      linkPageName: document.title || ""
    }
  });
});
