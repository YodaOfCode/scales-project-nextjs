/** @jsx jsx */
import {jsx, Image} from 'theme-ui';
import {Link} from 'components/link/link';

export default function Logo({src, ...rest}) {
    return (
        <Link
            path='/'
            sx={{
                variant: 'links.logo',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
            }}
            {...rest}
        >
            <Image src={src} alt='логотип оренди дитячих вагів'/>
        </Link>
    );
}
