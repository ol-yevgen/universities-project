import { useState, useCallback } from "react";
import { useUniversityService } from "../../services/universityService";

import { Form } from "../../components/Form/Form";
import { Table } from "../../components/Table/Table";

const MainPage = () => {
    const [country, setCountry] = useState('');
    const [universityList, setUniversitylist] = useState([]);
    const [offset, setOffset] = useState(10);
    const [universityEnded, setUniversityListEnded] = useState(false);
    
    const { getAllUniversities } = useUniversityService();

    //If data length is still available, update of universityList state by the offset value
    const onUniversityListLoaded = useCallback((newUniversityList) => {
        let ended = false;
        let diffLength = newUniversityList.length - universityList.length

        if (diffLength < 1) {
            ended = true;
        }

        setUniversitylist(universityList => [...newUniversityList]);
        setOffset(offset => offset + 10);
        setUniversityListEnded(universityEnded => ended);

    }, [universityList])

    const onRequest = useCallback((country, offset) => {
        getAllUniversities(country, offset)
            .then(onUniversityListLoaded)
    }, [getAllUniversities, onUniversityListLoaded])

    //Request method
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        onRequest(country, offset);
    }, [onRequest, country, offset])

    //State reset method
    const reset = useCallback(() => {
        setCountry(country => '')
        setUniversitylist(universityList => [])
        setOffset(offset => 10)
        setUniversityListEnded(universityEnded => false)
    }, [])

    //Receive input value method
    const setCountryValue = (e) => {
        e.preventDefault();
        setCountry(e.target.value.toLowerCase())
    } 

    return (
        <main>
            <Form
                onSubmit={onSubmit}
                onReset={reset}
                country={country}
                setCountry={setCountryValue}
            />
            <Table
                universityList={universityList}
            />
            <button
                type="submit"
                className="btn more"
                onClick={onSubmit}
                style={{ 'display': universityEnded || universityList.length === 0 ? 'none' : 'block' }}
            >
                Load more
            </button>
        </main>
    )
}

export default MainPage;