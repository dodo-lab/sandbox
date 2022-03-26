function isSourceCodeComment(strings: string[]) {
  for (const str of strings) {
    if (str.trim().startsWith('//')) {
      return true;
    }
  }

  return false;
}

addEventListener('mouseup', () => {
  const selection = document.getSelection()?.toString();
  if (selection) {
    const lines = selection.split('\n');
    if (isSourceCodeComment(lines)) {
      let toClipboard = '';
      for (const line of lines) {
        const convertedLine = line.trim().replace(/^\/\/\/* */, '');
        toClipboard += convertedLine;
        if (convertedLine.endsWith('.')) {
          toClipboard += '\n';
        }
      }

      navigator.clipboard.writeText(toClipboard);
    }
  }
});
