import firstImage from './assets/image-1.png'
import secondImage from './assets/image-2.png'
import thirdImage from './assets/image-3.png'
import fourthImage from './assets/image-4.png'
import fifthImage from './assets/image-5.png'

import { v4 as uuidv4 } from 'uuid'

const milestoneItems = [
    {
        id: uuidv4(),
        storyHeader: 'Small Beginnings',
        storyParagraph: 'A combination of experience from; the Swiss private banking sector and research and development environment of The University of Exeter, our software was created, and a beta version moved into testing.',
        year: 2017,
        storyImage: firstImage,
    },
    {
        id: uuidv4(),
        storyHeader: 'Aptius is Founded',
        storyParagraph: 'In June of 2018 Aptius Ltd is formed. Although a small start, the beta version has grown to become version 1.0. The shared experience and research knowledge of our founders merged creating a full-time venture.',
        year: 2018,
        storyImage: secondImage,
    },
    {
        id: uuidv4(),
        storyHeader: 'Changing Times Produce a Turning Point',
        storyParagraph: 'In June of 2018 Aptius Ltd is formed. Although a small start, the beta version has grown to become version 1.0. The shared experience and research knowledge of our founders merged creating a full-time venture.',
        year: 2020,
        storyImage: thirdImage,
    },
    {
        id: uuidv4(),
        storyHeader:'Rapid Growth, Continued Change and Progress',
        storyParagraph: 'Conflict in Ukraine, an energy crisis, increased inflation and global turbulence. Aptius\' success in navigating change leveraging growth from in 20/21 and improved algorithms to scale holdings, expanding considerably.',
        year: 2022,
        storyImage: fourthImage,
    },
    {
        id: uuidv4(),
        storyHeader: 'Anchored For The Future',
        storyParagraph: 'As Aptius enters it\'s 6th year with over £1.6m+ in company holdings, we have begun our \'Aptius 2028\' plan. With a long-term view, we aim to surpass £5million in holdings. Our 2028 strategy is to consolidate the best from each diversified approach, enhance company expertise and amplify our results.',
        year: 2024,
        storyImage: fifthImage,
    }
]

export default milestoneItems;