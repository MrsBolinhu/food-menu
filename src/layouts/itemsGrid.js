import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import requestService from '../service/api/request.service';
import Card from '../components/card';
import Loading from '../layouts/skeletonLoading';
import { SearchContext } from '../pages/Home'


const ItemsGrid = () => {
    const { search } = useContext(SearchContext)

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function loadItems() {
            const response = await requestService.listItems()
            setItems(response.data)
            setLoading(true);
        }
        loadItems();
    }, [])

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7">
            {loading ? (
                items.filter((item) => {
                    if (item.name.includes(search)) {
                        return item
                    }
                    //return item
                }).map((item) => {
                    return (
                        <Link to={"/Item"} state={{ item: item, key: item.id }}>
                            <Card key={item.id}
                                title={item.name}
                                description={item.description}
                                price={item.price}
                                img={item.image}
                            />
                        </Link>
                    )
                })
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default ItemsGrid