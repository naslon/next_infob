import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'

export default function Page() {
    const router = useRouter()
    return <>
        <Container className="text-center">
            <h1>Post: {router.query.id}</h1>
        </Container>
    </>
}