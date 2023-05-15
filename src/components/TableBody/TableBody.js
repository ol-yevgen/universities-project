import { Fragment } from 'react';

export const TableBody = ({ universityList }) => {

    const tableBody = universityList.map((item, index) => {
        return (
            <Fragment key={item.id}>
                <tr className="university__table" >
                    <td className="university__item">{index + 1}</td>
                    <td className="university__item">{item.domain}</td>
                    <td className="university__item">{item.country}</td>
                    <td className="university__item">{item.code}</td>
                    <td className="university__item">
                        <a href={item.web} target="_blank" rel="noopener noreferrer">{item.web}</a>
                    </td>
                    <td className="university__item">{item.name}</td>
                </tr>
            </Fragment>
        )
    });

    return tableBody;
}