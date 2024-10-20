export enum CommandType {
    Navigate = 'navigate',
    Copy = 'copy',
}

export interface BaseCommand {
    id: string;
    name: string;
    shortcut: string;
    type: CommandType;
}

export interface NavigateCommand extends BaseCommand {
    type: CommandType.Navigate;
    url: string;
}

export interface CopyCommand extends BaseCommand {
    type: CommandType.Copy;
    textToCopy: string;
}

export type Command = NavigateCommand | CopyCommand;
