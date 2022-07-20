import Card from "./Card";
export default function Cards() {
  return (
    <div className="grid md:grid-cols-2 gap-3">
      <Card
        src="/images/ecommerce.png"
        title="E Commerce"
        href="https://github.com/KevinPalowa/ecommerce"
      >
        test
      </Card>
    </div>
  );
}
