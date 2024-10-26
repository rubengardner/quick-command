import {Command} from "../commands/commandTypes";

const useSaveCommands = () => {
  return (newCommand: Partial<Command>) => {
    // @ts-ignore
    chrome.storage.sync.get(['commands']).then((result) => {
      const existingCommands = result.commands || [];

      const updatedCommands = [...existingCommands, newCommand];

      // @ts-ignore
      chrome.storage.sync.set({commands: updatedCommands}).then(() => {
        console.log('Commands saved successfully!');
      }).catch((err: any) => {
        console.error('Error saving commands:', err);
      });

    }).catch((err: any) => {
      console.error('Error fetching commands:', err);
    });
  };
};

export default useSaveCommands;
