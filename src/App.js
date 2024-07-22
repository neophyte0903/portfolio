import React from 'react';
import Profile from './components/Profile';
import Projects from './components/Projects';

const App = () => {
    const githubUsername = 'neophyte0903'; // Replace with your GitHub username
    const selectedRepos = [
        'IPL_analytics', 'MiniProjectThree', 'pythonprojects', 'Codementor-webScrapper', 'tailwindCards', 'noteTakingApp', 'CodeClause_Voice_Assistant_using_Python', 'CodeClause_AlarmClock_with_GUI', 'CodeClause_URL_Shortener_in_python', 'DiceGame', 'FoodDelivery-SIte'
    ]; // Replace with your selected repository names

    return (
        <div>
            <header className="bg-blue-600 text-white p-6 shadow-md">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold">My Portfolio</h1>
                </div>
            </header>
            <main className="container mx-auto mt-8 p-4">
                <section id="profile" className="mb-12">
                    <Profile username={githubUsername} />
                </section>
                <section id="projects">
                    <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
                    <Projects username={githubUsername} selectedRepos={selectedRepos} />
                </section>
            </main>
            <footer className="bg-blue-600 text-white p-4 mt-12 text-center">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
