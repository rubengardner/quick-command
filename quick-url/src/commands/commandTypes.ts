export interface BaseCommand {
    id: string;
    name: string;
    shortcut: string;
    type: string;
}

export interface NavigateCommand extends BaseCommand {
    type: 'navigate';
    url: string;
}

export interface CopyCommand extends BaseCommand {
    type: 'copy';
    textToCopy: string;
}

export type Command = NavigateCommand | CopyCommand;