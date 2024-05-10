import './assets/vector.svg'
import './assets/vector-tablet.svg'
import './assets/vector-mobile.svg'
import './assets/yellow-arrow.svg'

import './styles/index-base-styles.css'
import './styles/index-boundary-styles.css'
import './styles/index-responsive-desktop.css'
import './styles/index-responsive-tablet.css'
import './styles/index-responsive-mobile.css'

import milestoneItems from './story-section-data'
import MilestoneComponent from './MilestoneComponent'
import React, { useEffect } from 'react'

//AptuisStorySection Component
function AptuisStorySection(){
       //Fading animation script
       useEffect(() => {
        const mileStoneItems = document.querySelectorAll('.milestone-item');
        function fadeInElement(element){
            /*If the story paragraph is in the viewport and not visible,
            fade in that paragraph and the h3 and img associated with it*/
            const storyParagraph = element.querySelector('p');
            const rect = storyParagraph.getBoundingClientRect();
            const isInViewport = rect.bottom <= window.innerHeight;
            if(isInViewport && !storyParagraph.classList.contains('fade-in')){
                element.querySelector('h3').classList.add('fade-in');
                element.querySelector('p').classList.add('fade-in');
                element.querySelector('img').classList.add('fade-in');
            }
        }
        function handleElementVisibility(){
            for(let i = 0; i < mileStoneItems.length; i++){
                fadeInElement(mileStoneItems[i]);
            }
        }
        window.addEventListener('scroll', handleElementVisibility);
        //Fade in elements when the page first loads
        handleElementVisibility();
    }, [])
    return (
        <div className="story-section-wrapper">
            <section className="history-container">
                <h2>Our Story</h2>
                <div className="milestone-items-container">
                    {milestoneItems.map(milestoneItem => (
                        <MilestoneComponent key = {milestoneItem.id} 
                        storyHeader = {milestoneItem.storyHeader} 
                        storyParagraph = {milestoneItem.storyParagraph}
                        year = {milestoneItem.year}
                        storyImage = {milestoneItem.storyImage}/>
                    ))}   
                </div>
            </section>
        </div>
    );
}

export default AptuisStorySection;