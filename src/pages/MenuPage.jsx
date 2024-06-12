import React, { useState} from 'react'; 
import Menu from '../components/menu/Menu';
import Categories from '../components/menu/Categories';
import items from '../data/menu.js';
import '../components/menu/menu.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

export default function MenuPage() {
    const [menuItems, setMenuItems] = useState(items);
    const [activeCategory, setActiveCategory] = useState("");
    const [categories, setCategories] = useState(allCategories);
    
    const filterItems = (category) => {
        setActiveCategory(category); 
        if(category === 'all') {
            setMenuItems(items)
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems); 
    }
    return (
        <div className='menu section'>
            <div className='header'>
            <h2> Menu </h2>
            </div>
            <Categories categories={categories} activeCategory={activeCategory} filterItems={filterItems} />
            <Menu items={menuItems} />
        </div>
    );
};