import firstImage from './assets/image-1.png'
import secondImage from './assets/image-2.png'
import thirdImage from './assets/image-3.png'
import fourthImage from './assets/image-4.png'
import fifthImage from './assets/image-5.png'

import { v4 as uuidv4 } from 'uuid'

const milestoneItems = [
    {
        id: uuidv4(),
        storyHeader: 'Lorem Ipsum',
        storyParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam vel diam eu ornare. Integer et felis elit. Pellentesque semper, dui sit amet interdum aliquam, lectus elit gravida tortor, at pulvinar sapien. ',
        year: 2017,
        storyImage: firstImage,
    },
    {
        id: uuidv4(),
        storyHeader: 'Lorem Ipsum',
        storyParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at tellus in odio egestas luctus quis non tortor. Praesent tellus eros, finibus sit amet fermentum non, vehicula et arcu. Etiam sed purus. ',
        year: 2018,
        storyImage: secondImage,
    },
    {
        id: uuidv4(),
        storyHeader: 'Lorem Ipsum',
        storyParagraph: 'In June of 2018 Aptius Ltd is formed. Although a small start, the beta version has grown to become version 1.0. The shared experience and research knowledge of our founders merged creating a full-time venture.',
        year: 2020,
        storyImage: thirdImage,
    },
    {
        id: uuidv4(),
        storyHeader:'Lorem Ipsum',
        storyParagraph: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec bibendum magna, non tristique nibh. Maecenas pellentesque erat nec tellus porta consectetur. Nunc scelerisque volutpat ex, vitae aliquam risus fermentum nec. Curabitur. ',
        year: 2022,
        storyImage: fourthImage,
    },
    {
        id: uuidv4(),
        storyHeader: 'Lorem Ipsum',
        storyParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales sodales feugiat. Sed ac urna auctor, volutpat nibh id, vehicula arcu. Suspendisse eget malesuada est, in vestibulum ex. Nam eu vulputate diam. Nunc eget nisl auctor, pulvinar dolor sed, aliquet elit. Fusce quis nibh at ipsum luctus commodo. Donec.',
        year: 2024,
        storyImage: fifthImage,
    }
]

export default milestoneItems;