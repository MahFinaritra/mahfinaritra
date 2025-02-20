import { useState } from "react";
import React from "react";
import { portfolio } from "../data/dummydata";
import { Visibility } from "@mui/icons-material";
import Heading from "../common/Heading";

const allCategory = ['all', ...new Set(portfolio.map((item) => item.category))]
export const Portfolio = () => {
    const [list, setLists] = useState(portfolio)
    const [category, setCategory] = useState(allCategory)
    const filterItems = (category) => {
        const newItems = portfolio.filter((item) => item.category === category)
        setLists(newItems)

        if(category==="all") {
            setLists(portfolio)
        }
    }

    return (
        <>
            <article>
                <div className="container">
                    <Heading title="Portfolio"></Heading>
                    <div className="catButton">
                        {category.map((category) => (
                            <button className="primaryBtn" onClick={() => 
                                filterItems(category)}>{category}</button>
                        ))}
                    </div>
                    <div className="content grid3">
                        {list.map((items) => (
                            <div className="box">
                                <div className="img">
                                    <img src={items.cover} alt="" />
                                </div>
                                <div className="overlay">
                                    <h3>{items.title}</h3>
                                    <span>{items.name}</span>
                                    <Visibility />
                                </div>
                            </div>   
                        ))}
                    </div>
                </div>
            </article>
        </>
    )
}