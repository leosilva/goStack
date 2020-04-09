import React, {useEffect, useState} from 'react';
import api from '../../services/api';

import './styles.css';

export default function Main() {
    const [products, setProducts] = useState([]);
    const [productInfo, setProductInfo] = useState({});
    const [page, setPage] = useState(1);

    async function loadProducts(page) {
        api.get(`product`, {
            params: {page}
        }).then(response => {
            setProducts(response.data.data);
            setProductInfo(response.data.pagination);
            setPage(response.data.pagination.currentPage);
        });
        
        console.log(products);
    }

    function nextPage() {
        if (page === productInfo.lastPage) {
            return
        }

        const pageNumber = parseInt(page) + 1;
        loadProducts(pageNumber);
    }

    function prevPage() {
        
    }

    useEffect(() => {
        loadProducts(1);
    }, []);

    return (
        <div className="product-list">
            <h1>Contagem de Produtos: {productInfo.total}</h1>
            {products.map(product => (
                <article key={product.id}>
                    <strong>{product.nome}</strong>
                    <p>{product.tipo}</p>
                    <a href="">Acessar</a>
                </article>
            ))}
            <div className="actions">
                <button onClick={prevPage}>Anterior</button>
                <button onClick={nextPage}>Próximo</button>
            </div>
        </div>
    );
}