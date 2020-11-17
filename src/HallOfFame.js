import React from 'react'

import './HallOfFame.css'

const HallOfFame = ({ entries }) => (
    <table className="hallOfFame">
        <tbody>
            {entries.map(({ id, username, email, website, compagny, nb_todos, nb_albums }) => (
                <tr key={id}>
                    <td className="username">{username}</td>
                    <td className="email">{email}</td>
                    <td className="website">{website}</td>
                    <td className="compagny.name">{compagny}</td>
                    <td className="nb_todos">{nb_todos}</td>
                    <td className="nb_albums">{nb_albums}</td>
                </tr>
            ))}
        </tbody>
    </table>
)


export const FAKE_HOF = [
    {
        id: 1, username: "Username"
        , email: "Email",
        website: "Website",
        nb_todos: "Nb_Todos",
        nb_albums: "Nb_Albums"
    },
    {
        id: 2,
        username: <a
            className="App-link"
            href="https://fr.linkedin.com/in/fadel-belhenniche-843aa617a"
            target="_blank"
            rel="noopener noreferrer"> User 1 </a>,
        email: 'fadel-belhenniche@outlook.fr',
        website: <a
            className="App-link"
            href="https://www.display.aero/"
            target="_blank"
            rel="noopener noreferrer"> Display interactive</a>,
        nb_todos: 'You can',
        nb_albums: '0'
    },
    {
        id: 3,
        username: <a
            className="App-link"
            href="https://fr.linkedin.com/in/fadel-belhenniche-843aa617a"
            target="_blank"
            rel="noopener noreferrer"> User 2 </a>,
        email: 'fadel-belhenniche@outlook.fr',
        website: <a
            className="App-link"
            href="https://www.display.aero/"
            target="_blank"
            rel="noopener noreferrer"> Display interactive</a>,
        nb_todos: 'check in',
        nb_albums: '0'
    },
    {
        id: 4,
        username: <a
            className="App-link"
            href="https://fr.linkedin.com/in/fadel-belhenniche-843aa617a"
            target="_blank"
            rel="noopener noreferrer"> User 3 </a>,
        email: 'fadel-belhenniche@outlook.fr',
        website: <a
            className="App-link"
            href="https://www.display.aero/"
            target="_blank"
            rel="noopener noreferrer"> Display interactive</a>,
        nb_todos: 'the web console',
        nb_albums: '0'
    },
]
export default HallOfFame
