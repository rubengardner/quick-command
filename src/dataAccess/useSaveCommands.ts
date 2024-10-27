import {useCallback} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Command} from "../commands/commandTypes";

const useSaveCommands = () => {
    return useCallback(async (newCommand: Partial<Command>) => {
        try {
            // @ts-ignore
            const result = await chrome.storage.sync.get(['commands']);
            const existingCommands = result.commands || [];

            const commandIndex = existingCommands.findIndex((cmd: Command) => cmd.id === newCommand.id);

            let updatedCommands;
            if (commandIndex !== -1) {
                updatedCommands = [
                    ...existingCommands.slice(0, commandIndex),
                    {...existingCommands[commandIndex], ...newCommand},
                    ...existingCommands.slice(commandIndex + 1),
                ];
            } else {
                updatedCommands = [...existingCommands, {...newCommand, id: newCommand.id || uuidv4()}];
            }

            // @ts-ignore
            await chrome.storage.sync.set({commands: updatedCommands});
            console.log('Command saved successfully!');
        } catch (err) {
            console.error('Error saving commands:', err);
        }
    }, []);
};

export default useSaveCommands;
