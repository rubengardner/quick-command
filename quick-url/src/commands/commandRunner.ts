// @ts-ignore
export const commandRunner = (command) => {
    switch (command.type) {
        case 'navigate':
            window.open(command.url, '_blank');
            break;
        case 'copy':
            navigator.clipboard.writeText(command.textToCopy)
                .then(() => alert('Copied to clipboard'))
                .catch((err) => console.error('Failed to copy text: ', err));
            break;
        default:
            console.error('Unknown command type');
    }
};
