const MarkingText = ({children, className}) => {
    return <span className={`primary-color-text ${className ?? ''}`}>{children}</span>
}

export default MarkingText