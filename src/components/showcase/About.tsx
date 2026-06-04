import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';
import { useI18n } from '../../i18n/I18nProvider';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    const { t } = useI18n();
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>{t('about.welcome')}</h1>
            <h3 className="millennium-bold-title">I'm Max Halimov</h3>
            <br />
            <div className="text-block">
                <p>{t('about.p1')}</p>
                <br />
                <p>
                    {t('about.p2')} <Link to="/contact">click,</Link>{' '}
                    {t('about.p9')}{' '}
                    <a href="mailto:maxxhalimov@gmail.com">maxxhalimov@gmail.com</a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>{t('about.header')}</h3>
                <br />
                <p>{t('about.p3')}</p>
                <br />
                <p>{t('about.p4')}</p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>{t('about.fig1')}</b>
                        </sub>
                    </p>
                </div>

                <p>
                    {t('about.p5')} <Link to="/projects">Projects</Link>
                </p>
                <br />
                <p>{t('about.p6')}</p>
                <br />
                <p>{t('about.p7')}</p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>{t('about.hobbies.header')}</h3>
                        <br />
                        <p>{t('about.hobbies.p1')}</p>
                        <br />
                        <p>{t('about.hobbies.p2')}</p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>{t('about.fig2')}</b>
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    {t('about.p8')}{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://t.me/dreamerrvoid"
                    >
                        @dreamerrvoid
                    </a>
                </p>
                <br />
                <p>
                    {t('about.p9')}{' '}
                    <a href="mailto:maxxhalimov@gmail.com">
                        maxxhalimov@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
