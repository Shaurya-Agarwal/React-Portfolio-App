import React from 'react'
import CardItem from './CardItem';

const Projects = () => {
    return (
        <>
            <div className='cards' id="projects">
                <h1>CHECK OUT MY PROJECTS</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/img6.png'
                        text='Explore all the best restraunts near the Bengaluru City'
                        label='Hangout'
                        path='https://hangout-app-mvit.herokuapp.com/'
                        />
                        <CardItem
                        src='images/img4.png'
                        text='Track the top 100 cryptocurrencies'
                        label='Crypto-Tracker'
                        path='https://stoic-shannon-83fc06.netlify.app/'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/img5.png'
                        text='Experience various campgorunds all across the world'
                        label='Yelcamp'
                        path='https://infinite-retreat-20594.herokuapp.com/'
                        />
                        <CardItem
                        src='images/img3.png'
                        text='Search for any of your fav movie'
                        label='Movie-Pedia'
                        path='https://shaurya-moviepedia.herokuapp.com/'
                        />
                        <CardItem
                        src='images/img1.jpg'
                        text='Simple chat app for two users'
                        label='Socket-Chat-App'
                        path='https://hidden-beach-88599.herokuapp.com/'
                        />
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
