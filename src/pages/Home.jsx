import SlidingImages from '../components/home/SlidingImages';
import '../pages/home.css';

export default function Home() {
    return (
        <>
        <div className='home_page'>
        <div>
            <h1> FRESH. CLEAN. HEALTHY. </h1>
        </div>

        <div className='hmpg_img'>
            <SlidingImages/>
        </div>

        <div className='hmpg_buttons'>
        <div className='hmpg_menu_link'>
            <a href='/menu_page'> 
            <button> VIEW MENU </button>
            </a>
        </div>

        <div className='hmpg_order_online'>
            <button> ORDER ONLINE </button>
        </div>
        </div>
        </div>
        </>
    );
}