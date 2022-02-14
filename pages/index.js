//index.js
const MEDIA_URL = 'http://localhost:8888/njswp_be/wp-content/uploads';

import Head from 'next/head';
import { first } from 'lodash';

import { getHome, getPageContent } from '../utils/wordpress';

export default function Home({ wpPage }) {

    const content = getPageContent(first(wpPage));
    console.log(content);

    return (
        <>
            <Head>
                <title>Home</title>
                <meta
                    name="description"
                    content="Keep up to date with the latest trends in tech"
                />
                <link rel="icon" href="/favicon.ico" />
                {/* You can add more metadata here, like open graph tags for social media, etc */}
            </Head>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>


        </>
    );
}

export async function getStaticProps({ params }) {
    const wpPage = await getHome();
    // homepage for static loading

    return {
        props: {
            // add pages here for static loading
            wpPage
        },
        revalidate: 10, // In seconds
    };
}