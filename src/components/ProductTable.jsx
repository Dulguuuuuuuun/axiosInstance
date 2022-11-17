import React from "react";
import Products from "./Products";
import ProductCategoryRow from "./ProductCategoryRow";


function ProductTable(){
    const row = [];
    let lastCategory = null;

Products.forEach((Products) =>{
    if(Products.category !== lastCategory){
row.push(
    <ProductCategoryRow 
    category={Products.category}
    key={Products.category}
    />
)
    }
    row.push(
        <ProductRow
          product={Products}
          key={Products.name} />
      );
})

    return(

    )
}

export default ProductTable;