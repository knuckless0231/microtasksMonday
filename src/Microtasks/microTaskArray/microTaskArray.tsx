const topCars: Array<TopCapsType> = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]


export type TopCapsType = {
    manufacturer: string
    model: string
}


export const MicroTaskArr = () => {

    return (
        <div> {topCars.map((c) => {
            return (
                // <div>{c.model}</div>
                <div>
                    <table>
                        <tr>
                            <th>Cars Name</th>
                            <th>Cars Model</th>
                        </tr>
                        <tr>
                            <td id={c.manufacturer}>{c.manufacturer}</td>
                            <td id={c.model}>{c.model}</td>
                        </tr>
                    </table>
                </div>
            );
        })}
        </div>

    );
}