import React from 'react';
import Search from '../components/Search.js'

/**
 * Search Page
 * @returns Instructions, Search component.
 */
export default function SearchPage(){
    return (
        <>
            <h2>
                Search Page
            </h2>
            <figure>
                <figcaption>Instructions</figcaption>
                <dl>
                <dd>Enter information into the form on the left for the card you want to search, then press <b>'Submit'</b>!</dd>
                <dd>For a basic search, try entering a single parameter. For more advanced searches, enter more information into the form.</dd>
                <dd>Hover over the attributes in the form for more information.</dd>
                <dd>To reset the form, press <b>'Reset'</b>!</dd>
                <dd>Don't know any cards? To find a random card, simply press <b>'Random Card'</b>!</dd>
                <dd>To create a random deck, press <b>'Random Deck'</b>!</dd>
                <dd>You can find the cheapest price of the card at the bottom of the page after submitting!</dd>
                <dd>Navigate to the <b>'About'</b> page for more information on the parameters.</dd>
                </dl>
            </figure>
            <Search/>
            <div id = "price"></div>
        </>
    )
}

