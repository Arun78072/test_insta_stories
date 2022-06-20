import Stories, { WithSeeMore } from "react-insta-stories";
import React, { useState } from "react";
// import styled from 'styled-components';
import { HiArrowRight } from 'react-icons/hi'
import { HiArrowLeft } from 'react-icons/hi'
import { RiCloseFill } from 'react-icons/ri'
export default function InstaStories() {

    const [currentId, setCurrentId] = useState(0);
    return (
        <>
            <section className='StorieSection'>
                <div className='StorieDev'>

                    <div className='close icon'><RiCloseFill /></div>
                    <div className='left icon'><HiArrowLeft /></div>
                    <Stories
                        currentIndex={currentId}
                        loop
                        keyboardNavigation
                        defaultInterval={3000}
                        stories={stories2}
                        onStoryEnd={(s, st) => {
                            console.log('story ended', s, st);
                            setCurrentId(currentId => currentId + 1);
                        }}
                        onAllStoriesEnd={(s, st) => {
                            console.log('all stories ended', s, st);
                            setCurrentId(currentId => 0);
                        }}
                        onStoryStart={(s, st) => {
                            console.log('story started', s, st);
                            setCurrentId(currentId => (currentId + 1) - 1);
                        }}
                    />
                    <div className='right icon'><HiArrowRight /></div>
                </div>
                <div className="SideBar">
                    <h1>Talent Spotlight</h1>
                    <div></div>
                    <h1>All Spotlights</h1>
                        <div>
                            {SideProfile.map((i , index)=>{
                                return(
                                    <div key={index}>
                                        <h1>i.name</h1>
                                    </div>
                                )
                            })}
                        </div>
                </div>
            </section>
        </>
    )
}


export const stories2 = [
    {
        url: 'https://picsum.photos/1080/1920',
        seeMore: <SeeMore />,
        header: {
            heading: 'Mohit Karekar',
            subheading: 'Posted 5h ago',
            profileImage: 'https://picsum.photos/1000/1000'
        }
    },
    {
        url:
            'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
        header: {
            heading: 'Mohit Karekar',
            subheading: 'Posted 32m ago',
            profileImage: 'https://picsum.photos/1080/1920'
        }
    },
    {
        url:
            'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
        header: {
            heading: 'Mohit Karekar',
            subheading: 'Posted 32m ago',
            profileImage:
                'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
        }
    },
    {
        url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
        type: 'video',
        duration: 1000,
        header: {
            heading: 'Mohit Karekar',
            subheading: 'Posted 5h ago',
            profileImage: 'https://picsum.photos/1000/1000'
        }
    },
    {
        url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        type: 'video',
        seeMore: <SeeMore />,
        header: {
            heading: 'Mohit Karekar',
            subheading: 'Posted 5h ago',
            profileImage: 'https://picsum.photos/1000/1000'
        }
    },
    {
        url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        type: 'video',
        header: {
            heading: 'Mohit Karekar',
            subheading: 'Posted 5h ago',
            profileImage: 'https://picsum.photos/1000/1000'
        }
    },
];

export const SideProfile = [
    {
        id: 1,
        name: 'Jessica Alabama',
        profile: 'https://picsum.photos/1080/1920',
        time: 1
    },
    {
        id: 2,
        name: 'Jessica Alabama',
        profile: 'https://picsum.photos/1080/1920',
        time: 1
    },

    {
        id: 3,
        name: 'Jessica Alabama',
        profile: 'https://picsum.photos/1080/1920',
        time: 1
    },
    {
        id: 4,
        name: 'Jessica Alabama',
        profile: 'https://picsum.photos/1080/1920',
        time: 1
    },
    {
        id: 5,
        name: 'Jessica Alabama',
        profile: 'https://picsum.photos/1080/1920',
        time: 1
    },
    {
        id: 6,
        name: 'Jessica Alabama',
        profile: 'https://picsum.photos/1080/1920',
        time: 1
    },
    {
        id: 7,
        name: 'Jessica Alabama',
        profile: 'https://picsum.photos/1080/1920',
        time: 1
    },
    {
        id: 8,
        name: 'Jessica Alabama',
        profile: 'https://picsum.photos/1080/1920',
        time: 1
    },
]
function SeeMore() {
    return <div>see more</div>;
}
