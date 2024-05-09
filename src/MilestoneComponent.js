import React, { useEffect } from 'react'

function MilestoneComponent({storyHeader, storyParagraph, year, storyImage}){
    //Fading animation script
    useEffect(() => {
        const mileStoneItems = document.querySelectorAll('.milestone-item');

        function fadeInElement(element){
            /*If the story paragraph is in the viewport and not visible,
            fade in that paragraph, and the h3 and img associated with it*/
            const storyParagraph = element.querySelector('p');
            const rect = storyParagraph.getBoundingClientRect();
            const isInViewport = rect.bottom <= window.innerHeight;
            if(isInViewport && !storyParagraph.classList.contains('fade-in')){
                element.querySelector('h3').classList.add('fade-in');
                element.querySelector('p').classList.add('fade-in');
                element.querySelector('img').classList.add('fade-in');
            }
        }
        function handleScroll(){
            for(let i = 0; i < mileStoneItems.length; i++){
                fadeInElement(mileStoneItems[i]);
            }
        }
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('DOMContentLoaded', handleScroll);
    }, [])

    return (
                <div className="milestone-item">
                        <div className="milestone-story-container">
                            <h3>{storyHeader}</h3>
                            <p>{storyParagraph}</p>
                        </div>
                        <div className="milestone-image-container">
                            <h4>{year}</h4>
                            <img src={storyImage} alt=""/>
                        </div>
                </div>
            );
}

export default MilestoneComponent;