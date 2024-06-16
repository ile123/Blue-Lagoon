export default function Button({ action, styling, text }) {
    return(
        <button onClick={action} className={styling}>{text}</button>
    );
}