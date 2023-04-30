import Image from "next/image";
type Props = {
  title: string;
  src: string;
  children: string;
  githubUrl: string;
  demoUrl: string;
};
type ButtonProps = {
  children: string;
  href: string;
};
function Button({ children, href }: ButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button className="font-bold p-3 bg-blue-500 rounded-md">
        {children}
      </button>
    </a>
  );
}
export default function Card({
  children,
  title,
  githubUrl = "/",
  src,
  demoUrl = "/",
}: Props) {
  return (
    <div className="hover:bg-slate-700 transition rounded-lg">
      <div className="relative w-full h-52">
        <Image
          fill
          src={src}
          alt="card image"
          className="rounded-t-md object-cover"
        />
      </div>
      <div className="py-5 space-y-5 flex flex-col items-center">
        <h3 className="font-bold text-xl">{title}</h3>
        <p>{children}</p>
        <div className="space-x-5">
          <Button href={githubUrl}>Github</Button>
          <Button href={demoUrl}>Demo</Button>
        </div>
      </div>
    </div>
  );
}
