import React, { useState } from 'react'
import SeleBox from './component/SelectBox'
import { data } from './jsonData'


const App = () => {
    const [options, setoptions] = useState("")
    console.log(options)
    const year = [...new Set(data.wallpapers.map(item => item.year))];
    const event = [...new Set(data.wallpapers.map(item => item.event))];
    const venue = [...new Set(data.wallpapers.map(item => item.venue))];
    const competitor_name = [...new Set(data.wallpapers.map(item => item.competitor_name))];
    const competitor_state = [...new Set(data.wallpapers.map(item => item.competitor_state))];
    const match_result = [...new Set(data.wallpapers.map(item => item.match_result))];
    const category = [...new Set(data.wallpapers.map(item => item.category))];
    const linksData = data.wallpapers.filter((data) => data.year === options || data.event === options || data.venue === options || data.competitor_name === options || data.competitor_state === options || data.match_result === options || data.category === options)
    return (
        <>
            <section>
                <div class="container-fluid">
                    <div class="row box-row">
                        <div class="col-sm-6 text-center box-1">
                            <div class="py-5">
                                <h1 class="head1">CHOOSE THE OPTION BELOW</h1>
                            </div>
                            <SeleBox data={year} btnName='YEAR' setoptions={setoptions} />
                            <SeleBox data={event} btnName='EVENT' setoptions={setoptions} />
                            <SeleBox data={venue} btnName='VENUE' setoptions={setoptions} />
                            <SeleBox data={competitor_name} btnName='COMPTITOR NAME' setoptions={setoptions} />
                            <SeleBox data={competitor_state} btnName='COMPTITOR STATE' setoptions={setoptions} />
                            <SeleBox data={match_result} btnName='MATCH RESULT' setoptions={setoptions} />
                            <SeleBox data={category} btnName='CATEGORY' setoptions={setoptions} />

                        </div>
                        <div class="box-2 col-sm-6 test">
                            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="item active">
                                        <img src="assets/images/yoga-teacher-training-rishikesh (1).webp" alt="Los Angeles" class="img-fluid img-slide" />
                                    </div>
                                    <div class="item">
                                        <img src="assets/images/yoga-teacher-training-rishikesh (1).webp" alt="Chicago" class="img-fluid img-slide" />
                                    </div>
                                    <div class="item">
                                        <img src="assets/images/yoga-teacher-training-rishikesh (1).webp" alt="New york" class="img-fluid img-slide" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-youtube">
                <div class="container">
                    <div class="py-5 text-center">
                        <h1 class="head1">OUR VIDEO SECETION</h1>
                    </div>


                    <div class="row">

                        {
                            linksData.map((data, idx) => <div class="col-sm-6 my-4" key={idx} >
                                <iframe width="100%" height="315" src={data.video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                            )

                        }



                        {/* 
                        <div class="col-sm-6 my-4">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/s2NQhpFGIOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 my-4">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/brjAjq4zEIE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="col-sm-6 my-4">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/6WUFIwk9Owc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div> */}
                    </div>
                </div>
            </section>




        </>
    )
}

export default App