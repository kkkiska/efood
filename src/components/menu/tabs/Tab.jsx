const Tab = ({name, image, isActive, TabHandler}) => {
    return (
        <div className={isActive ? 'tabs__elem active' : 'tabs__elem'} onClick={() => TabHandler(name)}>
              {image}
              <div className='tabs__elem-text'>{name}</div>
        </div>
    )
}

export default Tab