import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'dark',
    sequenceDiagram: {
      mirrorActors: false,
      height: 40,
      messageMargin: 10,
      messageFontSize: 14,
    },
    flowchart: {
      diagramPadding: 8,
      htmlLabels: false,
    },
  }
})