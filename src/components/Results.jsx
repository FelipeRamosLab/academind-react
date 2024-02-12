import { calculateInvestmentResults } from '../util/investment';
import ResultsRow from './ResultsRow';

export default function Results({ userInput }) {
    const result = calculateInvestmentResults(userInput);

    console.log(result)
    return (<table id="result">
        <thead>
            <tr>
                <td>Year</td>
                <td>Investment Value</td>
                <td>Interest (Year)</td>
                <td>Total Interest</td>
                <td>Invested Capital</td>
            </tr>
        </thead>

        <tbody>
            {result.map(row => <ResultsRow {...row} />)}
        </tbody>
    </table>);
}
