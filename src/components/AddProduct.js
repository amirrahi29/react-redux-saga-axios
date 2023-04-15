import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/actions/action';

const AddProduct = () => {

  const dispatch = useDispatch();
  const stateData = useSelector((state)=>state.productReducer);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const submitProductForm = () => {
    const data = {
          title: title,
          price: price,
          description: description,
          image: image,
          category: category
      };
      console.log("product data:", data);
      dispatch(addProduct(data));
}

  return (
    <div style={{margin:16}}>

      <h1>Add Product</h1>
      <hr/>
        <input type='text' placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} /><br/><br/>
        <input type='text' placeholder="Enter price" value={price} onChange={e => setPrice(e.target.value)} /><br/><br/>
        <input type='text' placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)} /><br/><br/>
        <input type='text' placeholder="Enter image" value={image} onChange={e => setImage(e.target.value)} /><br/><br/>
        <input type='text' placeholder="Enter category" value={category} onChange={e => setCategory(e.target.value)} /><br/><br/>
        {
          stateData.loading?
          <h1>Loading....</h1>:
          <>
          {stateData.products == null?
          <p>No response</p>:<p>{
             `title: ${stateData.products.title},
              category: ${stateData.products.category}`
          }</p>}
          <button onClick={()=>submitProductForm()}>Add Now</button></>
        }
        
    </div>
  )
}

export default AddProduct;