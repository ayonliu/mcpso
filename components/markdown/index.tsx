"use client";

import "highlight.js/styles/atom-one-dark.min.css"; // Import a highlight.js style
import "../markdown/markdown.css";

import MarkdownIt from "markdown-it";
import MarkdownItCollapsible from "markdown-it-collapsible";
import MarkdownItTaskLists from "markdown-it-task-lists";
import MarkdownItMark from "markdown-it-mark";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItDeflist from "markdown-it-deflist";
import React from "react";
import hljs from "highlight.js";

export default function Markdown({ content }: { content: string }) {
  const md: MarkdownIt = new MarkdownIt({
    html: true,
    highlight: function (str: string, lang: string) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return `<pre class=\"hljs\"><code>${
            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
          }</code></pre>`;
        } catch (_) {}
      }

      return `<pre class=\"hljs\"><code>${md.utils.escapeHtml(str)}</code></pre>`;
    },
  })
    .use(MarkdownItCollapsible, {
      defaultOpen: true,
    })
    .use(MarkdownItTaskLists, { enabled: true })
    .use(MarkdownItMark)
    .use(MarkdownItFootnote)
    .use(MarkdownItDeflist);

  const renderedMarkdown = md.render(content);

  return (
    <div
      className="max-w-full overflow-x-auto markdown"
      dangerouslySetInnerHTML={{ __html: renderedMarkdown }}
    />
  );
}
