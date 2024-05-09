function MilestoneComponent({storyHeader, storyParagraph, year, storyImage}){
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