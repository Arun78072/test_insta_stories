import Stories, { WithSeeMore } from "react-insta-stories";
import React, { useEffect, useState } from "react";
import { HiArrowRight } from 'react-icons/hi'
import { HiArrowLeft } from 'react-icons/hi'
import { RiCloseFill, RiCreativeCommonsSaLine } from 'react-icons/ri'
import { FiPlus } from 'react-icons/fi'
import { AiFillHeart } from 'react-icons/ai'
export default function InstaStories() {
    const [currentId, setCurrentId] = useState(0);
    const [curIndex, setCurIndex] = useState(0);

    const dataary = data[curIndex].item;
    function curindex() {
        const DataLenght = data.length - 1
        if (curIndex < DataLenght) {
            setCurIndex(curIndex => curIndex + 1);
        }
        else (
            setCurIndex(0)
        )
    }
    return (
        <>
            <section className='StorieSection'>
                <div className='StorieDev'>

                    <div className='close icon'><RiCloseFill /></div>
                    {curIndex <= 0 ? <> </> : <div className='left icon' onClick={() => {
                        setCurIndex(curIndex => curIndex - 1);
                    }}><HiArrowLeft /></div>}
                    <Stories
                        currentIndex={currentId}
                        loop
                        keyboardNavigation
                        defaultInterval={4000}
                        stories={dataary}
                        isPaused = {false}
                        onStoryEnd={(s, st) => {
                            // console.log('story ended', s, st);
                            setCurrentId(currentId => currentId + 1);
                            
                        }}
                        onAllStoriesEnd={(s, st) => {
                            // console.log('all stories ended', s, st);
                            setCurrentId(currentId => 0);
                            curindex()
                            data[curIndex].visible = false;
                        }}
                        onStoryStart={(s, st) => {
                            // console.log('story started', s, st);
                            setCurIndex(currentId => (currentId + 1) - 1);
                        }}
                    />
                    {/* <div className="reaction_icon">
                        <AiFillHeart />
                        <AiFillHeart />
                        <AiFillHeart />
                        <AiFillHeart />
                        <AiFillHeart />
                        <AiFillHeart />
                    </div> */}
                    <div className='right icon' onClick={() => {
                        curindex()
                    }}><HiArrowRight /></div>
                </div>
                <div className="SideBar">
                    <h2>Talent Spotlight</h2>
                    <div className='sidebar_btn'><button><FiPlus /> Add spotlight</button></div>
                    <h2>All Spotlights</h2>
                    <div>
                        {data.map((i, index) => {
                            return (
                                <button key={index} onClick={() => {
                                    setCurIndex(index)
                                }} className='storieBtn'>
                                    <div className='StoriePerson'>
                                        <img src={i.profile} alt={i.name} style={
                                            i.visible
                                                ? { outline: '2px solid #0070f4' }
                                                : { outline: 'none' }
                                        } />
                                        <div>
                                            <h4>{i.name}</h4>
                                            <p>{i.time} hour ago</p>
                                        </div>
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}



export const data = [
    {
        id: 1,
        name: 'Jessica Alabama',
        profile: 'https://cdn-icons-png.flaticon.com/512/190/190610.png',
        time: 1,
        visible: true,
        item: [
            {
                url:
                    'https://images.unsplash.com/photo-1590880449155-b54f958ce314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80',
                header: {
                    heading: 'Kamal Karekar One 1',
                    subheading: 'Posted 32m ago',
                    profileImage: 'https://cdn-icons-png.flaticon.com/512/190/190610.png'
                }
            },
            {
                url: 'https://images.unsplash.com/photo-1617004446721-f712c5897941?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',

                header: {
                    heading: 'Kamal Karekar One 1',
                    subheading: 'Posted 5h ago',
                    profileImage: 'https://cdn-icons-png.flaticon.com/512/190/190610.png'
                }
            }

        ]
    },
    {
        id: 2,
        name: 'Jessica Alabama',
        profile: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1655793287~exp=1655793887~hmac=2befd1e6fa3e4d3a3a5d364a9d946badfdde33632c82042c2e63e6cc762a913b&w=826',
        time: 1,
        visible: true,
        item: [
            {
                url:
                    'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
                header: {
                    heading: 'Delta Arun Two 2',
                    subheading: 'Posted 32m ago',
                    profileImage:
                        'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1655793287~exp=1655793887~hmac=2befd1e6fa3e4d3a3a5d364a9d946badfdde33632c82042c2e63e6cc762a913b&w=826'
                }
            },
            {
                url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
                type: 'video',
                duration: 1000,
                header: {
                    heading: 'Delta Arun Two 2',
                    subheading: 'Posted 5h ago',
                    profileImage: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1655793287~exp=1655793887~hmac=2befd1e6fa3e4d3a3a5d364a9d946badfdde33632c82042c2e63e6cc762a913b&w=826'
                }
            },
            {
                url:
                    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
                type: 'video',
                seeMore: <SeeMore />,
                header: {
                    heading: 'Delta Arun Two 2',
                    subheading: 'Posted 5h ago',
                    profileImage: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1655793287~exp=1655793887~hmac=2befd1e6fa3e4d3a3a5d364a9d946badfdde33632c82042c2e63e6cc762a913b&w=826'
                }
            },
            {
                url:
                    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                type: 'video',
                header: {
                    heading: 'Delta Arun Two 2',
                    subheading: 'Posted 5h ago',
                    profileImage: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1655793287~exp=1655793887~hmac=2befd1e6fa3e4d3a3a5d364a9d946badfdde33632c82042c2e63e6cc762a913b&w=826'
                }
            }
        ]
    },
    {
        id: 3,
        name: 'Jessica Alabama',
        profile: 'https://cdn.vectorstock.com/i/1000x1000/14/70/monkey-graffiti-artist-vector-37071470.webp',
        time: 1,
        visible: true,
        item: [
            {
                url: 'https://images.pexels.com/photos/4151965/pexels-photo-4151965.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
                seeMore: <SeeMore />,
                header: {
                    heading: 'Skyrocket Three 3',
                    subheading: 'Posted 5h ago',
                    profileImage: 'https://cdn.vectorstock.com/i/1000x1000/14/70/monkey-graffiti-artist-vector-37071470.webp'
                }
            },
            {
                url:
                    'https://images.pexels.com/photos/12294354/pexels-photo-12294354.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
                header: {
                    heading: 'Skyrocket Three 3',
                    subheading: 'Posted 32m ago',
                    profileImage: 'https://cdn.vectorstock.com/i/1000x1000/14/70/monkey-graffiti-artist-vector-37071470.webp'
                }
            },

        ]
    },
    {
        id: 4,
        name: 'Jessica Alabama',
        profile: 'https://cdn.vectorstock.com/i/1000x1000/80/36/girl-in-a-mask-vector-22488036.webp',
        time: 1,
        visible: true,
        item: [
            {
                url: 'https://images.pexels.com/photos/12339648/pexels-photo-12339648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                seeMore: <SeeMore />,
                header: {
                    heading: 'Mohit Karekar Four 4',
                    subheading: 'Posted 5h ago',
                    profileImage: 'https://cdn.vectorstock.com/i/1000x1000/80/36/girl-in-a-mask-vector-22488036.webp'
                }
            },
            {
                url:
                    'https://images.pexels.com/photos/10429028/pexels-photo-10429028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                header: {
                    heading: 'Mohit Karekar Four 4',
                    subheading: 'Posted 32m ago',
                    profileImage: 'https://cdn.vectorstock.com/i/1000x1000/80/36/girl-in-a-mask-vector-22488036.webp'
                }
            }
        ]
    }
];
function SeeMore() {
    return <div>see more</div>;
}
