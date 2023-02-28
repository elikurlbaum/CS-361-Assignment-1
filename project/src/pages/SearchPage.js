import React from 'react';
import Search from '../components/Search.js'

export default function SearchPage(){
    return(
    <>
        <h2>
            Search Page
        </h2>
        <figure>
            <figcaption>Instructions</figcaption>
            <dl>
            <dd>Enter information into the form on the left for the card you want to search, then press 'Submit'!</dd>
            <dd>To reset the form, press 'Reset'!</dd>
            <dd>To find a random card, press 'Random Card'!</dd>
            <dd>To create a random deck, press 'Random Deck'!</dd>
            <dd>You can find the cheapest price of the card at the bottom of the page after submitting!</dd>
            <dd>Navigate to the About page for more information on the parameters.</dd>
            </dl>
        </figure>
        <Search/>
        <div id = "price"></div>
    </>
    )
}

