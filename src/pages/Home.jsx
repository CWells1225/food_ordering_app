import '../pages/home.css';

export default function Home() {
    return (
        <>
        <div className='landing_section'>  
        <div className='home_page_container'>
            <div className='business_logo'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&s' className='img-fluid' alt='' />
            </div>
        
        <div className='home_btn'> 
        <div className='home_order_online'>
            <a href='/menu-page' className='btn'> Order Now </a>
        </div>
        </div>
        </div>
        </div>

        <div className='business_logo'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&s' className='img-fluid' alt='' />
        </div>
        </>
    );
}