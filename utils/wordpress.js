const BASE_URL = 'http://localhost:8888/njswp_be/wp-json/wp/v2';
const MEDIA_URL = 'http://localhost:8888/njswp_be/wp-content/uploads';

export async function getPosts() {
    const postsRes = await fetch(BASE_URL + '/posts?_embed');
    const posts = await postsRes.json();
    return posts;
}

export async function getPost(slug) {
    const posts = await getPosts();
    const postArray = posts.filter((post) => post.slug == slug);
    const post = postArray.length > 0 ? postArray[0] : null;
    return post;
}

export async function getEvents() {
    const eventsRes = await fetch(BASE_URL + '/events?_embed');
    const events = await eventsRes.json();
    return events;
}

export async function getEvent(slug) {
    const events = await getEvents();
    const eventArray = events.filter((event) => event.slug == slug);
    const event = eventArray.length > 0 ? eventArray[0] : null;
    return event;
}

export async function getFeaturedMedia(slug) {
    const post = await getPost(slug)
    const featuredMedia = 'http://localhost:8888/njswp_be/event/18/02_majestic-padel_visuals-februari1/';
    return featuredMedia;
}

export async function getPages() {
    const pagessRes = await fetch(BASE_URL + '/pages?_embed');
    const pages = await postsRes.json();
    return pages;
}

export async function getSlugs(type) {
    let elements = [];
    switch (type) {
        case 'posts':
            elements = await getPosts();
            break;
        case 'events':
            elements = await getEvents();
            break;
    }
    const elementsIds = elements.map((element) => {
        return {
            params: {
                slug: element.slug,
            },
        };
    });
    return elementsIds;
}