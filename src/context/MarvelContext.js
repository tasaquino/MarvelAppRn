import createDataContext from './createDataContext';
import marvelApi from '../api/marvelApi';

const marvelReducer = (state, action) => {
    switch (action.type) {
        case 'get_heroes':
            return action.payload;
        default:
            return state;
    }
};

const getHeroes = (dispatch) => {
    return async () => {
        try {
            const response = await marvelApi.get('/v1/public/characters', {
                params: {
                    nameStartsWith: "Scarlet Witch",
                }
            });

            dispatch({ type: 'get_heroes', payload: response.data });
        } catch (error) {
            console.log('MarvelContext::getHeroes::error')
            console.log(error);
        }

    };
};

export const { Context, Provider } = createDataContext(
    marvelReducer,
    { getHeroes },
    []
);