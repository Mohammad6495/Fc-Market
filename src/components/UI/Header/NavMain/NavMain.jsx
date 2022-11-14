import React from 'react';

import LinkItem from './Link-Item';
import ListDropDown from './List-DropDown';

const NavMain = (props) => {
    return (
        <>
            <div className='nav-main' >
                <div className='container'>
                    <div className=' d-flex justify-content-between'>
                        <div className={props.styled ? 'nav-link-list show-main' : 'nav-link-list'} >
                            <button onClick={props.clickChangeStyle} className='btn-close-menu btn-close d-block d-lg-none'></button>
                            <ul className='list-styled d-flex flex-column flex-lg-row'>
                                <LinkItem href='/' className='list-item' title='خانه' />
                                <li className='list-item px-3' title='فروشگاه'>
                                    <a style={{cursor:'pointer'}} onClick={props.click}>فروشگاه</a>
                                    {props.show ? <i className='fa fa-angle-up d-inline d-lg-none m-1 font-bold'></i> : <i className='fa fa-angle-down d-inline d-lg-none m-1 font-bold'></i>}
                                    <ListDropDown show={props.show} />
                                    <span className='header-new-badge'>جدید</span>
                                </li>
                               
                                <LinkItem href='contactus' className='list-item px-3' title='تماس با ما' />
                                <LinkItem href='aboutus' className='list-item px-3' title='در باره ما' />
                            </ul>
                        </div>
                        <div className='nav-info d-none d-xl-block'>
                            <span>برای اولین سفارش خود تا 30% تخفیف دریافت کنید</span> |
                            <i className='fa fa-cut mx-2'></i>
                            <span>کد تبلیغاتی</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavMain