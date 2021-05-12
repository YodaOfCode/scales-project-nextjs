export const styles = {
    grid: {
        '@media screen and (max-width: 768px)': {
            display: 'flex',
            flexDirection: 'column',
        },
        pt: [0, null, null, null, null, null, 2],
        px: [5, 6, 0, null, 7, 8, 7],
        gridGap: [
            '40px 0',
            null,
            '45px 30px',
            null,
            '60px 50px',
            '70px 50px',
            null,
            '80px 90px',
        ],
        marginBottom: '100px',
        gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
    },
};
