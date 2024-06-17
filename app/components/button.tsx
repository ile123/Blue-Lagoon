export default function Button({ action, styling, content }) {
    return(
        <button onClick={action} className={styling}>{content}</button>
    );
}