type Props = {
  heading: string;
  lead: string;
};

export default function Hero({ heading, lead }: Props) {
  return (
    <div>
      <h1>{heading}</h1>

      <p>{lead}</p>
    </div>
  );
}
