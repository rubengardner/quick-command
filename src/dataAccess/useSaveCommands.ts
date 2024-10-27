import {Command} from "../commands/commandTypes";
import {v4 as uuidv4} from 'uuid';

const useSaveCommands = () => {
    return (newCommand: Partial<Command>) => {
        // @ts-ignore
        chrome.storage.sync.get(['commands']).then((result) => {
            const existingCommands = result.commands || [];

            const commandIndex = existingCommands.findIndex((cmd: Command) => cmd.id === newCommand.id);

            let updatedCommands;
            if (commandIndex !== -1) {
                updatedCommands = [
                    ...existingCommands.slice(0, commandIndex),
                    {...existingCommands[commandIndex], ...newCommand},
                    ...existingCommands.slice(commandIndex + 1)
                ];
            } else {
                updatedCommands = [...existingCommands, {...newCommand, id: newCommand.id || uuidv4()}];
            }
            // @ts-ignore
            chrome.storage.sync.set({commands: updatedCommands}).then(() => {
                console.log('Command saved successfully!');
            }).catch((err: any) => {
                console.error('Error saving commands:', err);
            });

        }).catch((err: any) => {
            console.error('Error fetching commands:', err);
        });
    };
};

export default useSaveCommands;
