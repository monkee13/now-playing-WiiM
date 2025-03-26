export default function Page({ children }) {
  return (
    <div className="size-dvh">
      <div className="flex h-full items-center justify-center">{children}</div>
    </div>
  );
}