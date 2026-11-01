import type { ReactNode } from 'react';
import PostBody from '@/components/PostBody';

type Props = {
  text: ReactNode[];
};

export default function Lead({ text }: Props) {
  return (
    <PostBody>
      {text.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </PostBody>
  );
}
