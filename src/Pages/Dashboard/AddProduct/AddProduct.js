import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('https://gentle-crag-50031.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Congratulation!!! New product added.');
                    reset();
                }
            });
    };

    return (
        <div>
            <h3 className="fw-light py-4">ADD PRODUCT</h3>
            <div className="w-100 border border-3 rounded-3 px-5 pb-5 mb-5">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column pt-5">
                    <input {...register("model", { required: true, maxLength: 200 })} placeholder="Model" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                    <input {...register("brand", { required: true, maxLength: 200 })} placeholder="Brand" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                    <input {...register("cost", { required: true })} placeholder="Product Cost" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                    <input type="url" {...register("img", { required: true })} placeholder="Image URL" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                    <input {...register("desp", { required: true, maxLength: 2000 })} placeholder="Description" className="border-0 border-bottom border-3 fs-6 fw-bold py-3" />
                    <input type="submit" value="Add Product" className="bg-dark bg-gradient w-50 mx-auto text-white fs-5 rounded mt-3 py-2" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;