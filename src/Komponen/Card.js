import Button from 'react-bootstrap/Button';
import bookmark from '../bookmark.svg'
import love from '../love.svg'

export const KomponenCard = (props) => {
        return (
            <>
                <div className='card p-2' style={{ width: '18rem' }}>
                    <img className='card-img-top' src={props.image} alt='..' />
                    <div className='card-body'>
                        <h5 className='card-title'>{props.title}</h5>
                        <hr className='p-0 m-0' />
                        <p>{props.categoryId}</p>
                        <p className='card-content'>
                            {props.content}
                        </p>
                        <Button variant="dark" className=''>More</Button>
                        <Button variant=''><img src={bookmark} alt="logo" /></Button>
                        <Button variant=''><img src={love} alt="logo" /></Button>
                        <div className='post-user-info row'>
                            <img className='avatar-user' src={props.imgProfile}></img>
                            <div className='post-user-info-content'>
                                <p className='postBy text-sm mt-2 mb-0 p-0'> Posted by {props.username} </p>
                                <p className='createTime text-sm m-0 p-0'>Created at</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

