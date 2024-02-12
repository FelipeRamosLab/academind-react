export default function InputGroup({ label, field, handler, userInput }) {
    return (<div className="input-group">
        <label>{label || ''}</label>
        <input type="number" value={userInput[field]} onChange={(ev) => handler(ev, field)} />
    </div>);
}