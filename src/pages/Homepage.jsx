import Homelayout from "../layouts/Homelayout";
import {Link, useNavigate} from "react-router-dom";

function Homepage(){
    return(
        <>
            <Homelayout>
              <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 items-center">
                <div className="flex relative justify-center flex-col items-center h-96 bg-gradient-to-r from-purple-600 to-pink-400 ml-40 mr-40">
                  <h1 className="text-4xl text-white-600 font-bold text-center">Padega India Tabhi To <br></br> Aghe Bhadega India </h1>
                  <p className="text-center text-wrap mt-5"> Discover a world of [Your Website's Theme or Purpose]. Whether you're [Describe Target Audience] or simply [Describe Another Target Audience], <br></br>[Website Name] is your gateway to [What the Website Offers]. From [Key Feature or Service] to <br></br> [Another Key Feature or Service], we strive to [Website's Mission or Goal].</p>
                </div>
                <div className="items-center ml-10 flex gap-10 py-7">
                <img src="https://miro.medium.com/v2/resize:fit:1400/1*daB_HS8obcuavYPPT7m3rg.jpeg" className=" rounded-3xl w-1/2"/>
                <div className="relative justify-between flex-col items-center mb-20 ">
                <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-violet-400 font-bold">
                  Afordable And Quality Education For Every One
                </h1>

                <p className="flex items-center gap-5 mt-5 mr-20 mb-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet adipisci eligendi fuga saepe voluptate facere commodi quas? Tempore blanditiis, nihil explicabo alias dignissimos molestiae id aperiam quis omnis deserunt dolores, quas in molestias. Veniam labore, quasi commodi saepe rerum consequatur? Sint atque nam debitis quisquam eaque totam, sunt dolorum.
                </p>
                <button className="bg-gradient-to-r from-purple-700 to-pink-600 text-white p-2 hover:bg-green-800 font-bold mb-12">
                  <Link to="/login">Login Account</Link>
                </button>
                </div>
                </div>

                <div className=" relative flex flex-col items-center bg-gradient-to-r from-purple-700 to-pink-600">
                  <div className="flex items-ceter justify-between mt-20">
                    <img src="https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=" className="h-52 w-30 rounded-r-full"/>
                    <img src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg" className="mr-20 mb-20 h-52 w-30 rounded-b-full"/>
                    <img src="https://t3.ftcdn.net/jpg/05/69/49/36/360_F_569493678_dbRCvKdlv2LTjYyPnRfGZWoJBqf98eDW.jpg" className="h-52 w-30 rounded-r-full"/>
                    <img src="https://lexipol.brightspotcdn.com/dims4/default/1f06981/2147483647/strip/true/crop/6995x3938+0+364/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk1-prod-lexipol.s3.us-east-2.amazonaws.com%2Fbrightspot%2F6f%2Fe3%2F0d8f845d402a9100a385a927fb54%2Fshutterstock-cognyte-nexyte-1of4.jpg" className="mb-20 h-52 w-22 rounded-t-full"/>
                  </div>

                  <div className="relative mb-20 justify-center items-center text-center">
                    <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-violet-400 font-bold">
                      Where learning Meets The Expectation
                    </h1>
                    <p className="text-wrap mt-5">
                      At Coder's Hub, we are Revolutionising your journey of stepping your first foot into your Career through our college programs with partnering up with Top Tier Colleges
                    </p>
                    <button className="bg-gradient-to-r from-purple-700 to-pink-600 text-white p-2 hover:bg-green-800 font-bold mt-8">
                      <Link to="/sinup">Create Account</Link>
                    </button>
                  </div>
                </div>
                <h1 className="text-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-900 to-yellow-900 mt-10">"Technology Is Future - Learn Fellow Enthusist"</h1>
                <div className="relative flex justify-between ml-20 mr-20 gap-2">
                <div className="relative justify-between card bg-base-100 w-72 shadow-xl mt-20 mb-20">
                  <figure>
                      <img
                       src="https://cdn.sanity.io/images/tlr8oxjg/production/5c3120359be5c4f225cd7b817811217041b759ab-1192x668.png?w=3840&q=100&fit=clip&auto=format"
                         alt="Shoes" />
                   </figure>
                    <div className="card-body">
                        <h2 className="card-title">Data Science </h2>
                        <p>Data science is the field that deals with extracting valuable insights and knowledge from data.</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Explore</button>
                      </div>
                    </div>
                </div>

                <div className="relative justify-between card bg-base-100 w-72 shadow-xl mt-20 mb-20">
                  <figure>
                      <img
                       src="https://media.licdn.com/dms/image/D5612AQGvXXjCBq-Etg/article-cover_image-shrink_600_2000/0/1688710312431?e=2147483647&v=beta&t=Sr-TVjdDa7XsqxzaOEM9IGB7plCwHCm5ihB2cyglZMc"
                         alt="Shoes" />
                   </figure>
                    <div className="card-body">
                        <h2 className="card-title"> Web Development </h2>
                        <p>Whether you’re a curious beginner or a seasoned coder, web development offers an exciting journey into the digital realm.</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Explore</button>
                      </div>
                    </div>
                </div>
                
                <div className="relative justify-between card bg-base-100 w-72 shadow-xl mt-20 mb-20">
                  <figure>
                      <img
                       src="https://t4.ftcdn.net/jpg/04/04/21/61/360_F_404216128_AzxvFH2p321asyRWiGfH9G7XmqLb8zl8.jpg"
                         alt="Shoes" />
                   </figure>
                    <div className="card-body">
                        <h2 className="card-title">Android Development </h2>
                        <p>The process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems.</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Explore</button>
                      </div>
                    </div>
                </div>

                <div className="relative justify-between card bg-base-100 w-72 shadow-xl mt-20 mb-20">
                  <figure>
                      <img
                       src="https://media.licdn.com/dms/image/C5112AQEt5JUuuwPw2w/article-cover_image-shrink_720_1280/0/1562050432156?e=2147483647&v=beta&t=BrTZbDd-mBXCcuOyBRzDt_w1UDJsyXZTR6x_ezUDt3A"
                         alt="Shoes" />
                   </figure>
                    <div className="card-body">
                        <h2 className="card-title">Machine Learning </h2>
                        <p>A branch of artificial intelligence (AI) that enables computers to “self-learn” from training data and improve over time, without being explicitly programmed.</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Explore</button>
                      </div>
                    </div>
                </div>
                </div>
                <div className="relative flex justify-between ml-20 mr-20 gap-2">
                <div className="relative justify-between card bg-base-100 w-72 shadow-xl mb-20">
                  <figure>
                      <img
                       src="https://miro.medium.com/v2/resize:fit:1358/0*0pLlSYLcdvyH-SxG"
                         alt="Shoes" />
                   </figure>
                    <div className="card-body">
                        <h2 className="card-title">Deep Learning </h2>
                        <p>Deep learning is a method in artificial intelligence (AI) that teaches computers to process data in a way that is inspired by the human brain.</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Explore</button>
                      </div>
                    </div>
                </div>

                <div className="relative justify-between card bg-base-100 w-72 shadow-xl mb-20">
                  <figure>
                      <img
                       src="https://www.cio.com/wp-content/uploads/2023/05/data_analytics_risk_assessment_tracking_trends_graphs_by_ipopba_gettyimages-1150397416_2400x1600-100828857-orig-7.jpg?quality=50&strip=all&w=1024"
                         alt="Shoes" />
                   </figure>
                    <div className="card-body">
                        <h2 className="card-title">Data Analysis </h2>
                        <p>Data analytics converts raw data into actionable insights. It includes a range of tools, technologies, and processes used to find trends and solve problems by using data.</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Explore</button>
                      </div>
                    </div>
                </div>

                <div className="relative justify-between card bg-base-100 w-72 shadow-xl mb-20">
                  <figure>
                      <img
                       src="https://t3.ftcdn.net/jpg/01/96/96/86/360_F_196968684_zp8obttcJzlY4tWhFHzDGOTbPkdY0Q3p.jpg"
                         alt="Shoes" />
                   </figure>
                    <div className="card-body">
                        <h2 className="card-title">Blockchain </h2>
                        <p>Blockchain technology is an advanced database mechanism that allows transparent information sharing within a business network.</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Explore</button>
                      </div>
                    </div>
                </div>

                <div className="relative justify-between card bg-base-100 w-72 shadow-xl mb-20">
                  <figure>
                      <img
                       src="https://www.usine-digitale.fr/mediatheque/9/1/0/000283019_896x598_c.jpg"
                         alt="Shoes" />
                   </figure>
                    <div className="card-body">
                        <h2 className="card-title"> Big Data </h2>
                        <p>Big data describes large and diverse datasets that are huge in volume and also rapidly grow in size over time.</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Explore</button>
                      </div>
                    </div>
                </div>
                

                </div>
                
                <div className="relative bg-gradient-to-r from-purple-700 to-pink-600 justify-center text-center">
                <h1 className="text-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-900 to-yellow-900 py-10">"Languages To Build Creative Code's"</h1>
                  <div className="carousel carousel-center bg-neutral rounded-box max-w-7xl space-x-4 p-4 mt-7 mb-20">
                    <div className="carousel-item">
                      <div className="card card-compact bg-base-100 w-72 shadow-xl">
                        <figure>
                          <img
                            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_CPP.jpg"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">C++!</h2>
                            <p>C++ is used in fields such as system software, game development, embedded systems, scientific computing and high-performance applications.</p>
                            <div className="card-actions justify-end">
                              <button className="btn btn-primary">Learn Now</button>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card card-compact bg-base-100 w-72 shadow-xl">
                        <figure>
                          <img
                            src="https://www.unite.ai/wp-content/uploads/2022/04/AI-Python-Libraries.png"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Python!</h2>
                            <p>Python is a high-level, interpreted, general-purpose programming language that supports both object-oriented programming and structured programming.</p>
                            <div className="card-actions justify-end mt-5">
                              <button className="btn btn-primary">Learn Now</button>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card card-compact bg-base-100 w-72 shadow-xl">
                        <figure>
                          <img
                            src="https://images.idgesg.net/images/article/2023/04/shutterstock_1361674454-100939444-large.jpg?auto=webp&quality=85,70"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">JavaScript!</h2>
                            <p>JavaScript is a programming language used to create dynamic content for websites. It achieves this by adding new HTML elements while modifying existing ones.</p>
                            <div className="card-actions justify-end mt-5">
                              <button className="btn btn-primary">Learn Now</button>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card card-compact bg-base-100 w-72 shadow-xl">
                        <figure>
                          <img
                            src="https://img.freepik.com/premium-photo/html-system-websites-concept_23-2150323500.jpg"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">HTML!</h2>
                            <p>HTML (Hypertext Markup Language) is a text-based approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage.</p>
                            <div className="card-actions justify-end mt-5">
                              <button className="btn btn-primary">Learn Now</button>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card card-compact bg-base-100 w-72 shadow-xl">
                        <figure>
                          <img
                            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Box_Sizing.jpg"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">CSS!</h2>
                            <p>CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML). This language contains coding elements and is composed of these “cascading style sheets” which are equally called CSS files (. css).</p>
                            <div className="card-actions justify-end">
                              <button className="btn btn-primary">Learn Now</button>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card card-compact bg-base-100 w-72 shadow-xl">
                        <figure>
                          <img
                            src="https://www.mytaskpanel.com/wp-content/uploads/2023/04/consulting-blog-09.webp"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">JAVA!</h2>
                            <p>Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.</p>
                            <div className="card-actions justify-end">
                              <button className="btn btn-primary">Learn Now</button>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card card-compact bg-base-100 w-72 shadow-xl">
                        <figure>
                          <img
                            src="https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhwfGVufDB8fDB8fHww"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">PHP!</h2>
                            <p>PHP is a general-purpose scripting language widely used as a server-side language for creating dynamic web pages.</p>
                            <div className="card-actions justify-end">
                              <button className="btn btn-primary">Learn Now</button>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card card-compact bg-base-100 w-72 shadow-xl">
                        <figure>
                          <img
                            src="https://cdn-ckjba.nitrocdn.com/XvHIXtRQMUYzLjoXbfBpiwAcydcSSOVj/assets/images/optimized/rev-d85625b/www.ciat.edu/wp-content/uploads/2022/12/c-sharp-blog.jpeg"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">C#!</h2>
                            <p>C# is a modern, general-purpose programming language that can be used to perform a wide range of tasks and objectives that span over a variety of professions. C# is primarily used on the Windows .</p>
                            <div className="card-actions justify-end">
                              <button className="btn btn-primary">Learn Now</button>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card card-compact bg-base-100 w-72 shadow-xl">
                        <figure>
                          <img
                            src="https://www.softwebsolutions.com/wp-content/uploads/2020/11/Blog_Golang-use-cases.jpg"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">GO!</h2>
                            <p>Go was originally built for programs related to networking and infrastructure. It was intended to replace popular high-performance server-side languages like Java and C++.</p>
                            <div className="card-actions justify-end">
                              <button className="btn btn-primary">Learn Now</button>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card card-compact bg-base-100 w-72 shadow-xl">
                        <figure>
                          <img
                            src="https://cdn-images-1.medium.com/max/914/1*99YiKjwB2TliKVA-yGogNQ.png"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Kotlin!</h2>
                            <p>Kotlin is an open-source, statically-typed programming language that supports both object-oriented and functional programming.</p>
                            <div className="card-actions justify-end">
                              <button className="btn btn-primary">Learn Now</button>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card card-compact bg-base-100 w-72 shadow-xl">
                        <figure>
                          <img
                            src="https://angularexperts.imgix.net/blog/advanced-typescript/title-16x9.webp?auto=format"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">TypeScript!</h2>
                            <p>TypeScript is a syntactic superset of JavaScript which adds static typing. This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.</p>
                            <div className="card-actions justify-end mt-5">
                              <button className="btn btn-primary">Learn Now</button>
                            </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                
              </div>
            </Homelayout>
        </>
    );
}

export default Homepage;