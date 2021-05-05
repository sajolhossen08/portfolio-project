import React, { useState } from 'react';
import AllProjects from '../Components/AllProjects/AllProjects';
import Categories from '../Components/Categories/Categories';
import MenuItems from '../Components/MenuItems/MenuItems';
import Title from '../Components/Title/Title';

const allCategories = ['All', ...new Set(AllProjects.map(item => item.category))];

const ProjectsPage = () => {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(AllProjects);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(AllProjects)
            return;
        }
        const filteredData  = AllProjects.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }
    return (
        <div className="ProjectsPage" style={{margin: "0rem 10rem", paddingTop:"3rem"}}>
            <div className="title">
                <Title title={'Projects'} span={'Projects'} />
            </div>
            <div className="projects-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    );
};

export default ProjectsPage;