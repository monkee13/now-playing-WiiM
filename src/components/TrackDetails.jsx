export default function TrackDetails({ artist, artwork, album, title }) {
  return (
    <div className="absolute z-10">
      <img src={artwork} className="-mt-2 rounded-md drop-shadow-2xl" />
      <div className="mt-8 flex flex-col items-center justify-center">
        <p className="mb-4 text-5xl font-bold text-slate-100 drop-shadow-lg">{title}</p>
        <p className="text-2xl font-light text-white drop-shadow-lg">{artist} - {album}</p>
      </div>
    </div>
  );
}
