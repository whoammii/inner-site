import React from 'react';
import ResumeDownload from './ResumeDownload';
import { useI18n } from '../../i18n/I18nProvider';

export interface ContactProps {}

interface SocialButtonProps {
    text: string;
    link: string;
    emoji?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ link, text, emoji }) => {
    return (
        <a rel="noreferrer" target="_blank" href={link}>
            <div className="big-button-container" style={styles.socialButton}>
                <span style={styles.socialText}>
                    {emoji && <span style={styles.emoji}>{emoji}</span>}
                    {text}
                </span>
            </div>
        </a>
    );
};

const Contact: React.FC<ContactProps> = (props) => {
    const { t } = useI18n();
    return (
        <div className="site-page-content">
            <div style={styles.header}>
                <h1>{t('contact.header')}</h1>
            </div>
            <div className="text-block">
                <p>{t('contact.p1')}</p>
                <br />
                <p>{t('contact.p2')}</p>
                <br />
                <p>
                    <b>{t('contact.email')} </b>
                    <a href="mailto:maxxhalimov@gmail.com">
                        maxxhalimov@gmail.com
                    </a>
                </p>
                <br />
                <div style={styles.socials}>
                    <SocialButton
                        text={t('contact.telegram')}
                        link="https://t.me/dreamerrvoid"
                    />
                    <SocialButton
                        text={t('contact.whatsapp')}
                        link="https://wa.me/+992559995545"
                    />
                    <SocialButton
                        text={t('contact.instagram')}
                        link="https://instagram.com/mahmadali_h"
                    />
                </div>
            </div>
            <ResumeDownload altText={t('resume.title')} />
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    socials: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 8,
    },
    socialButton: {
        padding: '8px 12px',
        borderRadius: 4,
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 80,
        transition: 'all 0.2s ease',
    },
    socialText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export default Contact;
