import React from 'react'
import {NewsBlock} from "./NewsBlock/NewsBlock"
import {PostersBlock} from "./PostersBlock/PostersBlock"

export const Content = () => {
    return (
        <div className="content">
            <div className="container">
                <div className="content-block">
                    <NewsBlock/>
                    <PostersBlock/>
                </div>
            </div>
        </div>
    )
}