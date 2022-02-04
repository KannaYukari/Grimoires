export default function TimeToRead(props) {
    const minTimeToRead = Math.ceil(props.words/200);
    const maxTimeToRead = Math.ceil(props.words/100);
    const timeToRead = `${minTimeToRead} a ${maxTimeToRead} minutos de leitura`;
    return(timeToRead);
}