import React from 'react'

const NewsItem=(props)=> {

    let {title, description, imageUrl, newsUrl, publishDate} = props;
    return (
    <div>
        <div className="card mb-3">
            <img src={!imageUrl?`${props.defaultImage}`:imageUrl} style={{height:"196px",borderBottom: "6px solid indianred"}} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="d-inline">
                    <p style={{
                        color: "#080808b3", 
                        cursor: "context-menu", 
                        fontWeight: "100", 
                        textDecoration: "none",
                        letterSpacing: "3px",
                        fontFamily: "fantasy"
                        }}> 
                    <b style={{
                        fontSize: "18px",
                        padding: "3px 3px 3px 5px",
                        color: "#000000d9",
                        cursor: "context-menu",
                        borderLeft: "10px solid darkred",
                        backgroundColor: "darkviolet",
                        borderRadius: "2px 14px 15px 2px",
                        marginRight: "5px",
                        borderRight: "5px solid white"
                        }}> 
                        &#9200; 
                    </b>
                    {publishDate}</p>
                </div>
                <a className="card-title" href={newsUrl} target="_blank"  rel="noreferrer" 
                style={{
                        color: "black", 
                        cursor: "pointer", 
                        fontSize: "20px", 
                        fontWeight: "500", 
                        textDecoration: "none",
                        fontFamily: "'Anton', sans-serif"
                }}>{title}</a>
                <hr/>
                <p className="card-text"
                 style={{
                        color: "black", 
                        cursor: "text", 
                        fontWeight: "200", 
                        textDecoration: "none",
                        fontFamily: "'Yellowtail', cursive"
                }}>{description}</p>
                <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-sm btn-success">Read More &rarr;</a>
            </div>
        </div>
    </div>
    )
}

export default NewsItem