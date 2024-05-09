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

//AptuisStorySection Component
function AptuisStorySection(){
    return (
        <div className="story-section-wrapper">
            <section className="history-container">
                <h2>Our Story</h2>
                <div className="milestone-items-container">
                    {milestoneItems.map(milestoneItem => (
                        <MilestoneComponent storyHeader = {milestoneItem.storyHeader} 
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