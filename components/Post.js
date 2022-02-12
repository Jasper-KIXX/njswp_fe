import Link from 'next/link';
import Image from 'next/image';
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

import { getDate } from '../utils/utils';
// import RenderHTML from 'react-native-render-html';

export default function Post({
    title: { rendered: title },
    content: { rendered: body },
    modified,
    slug,
    featuredMedia
}) {

    // const { title: { rendered: title }, content: { rendered: body } } = post;
    // console.log(featuredMedia);

    // const source = {
    //     html: body
    // };

    // const { width } = useWindowDimensions();



    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <Link href={slug}>
                        <a>
                            <Image
                                src={featuredMedia}
                                width={180}
                                height={120}
                            // alt={featuredMedia['alt_text']}
                            />
                        </a>
                    </Link>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <div
                            className="card-text"
                            dangerouslySetInnerHTML={{ __html: body }}
                        ></div>
                        {/* <RenderHTML
                            contentWidth={width}
                            source={source}
                        /> */}
                        <p className="card-text">
                            <small className="text-muted">On {getDate(modified)}</small>
                        </p>
                        <Link href={`/posts/${slug}`}>
                            <a className="btn btn-primary">See more</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}