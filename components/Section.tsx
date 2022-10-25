type Props = { title: string; children: React.ReactNode };
export default function Section({ title, children }: Props) {
  return (
    <div className="space-y-3 mt-14">
      <h3 className="font-semibold text-2xl">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
