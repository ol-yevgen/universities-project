import { Fragment } from "react"

export const TableHeader = () => {
    const tableHeaderLabels = ['No', 'Domen', 'Country', 'Code', 'Web Page', 'Name']
    
    const renderTableHeader = (arr) => {
        const tableHeaderItem = arr.map((item, index) => {
            return (
                <Fragment key={item}>
                    <th>{item}</th>
                </Fragment>
            )
        });
        return tableHeaderItem
    }

    return renderTableHeader(tableHeaderLabels)
}