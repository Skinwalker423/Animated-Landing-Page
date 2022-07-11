import './index.scss';


const AnimatedLetters = ({letterClass, strArray, idx }) => {
    return (
        <span>
            {strArray.map((letter, i) => {
                return <span key={letter + i} className={`${letterClass} _${i + idx}`}>{letter}</span>
            })}
        </span>
    )
}

export default AnimatedLetters;