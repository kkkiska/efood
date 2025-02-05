import Tab from './Tab'
import Burger from './images/Burger'
import Pizza from './images/Pizza'
import Sandwich from './images/Sandwich'
import AsianFood from './images/AsianFood'
import SetMenu from './images/SetMenu'

const TabsBar = ({TabHandler, category}) => {
    
    return (
        <div className='tabs'>
            <Tab 
                name="Burger" 
                image={<Burger />} 
                isActive={category === 'Burger'} 
                TabHandler={TabHandler} 
            />
            <Tab 
                name="Pizza" 
                image={<Pizza />} 
                isActive={category === 'Pizza'} 
                TabHandler={TabHandler} 
            />
            <Tab 
                name="Sandwich" 
                image={<Sandwich />} 
                isActive={category === 'Sandwich'} 
                TabHandler={TabHandler} 
            />
            <Tab 
                name="Asian Food" 
                image={<AsianFood />} 
                isActive={category === 'Asian Food'} 
                TabHandler={TabHandler} 
            />
            <Tab 
                name="Set Menu" 
                image={<SetMenu />} 
                isActive={category === 'Set Menu'} 
                TabHandler={TabHandler} 
            />
        </div>
    )
}

export default TabsBar