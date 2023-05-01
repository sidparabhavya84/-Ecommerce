import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import './Product.css'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAsync } from '../../Services/action/Product.action';

function Product() {

    const { Products } = useSelector(state => state.productReducer);

    const dispatch = useDispatch();

    const get = () => {
        dispatch(getProductsAsync())
    }

    useEffect(() => {
        get()
    }, [])

    return (
        <>
            <section className='p-3'>
                <div className='container'>
                    <div className='row'>
                        <div className="section-title text-dark mb-2 mt-4" data-aos="fade-up">
                            <h2>Product</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        {
                            Products.map((pro) => {
                                return (
                                    <>
                                        <div className='col-4 mb-4 mt-4'>
                                            <Card style={{ width: '25rem' }}>
                                                <Card.Img variant="top" src={pro.img} style={{ height: '400px', width: 'auto' }} className='p-2 back' />
                                                <Card.Body>
                                                    <Card.Title>{pro.title}</Card.Title>
                                                    <Card.Text>
                                                        {pro.price} &#8377;
                                                    </Card.Text>
                                                    <Card.Text>
                                                        {pro.stock}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product