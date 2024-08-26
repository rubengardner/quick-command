import React, {useState} from 'react';
import styles from './Menu.module.css';
import Terminal from '../Terminal/Terminal';
import CommandDashboard from "../CommandDashboard/CommandDashboard";

interface Command {
    id: string;
    name: string;
    url: string;
    shortcut: string;
}

interface MenuProps {
    commands: Command[];
}

const Menu = (props: MenuProps) => {
    const {commands} = props;
    const [activeTab, setActiveTab] = useState<'terminal' | 'commands'>('terminal');

    return (
        <div className={styles.menuContainer}>
            <div className={styles.navbar}>
                <button
                    className={activeTab === 'terminal' ? styles.active : ''}
                    onClick={() => setActiveTab('terminal')}
                >
                    Terminal
                </button>
                <button
                    className={activeTab === 'commands' ? styles.active : ''}
                    onClick={() => setActiveTab('commands')}
                >
                    Commands
                </button>
            </div>
            <div className={styles.content}>
                {activeTab === 'terminal' && <Terminal/>}
                {activeTab === 'commands' && <CommandDashboard commands={commands}/>}
            </div>
        </div>
    );
};

export default Menu;
