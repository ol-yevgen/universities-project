import { useHttp } from "../hooks/http.hook";
import { v4 as uuidv4 } from 'uuid';

export const useUniversityService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase = 'http://universities.hipolabs.com/';
    const _baseOffset = 10;

    //Recive data from API and return list of Universities
    const getAllUniversities = async (country, offset = _baseOffset) => {
        const res = await request(
            `${_apiBase}search?country=${country}&limit=${offset}`
        );
        return res.map(_transformUniversity);
    };

    //Create a new University
    const _transformUniversity = (university) => {
        return {
            id: uuidv4(),
            domain: university.domains[0],
            country: university.country,
            code: university.alpha_two_code,
            web: university.web_pages[0],
            name: university.name,
        };
    };

    return {
        loading,
        error,
        clearError,
        getAllUniversities,
    };
};


