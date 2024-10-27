import {useEffect, useState} from 'react';
import styles from './Menu.module.css';
import Terminal from '../Terminal/Terminal';
import CommandDashboard from "../CommandDashboard/CommandDashboard";
import AddCommand from "../Add/AddCommand/AddCommand";
import useSaveCommands from "../../dataAccess/useSaveCommands";
import {Command} from "../../commands/commandTypes";
import useGetCommands from "../../dataAccess/useGetCommands";

const Menu = () => {
    const [commands, setCommands] = useState<Command[]>([]);
    const [activeTab, setActiveTab] = useState<'terminal' | 'commands' | 'add'>('terminal');
    const saveCommands = useSaveCommands();
    const fetchCommands = useGetCommands();

    useEffect(() => {
        const fetchAllCommands = async () => {
            const allCommands = await fetchCommands();
            setCommands(allCommands);
        };

        fetchAllCommands();
    }, [fetchCommands]);


    const handleSave = async (newCommand: Partial<Command>) => {
        await saveCommands(newCommand);
        const allCommands = await fetchCommands();
        setCommands(allCommands);
        setActiveTab('commands');
    };

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
                <button
                    className={activeTab === 'add' ? styles.active : ''}
                    onClick={() => setActiveTab('add')}
                >
                    Add
                </button>
            </div>
            <div className={styles.content}>
                {activeTab === 'terminal' && <Terminal commands={commands}/>}
                {activeTab === 'commands' && <CommandDashboard commands={commands} handleSave={handleSave}/>}
                {activeTab === 'add' && <AddCommand setActiveTab={setActiveTab}/>}
            </div>
        </div>
    );
};

export default Menu;
