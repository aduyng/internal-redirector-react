export default async () => {
  const response = await fetch(chrome.extension.getURL('manifest.json'));
  return response.json();
};
