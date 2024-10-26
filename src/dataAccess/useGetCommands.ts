import { useState, useEffect } from 'react';
import {Command} from "../commands/commandTypes";

const useGetCommands = () => {
  const [commands, setCommands] = useState<Command[]>([]);

  useEffect(() => {
    // @ts-ignore
    chrome.storage.sync.get(['commands']).then((result) => {
      setCommands(result.commands || []);
    }).catch((err: any) => {
      console.error('Error fetching commands:', err);
    });
  }, []);

  return commands;
};

export default useGetCommands;
