import {useEffect, useState} from 'react';
import styles from './Menu.module.css';
import Terminal from '../Terminal/Terminal';
import CommandDashboard from "../CommandDashboard/CommandDashboard";
import AddCommand from "../Add/AddCommand/AddCommand";
import {Command} from "../../commands/commandTypes";
import useGetCommands from "../../dataAccess/useGetCommands";

const Menu = () => {
    const [commands, setCommands] = useState<Command[]>([]);
    const [activeTab, setActiveTab] = useState<'terminal' | 'commands' | 'add'>('terminal');
    const fetchCommands = useGetCommands();
    const [output, setOutput] = useState('');

    useEffect(() => {
        const fetchAllCommands = async () => {
            const allCommands = await fetchCommands();
            setCommands(allCommands);
        };

        fetchAllCommands();
    }, [fetchCommands]);

    const cycleTabs = () => {
        setActiveTab((prevTab) => {
            if (prevTab === 'terminal') return 'commands';
            if (prevTab === 'commands') return 'add';
            return 'terminal'; // loops back to the start
        });
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Tab') {
                event.preventDefault();
                cycleTabs();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

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
                {activeTab === 'terminal' && <Terminal commands={commands} output={output} setOutput={setOutput}/>}
                {activeTab === 'commands' &&
                    <CommandDashboard commands={commands} setActiveTab={setActiveTab} setOutput={setOutput}/>}
                {activeTab === 'add' && <AddCommand setActiveTab={setActiveTab} setOutput={setOutput}/>}
            </div>
        </div>
    );
};

export default Menu;
