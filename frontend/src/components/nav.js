import React from 'react';
import {Link} from "react-router-dom";


const NavBar = (props) => {

    return (
        <div className={"nav " + ((props.page !== 'home' && props.page !== 'join' && props.page !== 'certificates') ? 'white-nav' : '')}>

            <Link to={'/'} className={'nav-home ' + (props.page === 'home' ? 'nav-home-hidden' : '')}>
               CodingCube
            </Link>
            <ul>
            <li id={'nav-about'}>
                    <Link to={'/'}>
                      Home
                    </Link>
                </li>
                <li id={'nav-about'}>
                    <Link to={'/practice'}>
                       Practice
                    </Link>
                </li>
                <li id={'nav-hall'}>
                    <Link to={'/doubts'}>
                        Doubts
                    </Link>
                </li>
                <li id={'nav-hall'}>
                    <Link to={'/questions'}>
                        Questions
                    </Link>
                </li>
               
                <li id={'nav-more'}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>
                        More
                    </a>
                    <div className={'more-list'}>
                        <div id={'more-certificates'}>
                            <Link to={'/certi'}>
                                Certificates
                            </Link>
                        </div>
                        <div id={'more-projects'}>
                            <a href={'https://github.com/hackslash-nitp'}>
                                Projects
                            </a>
                        </div>
                        <div id={'more-events'}>
                            <a href={'https://community.mozilla.org/groups/hackslash/?view=events'}>
                                Events
                            </a>
                        </div>
                        <div id={'more-hall'}>
                            <Link to={'/hall'}>
                                Hall of Fame
                            </Link>
                        </div>
                        <div id={'more-about'}>
                            <Link to={'/about'}>
                                About Us
                            </Link>
                        </div>
                    </div>
                </li>
               
            </ul>
            <Link to={'/userId'} className='nav-userId'>
               AyushHindwan
            </Link>
        </div>
    )
}

export default NavBar;