import {useEffect, useState} from "react";

export function NewsList() {
    const [news, setNews] = useState([])

    function loadData() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(jsonData => setNews(jsonData))
            .catch(error => console.log("load erro"))

    }


    useEffect(loadData, [])
    return (
        <>
            {
                news.map(item => (
                    <News
                        key={item.id}
                        img="https://picsum.photos/400/300/?random"
                        title={item.title}
                        subtitle={item.body}
                    />
                ))
            }
        </>

    );
}

function News(props) {
    const {img, title, subtitle} = props
    return (
        <div className="card" style={{margin: 12}}>
            <div className="card-body d-flex">
                <img src={img} className="rounded" width={100} height={100}/>
                <div className="ms-2">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
            </div>
        </div>
    )
}

