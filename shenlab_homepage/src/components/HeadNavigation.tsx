import Link from 'next/link';
import style from '../styles/HeadNavigation.module.css';

const HeadNavigation = () => (
    <div>
        <header>
            <div className={style.headl}>
                <hgroup>
                    <h1 className="header_logo">Shen Lab</h1>
                </hgroup>
            </div>
            <div className={style.headr}>
                <nav className={style.nav}>
                    <ul>
                        <li className="current active">
                            <Link href="/"><a>Home</a></Link>
                        </li>
                        {/* <li>
                            <Link href="/news"><a>News</a></Link>
                        </li> */}
                        <li>
                            <Link href="/research"><a>Research</a></Link>
                        </li>
                        <li>
                            <Link href="/members"><a>Members</a></Link>
                        </li>
                        <li>
                            <Link href="/publish"><a>Publications</a></Link>
                        </li>
                        <li>
                            <Link href="/activities"><a>Lab Activities</a></Link>
                        </li>
                        <li>
                            <Link href="/contact"><a>Join us</a></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
)
export default HeadNavigation