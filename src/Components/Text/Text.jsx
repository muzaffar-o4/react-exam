import React from 'react'
import './Text.scss'

const Text = () => {
    return (
        <div className="content">
            {/* content left */}
            <div className="content__left">
                <h2>What I do!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
                <span>Explore me </span>
                <div className="social__link">
                    <a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.github.com"><i className="fa-brands fa-github"></i></a>
                    <a href="https://twitter.com"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://ru.linkedin.com"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
            {/* content right */}
            <div className="content__right">
                <h1>Recent Posts</h1>

                {/* content card */}
                <div className="content__card">
                    <div className="span__text">
                        <span>September <time>24.2020</time> </span>
                        <span>Typography</span>
                    </div>
                    <h2>Bad Design vs. Good Design: 5 Examples We can Learn From</h2>
                    <span className='time__photo'>3 minutes read</span>
                    <hr />
                </div>
                {/* content card */}
                <div className="content__card">
                    <div className="span__text">
                        <span>September <time>24.2020</time> </span>
                        <span>Typography</span>
                    </div>
                    <h2>Bad Design vs. Good Design: 5 Examples We can Learn From</h2>
                    <span className='time__photo'>3 minutes read</span>
                    <hr />
                </div>
                {/* content card */}
                <div className="content__card">
                    <div className="span__text">
                        <span>September <time>24.2020</time> </span>
                        <span>Typography</span>
                    </div>
                    <h2>Bad Design vs. Good Design: 5 Examples We can Learn From</h2>
                    <span className='time__photo'>3 minutes read</span>
                    <hr />
                </div>

                <div className="content__pagenation">
                    <p>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Text