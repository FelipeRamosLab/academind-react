import { formatter } from '../util/investment';

export default function ResultsRow({ year, annualInvestment, interest, valueEndOfYear }) {
    return (<tr>
        <td>{year}</td>
        <td>{formatter.format(annualInvestment)}</td>
        <td>{formatter.format(interest)}</td>
        <td>{formatter.format(valueEndOfYear)}</td>
        <td>{formatter.format(valueEndOfYear)}</td>
    </tr>);
}
