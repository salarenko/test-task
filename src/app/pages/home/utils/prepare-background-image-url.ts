export function prepareBackgroundImageUrl(url: string): string {
  return url
    ? `url(${url})`
    : `url(./assets/images/icon-no-image.svg)`;
}
