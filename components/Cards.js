import Card from "./Card";
export default function Cards() {
  return (
    <div className="grid md:grid-cols-2 gap-3">
      <Card
        src="/images/ecommerce.png"
        title="E Commerce"
        href="https://github.com/KevinPalowa/ecommerce"
      >
        An ecommerce with Next,stripe and sanity
      </Card>
      <Card
        src="/images/ecommerce.png"
        title="NFT-Market"
        href="https://github.com/KevinPalowa/nft-market"
      >
        NFT Market Pages
      </Card>
    </div>
  );
}
