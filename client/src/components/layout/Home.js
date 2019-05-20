import React from 'react'
import {Link} from 'react-router-dom'
import Form from './ContactForm'

const Home = (props) => {
    return(
        // <div>
        //     <h1>This is Home
        //     </h1>
        // </div>

        <div>
            <header>
                <div className="head">
                    <h1>Read, write and < br/> share stories</h1>
                        <div>
                            <p><b>Read thousands of books and stories. Challenge yourself in writing. Join the global community of readers and writers.</b></p>      
                            <div> <Link className = "contact" to="/register">  Register </Link></div>
                        </div>
                </div>
            </header> 
      
      {/* <Main /> */}
            <main>   
                <section className="intro">
                    <h2>About Us</h2>
                    <div>
                    <p>Author celebrates your creative journey by inspiring you to sketch with words or present your own masterpiece. With lightness of fingers. 
                        Creation is made as simple as possible with fine-tuned professionally designed styles producing stunning results. You can create virtually anything - notes, stories, long form articles, photo stories, web publications. 
                        There are no limits. Focus on content and structure, formatting is done automatically and live, always representing the final published work. Your works will be published online instantly.</p>
                    </div>
                </section>

                <div>
                    <div className="services">
                        <div className="service-one">
                            <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                            <p className="service-title">READ</p>
                            <p> Whether you are commuting or at home, whether you are into short stories or addictive serials: you can find them all on Sweek. Your reading progress is always saved, and you’ll never miss an update!</p>
                        </div>

                        <div className="service-two">
                            <p className="service-icon"><i className="fas fa-crop"></i></p>
                            <p className="service-title">WRITE</p>
                            <p>Write and publish your stories in just a few steps, wherever you are. Join Sweek writing competitions to win cash prizes or get your book published by a well-known publisher. Build your fan base and get feedback from your readers.</p>
                        </div>

                        <div className="service-three">
                            <p className="service-icon"><i className="fas fa-code"></i></p>
                            <p className="service-title">CONNECT</p>
                            <p>Join the Author global community! Connect with readers and writers and discuss the latest plot twists. Become a part of the story - give feedback to the author in comments or message them directly. Share your favorite stories with your friends!</p>
                        </div>
                    </div>
                </div>

                <div className="gallery"> 
                <div className="gallery-item-one"></div>
                <div className="gallery-item-two"></div>
                <div className="gallery-item-three"></div>
                <div className="gallery-item-four"></div>
                <div className="gallery-item-five"></div>
                <div className="gallery-item-six"></div>
                </div>

                <section>
                    <h2>Our Mission</h2>
                    <div>
                        <p>True independent publishing is made personal with Author. Every published work is a stand-alone online piece. With Author Cloud, as an integrated service, you decide where you share or how you organize your works. Displayed gracefully with optimized reading experience on any device. Your words never looked so clear.</p>
                        <p>Ut elementum urna sit amet elit egestas hendrerit. Vivamus quis sem fringilla, tincidunt nisi non, congue libero. Etiam cursus nulla quis sapien varius, eget accumsan augue mattis. Cras accumsan sapien nulla, eu eleifend odio tempus sit amet. Suspendisse gravida hendrerit sapien, ut molestie mi pellentesque eget. Aliquam eleifend velit vel libero elementum, vitae consectetur nisl sollicitudin. Suspendisse volutpat fringilla vehicula.</p>
                    </div>
                </section>

                <section>
                    <h2>Contact Us</h2>
                    <Form />
                </section>
            </main>
   
            <footer>
                <h3>Author </h3>
                <p>Support <br/> Author@supportme.com</p>
                <ul>
                <li><i className="fab fa-facebook-f"></i></li>
                <li><i className="fab fa-twitter"></i></li>
                <li><i className="fab fa-instagram"></i></li>
                </ul>
            </footer>    
      </div>
    )
}

export default Home