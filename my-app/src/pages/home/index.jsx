import { Link } from "react-router-dom";

import { Button } from "../../components/Button";

const Home = () => {
    return (<>
        <h1>Home</h1>
        <Button> teste 1</Button>
        <Button variant="secondary"> teste 2</Button>
        <Link to="/login"> ir para o login</Link>
    </>)
}

export{Home}