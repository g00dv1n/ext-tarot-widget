const config = {
    "widgetTitle": "Major Arcana of the Day",
    "widgetSubtitle": "Raider Waite Tarot Deck",
    "destinationLink": "https://moonorganizer.com/en/tarot-card-major-arcana-meaning/?utm_source=chrome-store&utm_medium=tarot-ext",
    "destinationLinkText": "Learn more about this card"
  }

  export default function (cardData) {
    return `
  <div class="mo-tarot-widget">
      <div class="mo-tarot-widget__title">${config.widgetTitle}</div>
      <div class="mo-tarot-widget__subtitle">${config.widgetSubtitle}</div>
      <div class="mo-tarot-widget__img">
        <img src="/images/${cardData.id}.png" />
      </div>
      <div class="mo-tarot-widget__desc">${cardData.desc}</div>
      <div class="mo-tarot-widget__link">
        <a href="${config.destinationLink}#${cardData.id}" target="_blank">${config.destinationLinkText}</a>
      </div>
  </div>
  `;
  }