import { Fragment, ReactNode } from 'react';

type Props = {
  text: string;
};

type Renderer = (content: string, key: number) => ReactNode;

const INLINE_RENDERERS: Record<string, Renderer> = {
  br: (_, key) => <br key={key} />,
  wbr: (_, key) => <wbr key={key} />,
  em: (content, key) => <em key={key}>{content}</em>,
  strong: (content, key) => <strong key={key}>{content}</strong>,
};

const TAG_PATTERN =
  /(<p>.*?<\/p>|<br>|<wbr>|<em>.*?<\/em>|<strong>.*?<\/strong>)/;

export default function InlineHtmlText({ text }: Props) {
  const parts = text.split(TAG_PATTERN);

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;

        if (part.startsWith('<p>')) {
          return (
            <p key={i}>
              <InlineHtmlText text={part.replace(/<\/?p>/g, '')} />
            </p>
          );
        }

        // インラインタグ共通処理
        const match = part.match(/^<(\w+)(?:\s*\/)?>/);
        if (match) {
          const tag = match[1];
          const renderer = INLINE_RENDERERS[tag];

          if (renderer) {
            const content = part.replace(new RegExp(`<\/?${tag}>`, 'g'), '');
            return renderer(content, i);
          }
        }

        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
