import React from 'react';

/**
 * Home Page
 * @returns Website overview, update log.
 */
function HomePage() {
    return (
        <>
            <h2>Home Page</h2>
            <figure>
                <figcaption>Website Overview</figcaption>
                <dl>
                <dd>"Yu-Gi-Oh! is an exciting universe based on a card game played with Monsters, Spells, and Traps. The Yu-Gi-Oh! franchise includes manga series, television series, several video games, the Yu-Gi-Oh! TRADING CARD GAME, and more!" - yugioh-card.com</dd>
                <dd>This web application can be used to search for Yu-Gi-Oh! cards. </dd>
                <dd>Click the links in the header to navitagte the application.</dd>
                </dl>
            </figure>
            <figure>
                <figcaption>Update Log</figcaption>
                <dl>
                <dt>Feburary 28, 2023</dt>
                    <dd>Updated the CSS styling of the web applicaiton.</dd>
                <dt>February 27, 2023</dt>
                    <dd>Added loading animation for Random Deck Search.</dd>
                <dt>February 26, 2023</dt>
                    <dd>Finalized multiple card search, and multiple image viewer.</dd>
                <dt>February 15, 2023</dt>
                    <dd>Integrated partner's microservice (Random Card and Random Deck).</dd>    
                <dt>January 27, 2023</dt>
                    <dd>Added CSS styling to the web applicaiton.</dd>
                <dt>January 26, 2023</dt>
                    <dd>Finalized individual card search, single image viewer, and price search features under Search.</dd>
                <dt>January 24, 2023</dt>
                    <dd>Began implementation of the individual card search feature.</dd>
                </dl>
            </figure>
        </>
    );
}

export default HomePage;