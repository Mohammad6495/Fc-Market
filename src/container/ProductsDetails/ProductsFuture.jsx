import React from 'react'

const ProductsFuture = ({ future }) => {
    return (
        <div className='row'>
            <div className='col-lg-5'>
                <table className='table table-striped mt-4'>
                    <tbody>
                        {future.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <th>{item.title} : </th>
                                    <td>{item.futureValue}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductsFuture