import { TableHeader } from "../TableHeader/TableHeader";
import { TableBody } from "../TableBody/TableBody";

export const Table = ({ universityList }) => {

    if (universityList.length === 0) {
        return <h1 className="university">Nothing choosed</h1>
    }

    return (
        <table className="university">
            <thead>
                <tr>
                    <TableHeader/>
                </tr>
            </thead>
            <tbody >
                <TableBody
                    universityList={universityList}
                />
            </tbody>
        </table>
    )
}