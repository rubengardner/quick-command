import {Command} from "../commands/commandTypes";

const useGetCommands = () => {
    return async (): Promise<Command[]> => {
        try {
            // @ts-ignore
            const result = await chrome.storage.sync.get(['commands']);
            return result.commands || [];
        } catch (err) {
            console.error('Error fetching commands:', err);
            return [];
        }
    };
};

export default useGetCommands;
