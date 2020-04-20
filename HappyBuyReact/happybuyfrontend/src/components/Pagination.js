import React from 'react'
import './Pagination.css'
import { Button } from '@material-ui/core';
export default function Pagination({productsPerPage,totalProducts,paginate}){
        const pageNumbers =[];
        for(let i=1; i<= Math.ceil(totalProducts/productsPerPage); i++){
            pageNumbers.push(i);
        }
        return (
            <nav>
                <ul className="pagination" >
                    {pageNumbers.map(number =>(
                        <li key={number} className="page-item">
                            <Button color="primary"  onClick={()=>paginate(number)}  className="page-link">
                                {number}
                            </Button>
                        </li>
                    ))
    
                    }
                </ul>
            </nav>
        )
    }
