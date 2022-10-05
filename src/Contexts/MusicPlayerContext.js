
import { useState, createContext } from "react";

export const MusicPlayerContext = createContext();

function MusicPlayerContextProvider(props) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [songName, setSongName] = useState("")

  const value = { isPlayerOpen, setIsPlayerOpen, songName, setSongName };

  return (
    <MusicPlayerContext.Provider value={value}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
}

export default MusicPlayerContextProvider;