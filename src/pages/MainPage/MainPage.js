import { useState, useCallback } from "react";

import { Form } from "../../components/Form/Form";

const MainPage = () => {
    const [country, setCountry] = useState('');
    const [universityList, setUniversitylist] = useState([]);
    const [offset, setOffset] = useState(10);
    const [universityEnded, setUniversityListEnded] = useState(false);
    
    return (
        <main>
            <Form
               
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