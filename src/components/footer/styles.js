export const styles = {
    footer: {
        footerBottomArea: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            borderTop: '1px solid',
            borderTopColor: 'border_color',
            pt: [7, null, 8],
            pb: ['40px', null, '100px'],
            textAlign: 'center',
        },
        menus: {
            mt: [3, 4],
            mb: 2,
            nav: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
            },
        },

        link: {
            fontSize: [1, '15px'],
            color: 'text',
            fontWeight: '400',
            mb: 2,
            cursor: 'pointer',
            transition: 'all 0.35s',
            display: 'block',
            textDecoration: 'none',
            lineHeight: [1.5, null, 1.8],
            px: [2, null, 4],
            ':hover': {
                color: 'primary',
            },
        },
        copyright: {
            fontSize: [1, '15px'],
            width: '100%',
        },
    },
};