import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, loadProducts } from '../redux/actions/action';
import { useNavigate } from "react-router-dom"

const HomePage = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.productReducer);

  const navigate = useNavigate();

  const products = useSelector((state) => state.productReducer.products);
  const deletedProduct = useSelector((state) => state.productReducer.deletedProduct);
  const isProductVisible = useSelector((state) => state.productReducer.loading);

  console.log(`loading : ${data.loading}`);
  console.log(`data : ${data.products}`);

  useEffect(() => {
    dispatch(loadProducts());
    // eslint-disable-next-line
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  }

  return (
    <>
      <div style={{ margin: 16 }}>
        <h1>All Products</h1>
        <p>{deletedProduct === "" ?
          <p></p> : <p style={{ color: 'red', fontWeight: 'bold' }}>
            Deleted Product: <br /> {
              `title: ${deletedProduct.title},
              category: ${deletedProduct.category}`
            }</p>}</p>
        <button onClick={() => navigate(`/addProduct`)}>Add Product</button>
        <hr />
        <div style={{ margin: 16 }}>
          <table className='table'>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>

              {
                isProductVisible ?
                  <h3 style={{ color: 'red', margin: 25 }}>Please wait............</h3>
                  :
                  Array.isArray(products) && products.map((item, index) => {
                    return <>
                      <tr>
                        <td>{index + 1}</td>
                        <td><img src={item.image} height={100} width={100} alt='' /></td>
                        <td>{item.title}</td>
                        <td><p
                          onClick={() => handleDelete(item.id)}
                          style={{
                            backgroundColor: 'red', borderRadius: 100, color: 'white', textAlign: 'center',
                            padding: 8
                          }}>X</p></td>
                      </tr>
                    </>
                  })
              }

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default HomePage