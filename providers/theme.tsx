import * as React from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KENN5PCFFW"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-KENN5PCFFW');
            `,
        }}
      ></script>

      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2123767634383915"
        crossOrigin="anonymous"
      ></script>

      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2123767634383915"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
