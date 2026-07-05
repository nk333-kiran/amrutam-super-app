export function loadAttachment(attachment: unknown) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(attachment);
    }, 500);
  });
}
