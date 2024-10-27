import {useCallback} from 'react';
import {Command} from "../commands/commandTypes";

const useDeleteCommand = () => {
    return useCallback((id: string) => {
        // @ts-ignore
        chrome.storage.sync.get(['commands']).then((result) => {
            const existingCommands: Command[] = result.commands || [];

            const updatedCommands = existingCommands.filter(command => command.id !== id);

            // @ts-ignore
            chrome.storage.sync.set({commands: updatedCommands}).then(() => {
                console.log(`Command with id ${id} deleted successfully!`);
            }).catch((err: any) => {
                console.error('Error saving commands:', err);
            });
        }).catch((err: any) => {
            console.error('Error fetching commands:', err);
        });
    }, []);
};

export default useDeleteCommand;
