import React from 'react'

const Bio = () => {
    return (
        <div className="container-fluid bio" style={{backgroundColor: "#031926", color:"white", fontSize: '1.5em'}}>
            <div className="row">
                <div className="col-md-6">
                    <img src={require("./bio.jpg")} className="img-fluid bio-img" alt="Taylor Swift"/>
                </div>
                <div className="col-md-6">
                <h1 style= {{fontWeight: '850'}} className="display-3 bio-name">Biography </h1>
                    <p>Erica Daniels is a rising star in the music industry with a unique blend of R&B and Soul. She began singing at a young age in her church choir and quickly developed a passion for music. Her love for music led her to pursue a career in singing and songwriting. She has been honing her craft and has been working hard to perfect her sound.</p>
                    <p>Erica's music is heavily influenced by her life experiences, and she writes about love, heartbreak, and growth. She has a powerful voice that resonates with her listeners and has the ability to connect with them on a personal level. Her songs are relatable, and her performances are always filled with passion and energy.</p>
                    <p>Erica's rise to fame began when she released her debut EP, "Love, Heartbreak, and Growth" which received rave reviews from critics and fans alike. The EP was a collection of heartfelt, soulful songs that showcased her unique sound and songwriting abilities. She followed up her debut with her first full-length album, "Unbreakable" which was released to critical acclaim and solidified her place in the music industry as a force to be reckoned with.</p>
                    <p>Erica's music has been featured on several popular television shows and films. She has also been featured in various publications and has been on several tours, performing at venues all over the world. Her music has been streamed millions of times on various platforms, and she has a dedicated fanbase that continues to grow with each release.</p>
                    <p>Erica has worked with some of the biggest names in the music industry and has been praised for her vocal range and songwriting abilities. She is a true artist and is dedicated to her craft. She continues to evolve as an artist and is always working on new music to release to her fans.</p>
                    <p>Erica is a true inspiration to many, and her music is a reflection of her journey. Her music is not just about entertainment, but it's also about healing and empowering people through the power of music. She is a true artist and is dedicated to her craft. She continues to evolve as an artist and is always working on new music to release to her fans.</p>
                    <p>Erica's music is a source of inspiration and hope for many people. She is a true artist and is dedicated to her craft. She continues to evolve as an artist and is always working on new music to release to her fans. Her music is a reflection of her journey, and it is a reminder that no matter what life throws at you, you can always come out stronger and more resilient.  </p>
                </div>
            </div>
            <div className="fireworks">
                <div className="firework"></div>
                <div className="firework"></div>
                <div className="firework"></div>
                <div className="firework"></div>
                <div className="firework"></div>
                <div className="firework"></div>
            </div>
        </div>
    )
}

export default Bio