export default function Background({ artwork }) {
  return (
    <div className={`bg-[url(${artwork})] size-full bg-cover bg-center bg-no-repeat`}>
      <div className="size-full text-black backdrop-blur-3xl" />
    </div>
  );
}
