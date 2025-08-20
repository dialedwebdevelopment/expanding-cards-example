/* eslint-disable react/jsx-key */
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flame, Lightbulb, Plus, Target } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const AboutCard = () => {

    const cardTitleRef = useRef()
    const cardDescriptionRef = useRef()
    const cardContainerRef = useRef()

    useEffect(() => {
        // card

        const cardTitleSplit = new SplitText(cardTitleRef.current, { type: "words,lines" });
        gsap.fromTo(cardTitleSplit.words, { 'will-change': 'opacity, transform', yPercent: 50 }, { yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power1", scrollTrigger: { trigger: cardTitleRef.current, start: "top 95%" }, onComplete: () => { cardTitleRef.current.style.webkitMaskImage = "none"; cardTitleRef.current.style.maskImage = "none"; } });
    
        gsap.fromTo( cardTitleRef.current, { "--i": "-200%", "--f": "0%", }, {  "--i": "200%", "--f": "200%", duration: 2, ease: "power2", scrollTrigger: { trigger: cardTitleRef.current, start: "top 95%" } } );
    
        gsap.fromTo( cardDescriptionRef.current, { "--i": "-200%", "--f": "0%", }, {  "--i": "200%", "--f": "200%", duration: 2, delay: 0.2, ease: "power2", scrollTrigger: { trigger: cardDescriptionRef.current, start: "top 95%" }, onComplete: () => { cardDescriptionRef.current.style.webkitMaskImage = "none"; cardDescriptionRef.current.style.maskImage = "none"; } } );
    
        gsap.fromTo( cardContainerRef.current, { "--i": "-200%", "--f": "0%", }, {  "--i": "200%", "--f": "200%", duration: 2, delay: 0, ease: "power2", scrollTrigger: { trigger: cardContainerRef.current, start: "top 95%" }, onComplete: () => { cardContainerRef.current.style.webkitMaskImage = "none"; cardContainerRef.current.style.maskImage = "none"; } } );
    }, [])

    // COLLAPSE CARD
    const [expandedIndex, setExpandedIndex] = useState(0);
    
    const toggleCard = (index) => {
        if (expandedIndex !== index) {
            setExpandedIndex(index);
        }
    };
    
    const cardItems = [
        {
            id: 1,
            number: "01",
            title: "Ethical",
            description:
                "We are committed to acting with honesty and integrity in everything we do. Our decisions are guided by transparency, accountability, and a clear focus on doing what’s right.",
        },
        {
            id: 2,
            number: "02",
            title: "Philanthropic",
            description:
                "Giving back is a part of who we are. We invest time and resources in the many communities around us, working to make a real difference. By partnering with others and offering support, we aim to create positive, lasting change that goes beyond our own efforts.",
        },
        {
            id: 3,
            number: "03",
            title: "Economic",
            description:
                "Ours is a sustainable business that looks toward the future. We balance the need for profitability with a sense of responsibility, ensuring we stay adaptive and thoughtful in a changing world. It's about creating value for everyone—our partners, employees, and the community.",
        },
        {
            id: 4,
            number: "04",
            title: "Human",
            description:
                "Above all else—we’re here to support people. Our relationships are founded on empathy, respect, and inclusivity. We believe that when people are seen, heard, and valued, they contribute in ways that know no bounds.",
        },
    ];

    return (
        <section className="about-card" >
            <div className="about-card-content">
                <div className="textbox">
                    <h1 className="subheadline mask" ref={cardTitleRef} >We Stand in Support <br /> of Bright Futures</h1>
                    <p className="description mask" ref={cardDescriptionRef} >We believe in growth that is both purposeful and meaningful. <br className="hide-on-medium" /> Every move we make is deliberate, with an eye on a future <br className="hide-on-mobile" /> where success is shared by all. For us, change is about creating <br className="hide-on-mobile" /> something enduring and positive—inside and beyond our organization.</p>
                </div>
                <div className="about-card-container mask" ref={cardContainerRef} >
                    {cardItems.map((item, index) => (
                        <div key={item.id} className={`about-card-item ${expandedIndex === index ? "expanded" : "collapsed"}`} onClick={() => toggleCard(index)} > 
                            <div className="about-card-item-top">
                                <h3 className="big-description">{item.number}</h3>
                                <h2 className="small-subheadline">{item.title}</h2>
                                <div className="about-card-item-top-text">
                                    <p className="description font-weight-300">{item.description}</p>
                                </div>
                            </div>
                            <div className="about-card-item-box">
                                <Plus className="about-card-item-box-icon" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
