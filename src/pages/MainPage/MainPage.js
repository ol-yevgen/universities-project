import { useState, useCallback } from "react";

import { Form } from "../../components/Form/Form";

const MainPage = () => {
    const [country, setCountry] = useState('');
    const [universityList, setUniversitylist] = useState([]);
    const [offset, setOffset] = useState(10);
    const [universityEnded, setUniversityListEnded] = useState(false);

    //State reset method
    const reset = useCallback(() => {
        setCountry(country => '')
        setUniversitylist(universityList => [])
        setOffset(offset => 10)
        setUniversityListEnded(universityEnded => false)
    }, [])

    return (
        <main>
            <Form
                onReset={reset}
            />
            <button
                type="submit"
                className="btn more"
            >
                Load more
            </button>
        </main>
    )
}

export default MainPage;