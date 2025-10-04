type Props = {
  heading: string;
  lead: string;
  imageOn?: boolean;
};

export default function Hero({ heading, lead, imageOn = false }: Props) {
  return (
    <div>
      <h1>{heading}</h1>

      <p>{lead}</p>

      {imageOn && <figure> [画像] </figure>}
    </div>
  );
}
