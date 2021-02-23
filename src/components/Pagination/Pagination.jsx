import React, {useEffect, useState} from 'react'
import previous from "../../img/content/news/pagination/previous.svg"
import next from "../../img/content/news/pagination/next.svg"


const Pagination = React.memo(({currentPage, itemsOnPage, totalItems, changePageNumber}) => {

    const [mobileMode, setMobileMode] = useState(false)
    useEffect(() => window.addEventListener('resize', () => setMobileMode(!mobileMode)),[window.innerWidth])

    let pagesCount = Math.ceil(totalItems / itemsOnPage)
    let firstPage
    let lastPage

    if (window.innerWidth > 500){
        if (currentPage == 1) {
            firstPage = currentPage
            lastPage = currentPage + 4
        } if (currentPage == 2) {
            firstPage = currentPage -1
            lastPage = currentPage + 3
        } if(currentPage > 2) {
            firstPage = currentPage -2
            lastPage = currentPage + 2
        } if(currentPage > 33) {
            firstPage = currentPage -3
        }  if(currentPage > 34) {
            firstPage = currentPage -4
        }
    } else {
        if (currentPage == 1) {
            firstPage = currentPage
            lastPage = currentPage + 2
        } if (currentPage == 2) {
            firstPage = currentPage -1
            lastPage = currentPage + 1
        } if(currentPage > 2) {
            firstPage = currentPage -1
            lastPage = currentPage +1
        } if(currentPage > 33) {
            firstPage = currentPage -1
        }  if(currentPage > 34) {
            firstPage = currentPage -2
        }
    }

    let pages = []

    if (firstPage <= 0) firstPage = 1
    if (lastPage >= pagesCount) lastPage = pagesCount

    for (let i = firstPage; i <= lastPage; i++) {
        pages.push(i)
    }

    const clickPrevButton = () => {
        if (currentPage > 1) changePageNumber(currentPage - 1)
    }

    const clickNextButton = () => {
        if (currentPage < pagesCount) changePageNumber(currentPage + 1)
    }

    return (
        <div className="news-pagination">
            <div className="news-pagination__previous"
                 disabled={currentPage === 1}
                 onClick={clickPrevButton}
            >
                <img src={previous} alt="previous"/>
            </div>
            <div className="news-pagination__items">
                {currentPage > 3 && <>
                    <li className="news-pagination__item" onClick={() => changePageNumber(1)}>
                        <span
                            className="news-pagination__item-link"
                        >
                            {1}
                        </span>
                    </li>
                    <div className="news-pagination__dots">
                        <span>...</span>
                    </div>
                </>}
                {pages.map(pageN =>
                <li key={pageN} className={currentPage <= 3 ? "news-pagination__item-small" : "news-pagination__item-big"} onClick={() => changePageNumber(pageN)}>
                    <span
                        className={ pageN === currentPage ? "news-pagination__item-link__active" : "news-pagination__item-link"}
                       >
                        {pageN}
                    </span>
                </li>)}
                {currentPage < pagesCount - 2 && <>
                    <div className="news-pagination__dots">
                        <span>...</span>
                    </div>
                    <li className="news-pagination__item" onClick={() => changePageNumber(pagesCount)}>
                        <span
                            className="news-pagination__item-link"
                         >
                            {pagesCount}
                        </span>
                    </li>
                </>}
            </div>
            <div className="news-pagination__next"
                 disabled={currentPage === pagesCount}
                 onClick={clickNextButton}
            >
                <img src={next} alt="next"/>
            </div>
        </div>
    )
})


export default Pagination


