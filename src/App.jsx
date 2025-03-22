import { useEffect, useState } from "react";
import TrackDetails from "./components/TrackDetails";
import Background from "./components/Background";
import Page from "./components/Page";
import data from "./data/metadata.json";

function App() {
  const [loading, setLoading] = useState(true);
  const [track, setTrack] = useState({});

  useEffect(() => {
    setTrack(data.metaData);
    setLoading(false);
  }, []);

  if (loading)
    return (
      <Page>
        <span className="text-black">Loading...</span>
      </Page>
    );

  return (
    <>
      <Page>
        <TrackDetails artist={track.artist} artwork={track.albumArtURI} title={track.title} album={track.album} />
        <Background artwork={track.albumArtURI} />
      </Page>
    </>
  );
}

export default App;
