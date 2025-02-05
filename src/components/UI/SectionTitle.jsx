const SectionTitle = ({children, className}) => {
    return (
        <h2 className={`section_title ${className ?? ''}`}>{children}</h2>
    )
}

export default SectionTitle