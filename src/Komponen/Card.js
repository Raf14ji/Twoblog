import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bookmark from '../bookmark.svg'
import love from '../love.svg'

export const KomponenCard = (props) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark" className=''>More</Button>
                    <Button variant=''><img src={bookmark} alt="logo" /></Button>
                    <Button variant=''><img src={love} alt="logo" /></Button>
                </Card.Body>
            </Card>
        </>
    );
}
